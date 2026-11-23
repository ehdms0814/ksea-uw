"use client";

import { useEffect, type RefObject } from "react";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function isFormControl(el: EventTarget | null): el is FormControl {
  return (
    el instanceof HTMLInputElement ||
    el instanceof HTMLSelectElement ||
    el instanceof HTMLTextAreaElement
  );
}

function linkError(el: FormControl, shown: boolean) {
  const errorId = el.dataset.error;
  if (!errorId) return;
  const ids = (el.getAttribute("aria-describedby") || "")
    .split(/\s+/)
    .filter((id) => id && id !== errorId);
  if (shown) ids.push(errorId);
  if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
  else el.removeAttribute("aria-describedby");
}

function spokenText(node: HTMLElement): string {
  const copy = node.cloneNode(true) as HTMLElement;
  copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
  copy.querySelectorAll('[role="img"][aria-label]').forEach((n) => {
    const label = n.getAttribute("aria-label");
    n.replaceWith(label ? `${label}: ` : "");
  });
  return (copy.textContent || "").replace(/\s+/g, " ").trim();
}

/**
 * Synchronizes programmatic ARIA state (aria-invalid, dynamic aria-describedby, and a
 * single polite live region) with native :user-invalid, plus provides a WeakMap fallback
 * for browsers lacking :user-invalid support.
 */
export function useAccessibleFormValidation(formRef: RefObject<HTMLFormElement | null>) {
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");

    const announcer = document.createElement("div");
    announcer.setAttribute("aria-live", "polite");
    announcer.classList.add("visually-hidden");
    document.body.append(announcer);

    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    let announcedField: FormControl | undefined;

    const flagged = new WeakSet<FormControl>();
    const announced = new WeakSet<FormControl>();
    const dirtyState = new WeakMap<FormControl, { hasInteracted: boolean; hasBlurred: boolean }>();

    const announceError = (el: FormControl) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const errorNode = document.getElementById(errorId);
      if (!errorNode) return;
      const labelNode = el.labels?.[0];
      const labelPrefix = labelNode ? `${spokenText(labelNode)}: ` : "";

      if (announceTimer) clearTimeout(announceTimer);
      announcer.textContent = "";
      announcedField = el;
      announceTimer = setTimeout(() => {
        announcer.textContent = labelPrefix + spokenText(errorNode);
      }, 500);
    };

    const syncAria = (el: FormControl, announce = false, forceFallbackValidity?: boolean) => {
      const invalid =
        forceFallbackValidity !== undefined
          ? !forceFallbackValidity
          : supportsUserInvalid
            ? el.matches(":user-invalid")
            : el.classList.contains("user-invalid-fallback");

      if (invalid) {
        if (announce && !announced.has(el)) {
          announceError(el);
          announced.add(el);
        }
        el.setAttribute("aria-invalid", "true");
        linkError(el, true);
        flagged.add(el);
      } else if (flagged.has(el) || el.getAttribute("aria-invalid") !== "true") {
        el.setAttribute("aria-invalid", "false");
        linkError(el, false);
        flagged.delete(el);
        announced.delete(el);
        if (announcedField === el) {
          if (announceTimer) clearTimeout(announceTimer);
          announcer.textContent = "";
        }
      }
    };

    const updateFallback = (el: FormControl, announce = false) => {
      const isValid = el.validity.valid;
      el.classList.toggle("user-invalid-fallback", !isValid);
      el.classList.toggle("user-valid-fallback", isValid);
      syncAria(el, announce, isValid);
    };

    // Start every field at aria-invalid="false" so Firefox/Safari don't expose empty required fields on load
    form.querySelectorAll("input, select, textarea").forEach((node) => {
      if (isFormControl(node)) {
        syncAria(node, false);
      }
    });

    const handleBlur = (e: Event) => {
      if (!isFormControl(e.target)) return;
      if (supportsUserInvalid) {
        syncAria(e.target, true);
      } else {
        const state = dirtyState.get(e.target) || { hasInteracted: false, hasBlurred: false };
        state.hasBlurred = true;
        dirtyState.set(e.target, state);
        if (state.hasInteracted) updateFallback(e.target, true);
      }
    };

    const handleInput = (e: Event) => {
      if (!isFormControl(e.target)) return;
      if (supportsUserInvalid) {
        if (e.target.hasAttribute("aria-invalid")) syncAria(e.target, false);
      } else {
        const state = dirtyState.get(e.target) || { hasInteracted: false, hasBlurred: false };
        state.hasInteracted = true;
        dirtyState.set(e.target, state);
        if (state.hasBlurred) updateFallback(e.target, false);
      }
    };

    const handleChange = (e: Event) => {
      if (!isFormControl(e.target)) return;
      if (supportsUserInvalid) {
        syncAria(e.target, true);
      } else {
        const state = dirtyState.get(e.target) || { hasInteracted: false, hasBlurred: false };
        state.hasInteracted = true;
        dirtyState.set(e.target, state);
        if (state.hasBlurred || e.target.type === "checkbox" || e.target.tagName === "SELECT") {
          updateFallback(e.target, true);
        }
      }
    };

    const handleInvalid = (e: Event) => {
      if (!isFormControl(e.target)) return;
      announced.add(e.target);
      if (supportsUserInvalid) {
        syncAria(e.target, false);
      } else {
        dirtyState.set(e.target, { hasInteracted: true, hasBlurred: true });
        updateFallback(e.target, false);
      }
    };

    const handleReset = () => {
      setTimeout(() => {
        Array.from(form.elements).forEach((node) => {
          if (!isFormControl(node)) return;
          dirtyState.delete(node);
          node.classList.remove("user-invalid-fallback", "user-valid-fallback");
          syncAria(node, false, true);
        });
      });
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleChange, true);
    form.addEventListener("invalid", handleInvalid, true);
    form.addEventListener("reset", handleReset, true);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
      form.removeEventListener("change", handleChange, true);
      form.removeEventListener("invalid", handleInvalid, true);
      form.removeEventListener("reset", handleReset, true);
      if (announceTimer) clearTimeout(announceTimer);
      announcer.remove();
    };
  }, [formRef]);
}

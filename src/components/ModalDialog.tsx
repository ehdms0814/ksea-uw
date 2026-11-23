"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  closeLabel: string;
  variant?: "default" | "lightbox";
  children: ReactNode;
}

/**
 * Native <dialog> modal following modern-web-guidance:
 * - Opened via showModal() for native top-layer, inert backdrop, focus return, and Esc handling.
 * - Uses closedby="any" for declarative light-dismiss, plus a pointerdown/pointerup bounding-box
 *   fallback for browsers without HTMLDialogElement.prototype.closedBy.
 * - No role="dialog", no aria-modal, no root scroll lock.
 */
export function ModalDialog({
  open,
  onClose,
  titleId,
  closeLabel,
  variant = "default",
  children,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      onClose();
    };

    dialog.addEventListener("close", handleClose);

    // Mandatory fallback for browsers without native closedby="any" support (e.g. Safari)
    let cleanupFallback: (() => void) | undefined;
    if (
      typeof HTMLDialogElement !== "undefined" &&
      !("closedBy" in HTMLDialogElement.prototype)
    ) {
      const isOutside = (e: PointerEvent) => {
        const rect = dialog.getBoundingClientRect();
        return (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        );
      };

      let pressedOutside = false;
      const handlePointerDown = (e: PointerEvent) => {
        pressedOutside = isOutside(e);
      };
      const handlePointerUp = (e: PointerEvent) => {
        if (pressedOutside && isOutside(e) && dialog.open) {
          dialog.close();
        }
        pressedOutside = false;
      };

      dialog.addEventListener("pointerdown", handlePointerDown);
      dialog.addEventListener("pointerup", handlePointerUp);
      cleanupFallback = () => {
        dialog.removeEventListener("pointerdown", handlePointerDown);
        dialog.removeEventListener("pointerup", handlePointerUp);
      };
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
      cleanupFallback?.();
    };
  }, [onClose]);

  const dialogClass =
    variant === "lightbox"
      ? "ksea-dialog ksea-dialog--lightbox w-full rounded-2xl shadow-2xl"
      : "ksea-dialog w-full rounded-2xl shadow-2xl";

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className={dialogClass}
      {...({ closedby: "any" } as Record<string, string>)}
    >
      <div
        className={
          variant === "lightbox"
            ? "relative overflow-y-auto rounded-2xl border border-white/15 bg-[#140e21] text-white"
            : "relative overflow-y-auto rounded-2xl border border-stone-border bg-surface text-ink"
        }
      >
        <form method="dialog" className="absolute right-4 top-4 z-10">
          <button
            type="submit"
            value="close"
            aria-label={closeLabel}
            className={
              variant === "lightbox"
                ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-bright"
                : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-border bg-surface/90 text-ink-secondary transition-colors hover:bg-subtle hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
            }
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}

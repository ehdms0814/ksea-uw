"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_INFO } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-border/90 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky"
        >
          <BrandMark className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-ink">
              {SITE_INFO.shortName}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
              UW Korean STEM
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "rounded-full bg-husky/10 px-4 py-2 text-sm font-semibold text-husky transition-colors"
                    : "rounded-full px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-subtle hover:text-ink"
                }
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: EN / KR Toggle + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <div
            role="group"
            aria-label={locale === "en" ? "Language switcher" : "언어 전환"}
            className="inline-flex items-center rounded-full border border-stone-border bg-surface p-0.5 text-xs font-semibold shadow-xs"
          >
            <span className="px-2 text-ink-muted" aria-hidden="true">
              <Globe className="h-3.5 w-3.5" />
            </span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={
                locale === "en"
                  ? "rounded-full bg-husky px-2.5 py-1 text-white transition-colors"
                  : "rounded-full px-2.5 py-1 text-ink-secondary transition-colors hover:text-ink"
              }
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale("ko")}
              aria-pressed={locale === "ko"}
              className={
                locale === "ko"
                  ? "rounded-full bg-husky px-2.5 py-1 text-white transition-colors"
                  : "rounded-full px-2.5 py-1 text-ink-secondary transition-colors hover:text-ink"
              }
            >
              한국어
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ko" : "en")}
            className="inline-flex items-center gap-1.5 rounded-full border border-stone-border bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-subtle"
            aria-label={locale === "en" ? "Switch to Korean" : "영어로 전환"}
          >
            <Globe className="h-3.5 w-3.5 text-husky" aria-hidden="true" />
            {locale === "en" ? "한국어" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-border bg-surface text-ink transition-colors hover:bg-subtle"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-stone-border bg-surface px-4 pb-5 pt-3 shadow-lg md:hidden"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "block rounded-xl bg-husky/10 px-4 py-2.5 text-sm font-semibold text-husky"
                        : "block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-secondary hover:bg-subtle hover:text-ink"
                    }
                  >
                    {t(item.label)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

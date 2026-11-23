"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { OFFICIAL_SPONSOR } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

interface SponsorBannerProps {
  variant?: "featured" | "strip";
}

function ExtremeLogoBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "inline-flex items-center gap-2 rounded-lg bg-[#24135f] px-3 py-1.5 text-white shadow-xs"
          : "inline-flex items-center gap-2.5 rounded-xl bg-[#24135f] px-4 py-2.5 text-white shadow-sm ring-1 ring-white/15"
      }
    >
      {/* Stylized geometric E-network emblem */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={compact ? "h-4 w-4 shrink-0" : "h-6 w-6 shrink-0"}
        aria-hidden="true"
      >
        <rect x="2" y="2" width="24" height="24" rx="6" fill="#5D2EE8" />
        <path
          d="M8.5 9H19.5M8.5 14H17M8.5 19H19.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="19.5" cy="14" r="1.7" fill="#DFD0A8" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={
            compact
              ? "text-xs font-extrabold tracking-tight text-white"
              : "text-base font-extrabold tracking-tight text-white"
          }
        >
          Extreme
        </span>
        <span
          className={
            compact
              ? "font-mono text-[8px] uppercase tracking-[0.2em] text-white/75"
              : "mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-white/75"
          }
        >
          networks
        </span>
      </div>
    </div>
  );
}

export function SponsorBanner({ variant = "strip" }: SponsorBannerProps) {
  const { t } = useLanguage();

  if (variant === "featured") {
    return (
      <section
        aria-label={t(OFFICIAL_SPONSOR.headline)}
        className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8"
      >
        <a
          href={OFFICIAL_SPONSOR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-3xl border border-husky/25 bg-gradient-to-r from-[#1c103c] via-[#2b1763] to-[#140e21] p-6 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-stem-grid opacity-70" />
          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <ExtremeLogoBadge />
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-bright">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  <span>{t(OFFICIAL_SPONSOR.badge)}</span>
                </div>
                <h2 className="mt-2.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {t(OFFICIAL_SPONSOR.headline)}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                  {t(OFFICIAL_SPONSOR.description)}
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-gold px-5 py-3 text-xs font-bold text-husky-night shadow-xs transition-colors group-hover:bg-gold-bright lg:self-center sm:text-sm">
              <span>{t(OFFICIAL_SPONSOR.cta)}</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </a>
      </section>
    );
  }

  return (
    <aside
      aria-label={t(OFFICIAL_SPONSOR.headline)}
      className="border-b border-stone-border bg-gradient-to-r from-[#f4f1fb] via-surface to-[#faf6eb]"
    >
      <div className="mx-auto max-w-6xl px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href={OFFICIAL_SPONSOR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center justify-between gap-3 rounded-xl px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-husky/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-husky">
              {t(OFFICIAL_SPONSOR.badge)}
            </span>
            <ExtremeLogoBadge compact />
            <span className="hidden text-xs font-medium text-ink-secondary md:inline">
              {t(OFFICIAL_SPONSOR.headline)}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-bold text-husky transition-colors group-hover:text-husky-deep">
            <span>{t(OFFICIAL_SPONSOR.cta)}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </aside>
  );
}

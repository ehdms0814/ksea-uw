"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { OFFICIAL_SPONSOR } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

interface SponsorBannerProps {
  variant?: "featured" | "strip";
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
          className="group relative block overflow-hidden rounded-3xl border border-[#5d2ee8]/40 bg-gradient-to-r from-[#2c0d82] via-[#3f14a8] to-[#1d103c] p-6 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-stem-grid opacity-55" />
          <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xs">
                <img
                  src="/images/extreme-networks-white.png"
                  alt="Extreme Networks official logo"
                  width={732}
                  height={193}
                  className="h-9 w-auto object-contain sm:h-11"
                />
              </div>
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/45 bg-gold/15 px-3 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-bright">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  <span>{t(OFFICIAL_SPONSOR.badge)}</span>
                </div>
                <h2 className="mt-2.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {t(OFFICIAL_SPONSOR.headline)}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">
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
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <a
          href={OFFICIAL_SPONSOR.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center justify-between gap-3 rounded-xl px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky"
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <span className="rounded-full bg-husky/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-husky">
              {t(OFFICIAL_SPONSOR.badge)}
            </span>
            <img
              src="/images/extreme-networks-purple.png"
              alt="Extreme Networks official logo"
              width={732}
              height={193}
              className="h-6 w-auto object-contain sm:h-7"
            />
            <span className="hidden text-xs font-medium text-ink-secondary lg:inline">
              · {t(OFFICIAL_SPONSOR.headline)}
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

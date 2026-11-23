"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { OFFICIAL_SPONSORS } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

interface SponsorBannerProps {
  variant?: "featured" | "strip";
}

export function SponsorBanner({ variant = "strip" }: SponsorBannerProps) {
  const { locale, t } = useLanguage();

  if (variant === "featured") {
    return (
      <section
        aria-label={locale === "en" ? "Official 2026–2027 Sponsors" : "2026–2027 공식 후원사"}
        className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-husky/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-husky">
              <Sparkles className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
              <span>
                {locale === "en" ? "Official 2026–2027 Sponsors" : "2026–2027 공식 후원사"}
              </span>
            </span>
          </div>
          <p className="text-xs font-medium text-ink-muted">
            {locale === "en"
              ? "Proudly powering KSEA UW student programs"
              : "KSEA UW의 세미나와 학생 활동을 함께 후원합니다"}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {OFFICIAL_SPONSORS.map((sponsor) => {
            const isExtreme = sponsor.id === "extreme-networks";
            return (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isExtreme
                    ? "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#5d2ee8]/40 bg-gradient-to-br from-[#2c0d82] via-[#3f14a8] to-[#1d103c] p-6 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky sm:p-7"
                    : "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1b1b22] via-[#262530] to-[#140e21] p-6 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-husky sm:p-7"
                }
              >
                <div className="pointer-events-none absolute inset-0 bg-stem-grid opacity-45" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xs">
                      <img
                        src={sponsor.logoDark}
                        alt={`${sponsor.name} official logo`}
                        width={sponsor.logoWidth}
                        height={sponsor.logoHeight}
                        className={
                          sponsor.showWordmarkNextToLogo
                            ? "h-9 w-9 object-contain"
                            : "h-8 w-auto object-contain sm:h-9"
                        }
                      />
                      {sponsor.showWordmarkNextToLogo && (
                        <span className="pr-1 text-2xl font-extrabold tracking-tight text-white">
                          {sponsor.name}
                        </span>
                      )}
                    </div>

                    <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold-bright">
                      {t(sponsor.tagline)}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/85">
                    {t(sponsor.description)}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                  <span className="font-mono text-xs text-white/65">
                    {sponsor.domainLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-husky-night transition-colors group-hover:bg-gold-bright">
                    <span>{t(sponsor.cta)}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <aside
      aria-label={locale === "en" ? "Official Sponsors" : "공식 후원사"}
      className="border-b border-stone-border bg-gradient-to-r from-[#f4f1fb] via-surface to-[#faf6eb]"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-husky/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-husky">
          <Sparkles className="h-3 w-3 text-gold-deep" aria-hidden="true" />
          <span>{locale === "en" ? "Official Sponsors" : "공식 후원사"}</span>
        </span>

        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {OFFICIAL_SPONSORS.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-stone-border bg-surface px-3.5 py-1.5 shadow-2xs transition-all hover:border-husky/45 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
            >
              <img
                src={sponsor.logoLight}
                alt={`${sponsor.name} official logo`}
                width={sponsor.logoWidth}
                height={sponsor.logoHeight}
                className={
                  sponsor.showWordmarkNextToLogo
                    ? "h-5 w-5 object-contain"
                    : "h-4 w-auto object-contain sm:h-5"
                }
              />
              {sponsor.showWordmarkNextToLogo && (
                <span className="text-sm font-extrabold tracking-tight text-ink">
                  {sponsor.name}
                </span>
              )}
              <ArrowUpRight
                className="h-3.5 w-3.5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-husky"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

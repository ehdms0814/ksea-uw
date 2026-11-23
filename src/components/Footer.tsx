"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, SITE_INFO } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-white/10 bg-husky-night text-white bg-stem-grid">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div>
                <p className="text-lg font-bold tracking-tight text-white">
                  {SITE_INFO.shortName}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold-bright">
                  University of Washington YG Chapter
                </p>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              {t(SITE_INFO.fullName)}. {t(SITE_INFO.tagline)}
            </p>
            <div className="mt-5 space-y-2 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                <span>{t(SITE_INFO.location)}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-gold-bright"
                >
                  {SITE_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
              {locale === "en" ? "Explore" : "바로가기"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network & Socials */}
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
              {locale === "en" ? "KSEA Network & Channels" : "KSEA 네트워크 및 채널"}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href={SITE_INFO.socials.kseaNational}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <span>KSEA National Headquarters</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.socials.kseaSeattle}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <span>KSEA Seattle Chapter</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <span>Instagram (@ksea_uw)</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <span>LinkedIn Community</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Coordinates Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 KSEA University of Washington Chapter.{" "}
            {locale === "en"
              ? "Registered Student Organization at UW Seattle."
              : "워싱턴대학교 공식 등록 학생 단체 (RSO)."}
          </p>
          <p className="font-mono tracking-wider text-gold-bright/80">
            {SITE_INFO.coordinates}
          </p>
        </div>
      </div>
    </footer>
  );
}

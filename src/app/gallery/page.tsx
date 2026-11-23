"use client";

import { useEffect, useId, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Handshake,
  Mail,
  ZoomIn,
} from "lucide-react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  PARTNERS,
  type GalleryCategory,
} from "@/data/gallery";
import { SITE_INFO } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { ModalDialog } from "@/components/ModalDialog";
import { SponsorBanner } from "@/components/SponsorBanner";

export default function GalleryPage() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | GalleryCategory>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxTitleId = useId();

  const visibleItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedPhoto =
    selectedIndex !== null && visibleItems[selectedIndex]
      ? visibleItems[selectedIndex]
      : null;

  const goPrev = () => {
    if (selectedIndex === null || visibleItems.length === 0) return;
    setSelectedIndex((selectedIndex - 1 + visibleItems.length) % visibleItems.length);
  };

  const goNext = () => {
    if (selectedIndex === null || visibleItems.length === 0) return;
    setSelectedIndex((selectedIndex + 1) % visibleItems.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, visibleItems.length]);

  return (
    <div>
      {/* HEADER */}
      <section className="border-b border-stone-border bg-husky-night py-16 text-white bg-stem-grid sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            {locale === "en" ? "Gallery & Sponsors" : "갤러리 및 파트너"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {locale === "en"
              ? "Moments from Our Community & Supporting Partners"
              : "KSEA UW의 활동 기록과 함께하는 파트너"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {locale === "en"
              ? "Highlights from career symposiums, weekend buildathons, and campus study sessions—made possible by KSEA chapters and Seattle STEM partners."
              : "커리어 심포지엄, 해커톤, 학부 리서치 패널의 생생한 현장과 KSEA UW를 후원·협력하는 기관들을 소개합니다."}
          </p>
        </div>
      </section>

      {/* OFFICIAL SPONSOR STRIP */}
      <SponsorBanner variant="strip" />

      {/* PHOTO GALLERY */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Photo Archive" : "포토 아카이브"}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {locale === "en" ? "Chapter Highlights" : "활동 갤러리"}
            </h2>
          </div>

          {GALLERY_ITEMS.length > 0 && (
            <div
              role="group"
              aria-label={locale === "en" ? "Filter gallery photos" : "갤러리 카테고리 필터"}
              className="flex flex-wrap gap-2"
            >
              {GALLERY_CATEGORIES.map((category) => {
                const selected = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSelectedIndex(null);
                    }}
                    aria-pressed={selected}
                    className={
                      selected
                        ? "rounded-full bg-husky px-4 py-2 text-xs font-semibold text-white transition-colors"
                        : "rounded-full border border-stone-border bg-surface px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-husky/40 hover:text-ink"
                    }
                  >
                    {t(category.label)}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {visibleItems.length === 0 ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-stone-border bg-surface px-6 py-16 text-center shadow-xs">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-husky/10 text-husky">
              <Camera className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink">
              {locale === "en"
                ? "Photo Gallery Coming Soon"
                : "포토 갤러리가 아직 비어 있습니다"}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-secondary">
              {locale === "en"
                ? "No photos have been uploaded yet. Highlights from our 2026–2027 seminars, company tours, and community events will be shared here soon!"
                : "아직 업로드된 활동 사진이 없습니다. 2026–2027 세미나, 기업 투어, 네트워킹 행사 사진이 곧 이곳에 업데이트될 예정입니다."}
            </p>
            <a
              href={SITE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-husky px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-husky-deep"
            >
              <span>
                {locale === "en"
                  ? "Follow @ksea.uw on Instagram"
                  : "인스타그램 @ksea.uw 소식 보기"}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-border bg-surface text-left shadow-xs transition-all hover:-translate-y-0.5 hover:border-husky/35 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-husky-night">
                  <img
                    src={item.src}
                    alt={t(item.alt)}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-husky-night/70 text-white opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                    <ZoomIn className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-gold-deep">
                    {t(item.quarter)}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-ink">{t(item.title)}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink-secondary">
                    {t(item.caption)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* SPONSORS & PARTNERS */}
      <section id="sponsors" className="border-t border-stone-border bg-subtle/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Affiliations & Sponsors" : "협력 기관 및 후원 파트너"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {locale === "en" ? "Our Network & Partners" : "함께하는 기관 및 후원사"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {locale === "en"
                ? "KSEA UW thrives through collaboration with KSEA National, our local Seattle Chapter, UW campus partners, and Greater Seattle engineering leaders."
                : "KSEA 본부 및 시애틀 지부, UW 학생지원처, 그리고 시애틀 지역 한인 STEM 현직자 네트워크의 후원으로 모든 행사를 운영합니다."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PARTNERS.map((partner) => {
              const cardInner = (
                <>
                  <div
                    className={
                      partner.tier === "sponsor"
                        ? "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold bg-[#24135f] font-mono text-xs font-bold tracking-wider text-gold-bright"
                        : "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-husky-night font-mono text-xs font-bold tracking-wider text-gold-bright"
                    }
                    aria-hidden="true"
                  >
                    {partner.monogram}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-ink">{partner.name}</h3>
                      {partner.tier === "sponsor" && (
                        <span className="rounded-full bg-gold/25 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-husky-deep">
                          {locale === "en" ? "Official Sponsor" : "공식 후원사"}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                      {t(partner.description)}
                    </p>
                    {partner.url && (
                      <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-husky group-hover:underline">
                        <span>{locale === "en" ? "Visit website" : "웹사이트 방문"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </>
              );

              return partner.url ? (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-husky/30 bg-surface p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-husky hover:shadow-md"
                >
                  {cardInner}
                </a>
              ) : (
                <div
                  key={partner.id}
                  className="flex items-start gap-5 rounded-2xl border border-stone-border bg-surface p-6 shadow-xs"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>

          {/* Become a Sponsor Callout */}
          <div className="mt-12 rounded-3xl border border-husky/20 bg-husky-night p-8 text-white bg-stem-grid sm:p-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-bright">
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                  <span>
                    {locale === "en" ? "Corporate & Alumni Sponsorship" : "기업 후원 및 멘토 참여"}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold">
                  {locale === "en"
                    ? "Partner with UW's Korean-American STEM Talent"
                    : "UW 한인 STEM 인재들과 함께할 후원사·멘토를 찾습니다"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {locale === "en"
                    ? "Host a recruiting tech talk, sponsor our Winter Buildathon, or join our Seattle mentor roster. We'd love to share our 2026–2027 sponsorship prospectus."
                    : "채용 설명회, 기술 세미나, 겨울 빌더톤 후원 또는 현직자 멘토 참여를 원하신다면 KSEA UW 대외협력팀으로 편하게 연락해 주세요."}
                </p>
              </div>
              <a
                href={`mailto:${SITE_INFO.email}?subject=KSEA%20UW%20Sponsorship%20Inquiry`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-husky-night transition-colors hover:bg-gold-bright"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{locale === "en" ? "Request Prospectus" : "후원 · 협력 문의"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NATIVE <dialog> LIGHTBOX */}
      <ModalDialog
        open={Boolean(selectedPhoto)}
        onClose={() => setSelectedIndex(null)}
        titleId={lightboxTitleId}
        closeLabel={locale === "en" ? "Close photo lightbox" : "사진 크게 보기 닫기"}
        variant="lightbox"
      >
        {selectedPhoto && (
          <div className="flex flex-col">
            <div className="relative flex items-center justify-center bg-black/70">
              <img
                src={selectedPhoto.src}
                alt={t(selectedPhoto.alt)}
                fetchPriority="low"
                className="max-h-[68dvh] w-full object-contain"
              />
              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={locale === "en" ? "Previous photo" : "이전 사진"}
                    className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white transition-colors hover:bg-white/20"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={locale === "en" ? "Next photo" : "다음 사진"}
                    className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white transition-colors hover:bg-white/20"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-gold-bright">
                  {t(selectedPhoto.quarter)}
                </p>
                <h2 id={lightboxTitleId} className="mt-1 text-xl font-bold text-white">
                  {t(selectedPhoto.title)}
                </h2>
                <p className="mt-1.5 max-w-2xl text-sm text-white/75">
                  {t(selectedPhoto.caption)}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs text-white/60">
                {(selectedIndex ?? 0) + 1} / {visibleItems.length}
              </p>
            </div>
          </div>
        )}
      </ModalDialog>
    </div>
  );
}

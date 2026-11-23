"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Compass,
  FlaskConical,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { CORE_PILLARS, IMPACT_STATS, SITE_INFO } from "@/data/site";
import { EVENTS, QUARTERS, type ClubEvent } from "@/data/events";
import { GALLERY_ITEMS } from "@/data/gallery";
import { useLanguage } from "@/context/LanguageContext";
import { EventDetailModal } from "@/components/EventDetailModal";

const PILLAR_ICONS = {
  career: Compass,
  academic: FlaskConical,
  community: Users,
};

export default function HomePage() {
  const { locale, t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  const featuredEvents = EVENTS.filter((ev) => ev.featured).slice(0, 4);
  const featuredPhotos = GALLERY_ITEMS.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-husky-night text-white">
        {/* Full-bleed UW Rainier Vista backdrop — LCP candidate image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-uw-campus.jpg"
            alt={
              locale === "en"
                ? "University of Washington Seattle Rainier Vista and Drumheller Fountain facing Mount Rainier at dusk"
                : "워싱턴대학교 시애틀 캠퍼스 Rainier Vista와 드럼헬러 분수, 레이니어 산의 노을 전경"
            }
            fetchPriority="high"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140e21]/95 via-[#140e21]/80 to-[#321b5c]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140e21] via-transparent to-[#140e21]/30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-husky-night/70 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold-bright" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-gold-bright">
                {t(SITE_INFO.chapterBadge)}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              {locale === "en" ? (
                <>
                  Where Husky{" "}
                  <span className="text-gold-bright">Korean-American</span> STEM
                  Leaders Connect &amp; Build.
                </>
              ) : (
                <>
                  워싱턴대학교 한인{" "}
                  <span className="text-gold-bright">STEM 인재</span>들이
                  만나고 성장하는 공간.
                </>
              )}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {locale === "en"
                ? "The official University of Washington student chapter of the Korean-American Scientists and Engineers Association (KSEA). We unite undergrads, graduate researchers, and Seattle industry mentors across science, technology, and engineering."
                : "재미한인과학기술자협회(KSEA) 워싱턴대학교 공식 학생 지부입니다. 학부생, 대학원 연구자, 그리고 시애틀 테크·바이오·공학 분야 현직자 멘토를 연결해 커리어와 학술, 커뮤니티의 성장을 함께 만들어갑니다."}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-husky-night shadow-lg transition-all hover:bg-gold-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-bright"
              >
                <span>{locale === "en" ? "Join KSEA UW" : "KSEA UW 가입하기"}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Calendar className="h-4 w-4 text-gold-bright" aria-hidden="true" />
                <span>{locale === "en" ? "26–27 Event Roadmap" : "26–27 행사 로드맵 보기"}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Campus Coordinates & Quick Metadata */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-xs text-white/65">
            <span>{SITE_INFO.coordinates}</span>
            <span>
              {locale === "en"
                ? "CS · Engineering · Data Science · Bioengineering · Natural Sciences"
                : "컴퓨터공학 · 공과대학 · 데이터사이언스 · 바이오 · 자연과학"}
            </span>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS BAND */}
      <section aria-label={locale === "en" ? "Chapter impact metrics" : "동아리 주요 지표"} className="border-b border-stone-border bg-surface">
        <div className="mx-auto grid max-w-6xl divide-y divide-stone-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {IMPACT_STATS.map((stat) => (
            <div key={stat.value} className="px-6 py-8 lg:px-8">
              <p className="font-mono text-3xl font-bold tracking-tight text-husky sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-bold text-ink">{t(stat.label)}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                {t(stat.detail)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE CORE PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "What We Do" : "핵심 활동 영역"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {locale === "en"
                ? "Three pillars empowering UW STEM students."
                : "UW 한인 이공계 학생들의 성장을 돕는 세 가지 축."}
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-husky transition-colors hover:text-husky-deep"
          >
            <span>{locale === "en" ? "Meet our officers & mission" : "미션 및 임원진 보기"}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CORE_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id];
            return (
              <article
                key={pillar.id}
                className="scroll-reveal group flex flex-col rounded-2xl border border-stone-border bg-surface p-7 shadow-xs transition-all hover:-translate-y-0.5 hover:border-husky/35 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-husky/10 text-husky">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-gold-deep">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                  {t(pillar.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {t(pillar.description)}
                </p>

                <ul className="mt-6 space-y-2 border-t border-stone-border pt-5 text-xs font-medium text-ink-secondary">
                  {pillar.highlights[locale].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* 2026–2027 UPCOMING ROADMAP HIGHLIGHTS (Photo-free for effortless updates) */}
      <section className="border-y border-stone-border bg-subtle/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                {locale === "en" ? "2026–2027 Annual Roadmap" : "2026–2027 연간 행사 로드맵"}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {locale === "en" ? "Featured Upcoming Events" : "주요 예정 행사"}
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-husky transition-colors hover:text-husky-deep"
            >
              <span>
                {locale === "en"
                  ? `View all ${EVENTS.length} roadmap events`
                  : `26–27 전체 일정 (${EVENTS.length}개) 보기`}
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Photo-free typographic highlight cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredEvents.map((event) => {
              const quarterMeta = QUARTERS.find((q) => q.id === event.quarter);
              return (
                <article
                  key={event.id}
                  className="scroll-reveal group flex flex-col justify-between rounded-2xl border border-stone-border bg-surface p-6 shadow-xs transition-all hover:-translate-y-0.5 hover:border-husky/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-husky px-3.5 py-1 font-mono text-xs font-bold text-white">
                        <Calendar className="h-3.5 w-3.5 text-gold-bright" aria-hidden="true" />
                        {t(event.shortDate)}
                      </span>
                      {quarterMeta && (
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                          {t(quarterMeta.label)}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-ink">
                      {t(event.title)}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {t(event.summary)}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-border pt-4">
                    <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-ink-muted">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-husky" aria-hidden="true" />
                      <span className="truncate">{t(event.location)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-husky/10 px-4 py-1.5 text-xs font-semibold text-husky transition-colors hover:bg-husky hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
                    >
                      <span>{locale === "en" ? "Details & RSVP" : "상세 · 알림 신청"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Compact Quarter-by-Quarter Summary Strip */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {QUARTERS.map((quarter) => {
              const quarterEvents = EVENTS.filter((e) => e.quarter === quarter.id);
              return (
                <Link
                  key={quarter.id}
                  href={`/events#${quarter.id}`}
                  className="group rounded-2xl border border-stone-border bg-canvas/90 p-5 transition-colors hover:border-husky/40 hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-ink">{t(quarter.label)}</h3>
                    <span className="font-mono text-[11px] font-semibold text-husky">
                      {quarterEvents.length} {locale === "en" ? "events" : "건"}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-ink-muted">
                    {t(quarter.dateRange)}
                  </p>
                  <ul className="mt-3 space-y-1.5 border-t border-stone-border/80 pt-3 text-xs text-ink-secondary">
                    {quarterEvents.slice(0, 3).map((ev) => (
                      <li key={ev.id} className="flex items-baseline gap-2">
                        <span className="shrink-0 font-mono text-[11px] font-semibold text-gold-deep">
                          {t(ev.shortDate)}
                        </span>
                        <span className="truncate">{t(ev.title)}</span>
                      </li>
                    ))}
                    {quarterEvents.length > 3 && (
                      <li className="font-semibold text-husky">
                        +{quarterEvents.length - 3}{" "}
                        {locale === "en" ? "more in roadmap →" : "개 일정 더 보기 →"}
                      </li>
                    )}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY SNAPSHOT */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Life at KSEA UW" : "활동 스냅샷"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {locale === "en"
                ? "Inside our Seattle STEM community."
                : "함께 배우고 도전하는 순간들."}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-husky transition-colors hover:text-husky-deep"
          >
            <span>{locale === "en" ? "Open photo gallery & partners" : "전체 갤러리 및 파트너 보기"}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPhotos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="scroll-reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-border bg-husky-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
            >
              <img
                src={photo.src}
                alt={t(photo.alt)}
                loading="lazy"
                width={520}
                height={390}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-husky-night/85 via-husky-night/15 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gold-bright">
                  {t(photo.quarter)}
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">{t(photo.title)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BOTTOM JOIN CTA BANNER */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-husky-night px-6 py-14 text-white shadow-xl bg-stem-grid sm:px-12 sm:py-16">
          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3.5 py-1 text-xs font-semibold text-gold-bright">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Open to All UW Majors · Free Chapter Membership"
                    : "UW 모든 전공 환영 · 교내 지부 가입 무료"}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {locale === "en"
                  ? "Ready to grow your STEM journey at UW?"
                  : "UW에서의 STEM 여정, KSEA UW와 함께 시작해 보세요."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {locale === "en"
                  ? "Join our mailing list and Discord to receive early access to Seattle tech coffee chats, undergraduate research workshops, and KSEA scholarship opportunities."
                  : "멤버로 가입하시면 시애틀 현직자 커피챗, 학부 연구실(URP) 세미나, 해커톤, 그리고 KSEA 장학금 공지를 가장 먼저 받아보실 수 있습니다."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-husky-night transition-colors hover:bg-gold-bright"
              >
                <span>{locale === "en" ? "Become a Member" : "멤버 가입 신청"}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

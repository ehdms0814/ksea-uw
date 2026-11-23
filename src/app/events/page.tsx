"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Mic2, Search } from "lucide-react";
import {
  EVENT_CATEGORIES,
  EVENTS,
  QUARTERS,
  type ClubEvent,
  type EventCategory,
  type QuarterId,
} from "@/data/events";
import { useLanguage } from "@/context/LanguageContext";
import { EventDetailModal } from "@/components/EventDetailModal";
import { SponsorBanner } from "@/components/SponsorBanner";

const CATEGORY_BADGE_STYLES: Record<EventCategory, string> = {
  seminar: "bg-husky/10 text-husky",
  career: "bg-gold/25 text-husky-deep",
  networking: "bg-[#2c5e50]/10 text-[#2c5e50]",
  community: "bg-subtle text-ink-secondary",
};

export default function EventsPage() {
  const { locale, t } = useLanguage();
  const [quarterFilter, setQuarterFilter] = useState<"all" | QuarterId>("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | EventCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return EVENTS.filter((ev) => {
      if (quarterFilter !== "all" && ev.quarter !== quarterFilter) return false;
      if (categoryFilter !== "all" && ev.category !== categoryFilter) return false;
      if (!q) return true;
      const haystack = [
        ev.title.en,
        ev.title.ko,
        ev.summary.en,
        ev.summary.ko,
        ev.location.en,
        ev.location.ko,
        ev.shortDate.en,
        ev.shortDate.ko,
        ...(ev.speakers?.map((s) => `${s.name} ${s.affiliation.en} ${s.affiliation.ko}`) || []),
        ...ev.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [quarterFilter, categoryFilter, searchQuery]);

  const groupedByQuarter = useMemo(() => {
    return QUARTERS.map((quarter) => ({
      quarter,
      events: filteredEvents.filter((ev) => ev.quarter === quarter.id),
    })).filter((group) => group.events.length > 0);
  }, [filteredEvents]);

  return (
    <div>
      {/* HEADER */}
      <section className="border-b border-stone-border bg-husky-night py-16 text-white bg-stem-grid sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            {locale === "en" ? "2026–2027 Academic Year Roadmap" : "2026–2027 연간 행사 로드맵"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {locale === "en"
              ? "Planned Events Across Autumn, Winter & Spring Quarters"
              : "26–27학년도 KSEA UW 분기별 예정 행사 로드맵"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {locale === "en"
              ? "From guest seminars with Dr. Soyeon Yi and OpenAI's Michael Cho to Seattle Big Tech office tours and quarterly coffee chats—explore our full 2026–2027 calendar."
              : "이소연 박사님·OpenAI Michael Cho님 초청 세미나부터 시애틀 대기업 투어, 교수님·대학원생·현직자 커피챗까지 2026–2027 전체 일정을 확인해 보세요."}
          </p>
        </div>
      </section>

      {/* OFFICIAL SPONSOR STRIP */}
      <SponsorBanner variant="strip" />

      {/* FILTER BAR */}
      <section className="border-b border-stone-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          {/* Quarter Tabs */}
          <div
            role="group"
            aria-label={locale === "en" ? "Filter by academic quarter" : "학기별 필터"}
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              onClick={() => setQuarterFilter("all")}
              aria-pressed={quarterFilter === "all"}
              className={
                quarterFilter === "all"
                  ? "rounded-full bg-husky px-4 py-2 text-xs font-semibold text-white transition-colors"
                  : "rounded-full border border-stone-border bg-canvas px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-husky/40 hover:text-ink"
              }
            >
              {locale === "en"
                ? `All Quarters (${EVENTS.length})`
                : `전체 학기 (${EVENTS.length})`}
            </button>
            {QUARTERS.map((quarter) => {
              const active = quarterFilter === quarter.id;
              const count = EVENTS.filter((ev) => ev.quarter === quarter.id).length;
              return (
                <button
                  key={quarter.id}
                  type="button"
                  onClick={() => setQuarterFilter(quarter.id)}
                  aria-pressed={active}
                  className={
                    active
                      ? "rounded-full bg-husky px-4 py-2 text-xs font-semibold text-white transition-colors"
                      : "rounded-full border border-stone-border bg-canvas px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-husky/40 hover:text-ink"
                  }
                >
                  {t(quarter.label)} ({count})
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={locale === "en" ? "Search events" : "행사 검색"}
              placeholder={
                locale === "en"
                  ? "Search speakers, seminars, tours..."
                  : "연사, 세미나, 기업 투어 검색..."
              }
              className="w-full rounded-full border border-stone-border bg-canvas py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-husky focus:outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-5 sm:px-6 lg:px-8">
          {EVENT_CATEGORIES.map((category) => {
            const active = categoryFilter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setCategoryFilter(category.id)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-lg bg-gold/25 px-3 py-1.5 text-xs font-bold text-husky-deep"
                    : "rounded-lg bg-subtle/70 px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:bg-subtle hover:text-ink"
                }
              >
                {t(category.label)}
              </button>
            );
          })}
        </div>
      </section>

      {/* QUARTERLY ROADMAP LIST (Photo-free editorial timeline) */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {groupedByQuarter.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-border bg-surface p-12 text-center">
            <p className="text-base font-semibold text-ink">
              {locale === "en"
                ? "No events match your current filters."
                : "선택한 조건에 맞는 행사가 없습니다."}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuarterFilter("all");
                setCategoryFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 rounded-full bg-husky px-4 py-2 text-xs font-semibold text-white hover:bg-husky-deep"
            >
              {locale === "en" ? "Reset Filters" : "필터 초기화"}
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {groupedByQuarter.map(({ quarter, events }) => (
              <div key={quarter.id} id={quarter.id} className="scroll-mt-24">
                {/* Quarter Section Header */}
                <div className="flex flex-col justify-between gap-2 border-b-2 border-husky/20 pb-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      {quarter.academicYear}
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                      {t(quarter.label)}
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-stone-border bg-surface px-4 py-1.5 font-mono text-xs font-semibold text-ink-secondary">
                    <Calendar className="h-3.5 w-3.5 text-husky" aria-hidden="true" />
                    {t(quarter.dateRange)}
                  </span>
                </div>

                {/* Quarter Events List */}
                <div className="mt-6 space-y-4">
                  {events.map((event) => {
                    const categoryLabel =
                      EVENT_CATEGORIES.find((c) => c.id === event.category)?.label ?? {
                        en: event.category,
                        ko: event.category,
                      };
                    return (
                      <article
                        key={event.id}
                        className="group flex flex-col gap-5 rounded-2xl border border-stone-border bg-surface p-5 shadow-xs transition-all hover:border-husky/40 hover:shadow-md sm:flex-row sm:items-center sm:p-6"
                      >
                        {/* Left Date Badge Block */}
                        <div className="flex shrink-0 items-center justify-between rounded-xl border border-husky/15 bg-husky/[0.04] px-4 py-3 sm:w-40 sm:flex-col sm:items-start sm:justify-center sm:py-4">
                          <span className="font-mono text-base font-bold tracking-tight text-husky sm:text-lg">
                            {t(event.shortDate)}
                          </span>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold sm:mt-2 ${CATEGORY_BADGE_STYLES[event.category]}`}
                          >
                            {t(categoryLabel)}
                          </span>
                        </div>

                        {/* Middle Content */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                              {t(event.title)}
                            </h3>
                            {event.featured && (
                              <span className="rounded-full bg-gold/25 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-husky-deep">
                                {locale === "en" ? "Featured" : "주요 행사"}
                              </span>
                            )}
                          </div>

                          <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                            {t(event.summary)}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-muted">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                              {t(event.location)}
                            </span>
                            {event.speakers && event.speakers.length > 0 && (
                              <span className="inline-flex items-center gap-1.5 font-semibold text-husky">
                                <Mic2 className="h-3.5 w-3.5" aria-hidden="true" />
                                {event.speakers.map((s) => s.name).join(", ")}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right Action Button */}
                        <div className="flex shrink-0 items-center sm:justify-end">
                          <button
                            type="button"
                            onClick={() => setSelectedEvent(event)}
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-husky px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-husky-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky sm:w-auto"
                          >
                            <span>{locale === "en" ? "Details & RSVP" : "상세 · 알림"}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Note */}
        <p className="mt-12 rounded-2xl border border-stone-border bg-subtle/70 px-5 py-4 text-xs leading-relaxed text-ink-secondary">
          {locale === "en"
            ? "Note: Dates marked TBA and campus room assignments are subject to change based on UW room booking and speaker availability. Join KSEA UW or RSVP to any event to receive confirmed updates."
            : "※ '일정 미정' 또는 강의실 미정 항목은 UW 교내 대관 및 연사 일정에 따라 확정·업데이트됩니다. 동아리 가입 또는 개별 행사 알림을 신청하시면 확정 일정을 가장 먼저 안내해 드립니다."}
        </p>
      </section>

      <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}

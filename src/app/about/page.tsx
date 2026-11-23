"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { TIMELINE_MILESTONES, SITE_INFO } from "@/data/site";
import {
  COMMITTEE_GROUPS,
  COMMITTEES,
  OFFICERS,
  type CommitteeId,
  type Officer,
} from "@/data/officers";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const [activeCommittee, setActiveCommittee] = useState<"all" | CommitteeId>("all");

  const visibleGroups =
    activeCommittee === "all"
      ? COMMITTEE_GROUPS.map((group) => ({
          ...group,
          officers: OFFICERS.filter((officer) => officer.committee === group.id),
        }))
      : COMMITTEE_GROUPS.filter((group) => group.id === activeCommittee).map((group) => ({
          ...group,
          officers: OFFICERS.filter((officer) => officer.committee === group.id),
        }));

  const renderOfficerCard = (officer: Officer) => (
    <article
      key={officer.id}
      className="flex flex-col rounded-2xl border border-stone-border bg-surface p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-husky/35 hover:shadow-md"
    >
      <div className="flex items-center gap-3.5">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-xs"
          style={{ backgroundColor: officer.accentColor }}
          aria-hidden="true"
        >
          {officer.initials}
        </div>
        <div className="min-w-0">
          <h4 className="truncate text-base font-bold text-ink">{officer.name}</h4>
          <p className="font-mono text-xs text-ink-muted">
            {officer.koreanName
              ? `${officer.koreanName} · ${officer.classYear}`
              : officer.classYear}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={
            officer.isLead
              ? "inline-block rounded-full bg-husky px-3 py-1 text-xs font-semibold text-white"
              : "inline-block rounded-full bg-husky/10 px-3 py-1 text-xs font-semibold text-husky"
          }
        >
          {t(officer.role)}
        </span>
      </div>

      <p className="mt-3 text-xs font-medium leading-relaxed text-ink-secondary">
        {t(officer.major)}
      </p>

      {officer.bio && (
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-secondary">
          {t(officer.bio)}
        </p>
      )}

      {(officer.linkedin || officer.email) && (
        <div className="mt-4 flex items-center gap-3 border-t border-stone-border pt-3.5 text-xs font-semibold">
          {officer.linkedin && (
            <a
              href={officer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-secondary transition-colors hover:text-husky"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
          {officer.linkedin && officer.email && (
            <span className="text-stone-border" aria-hidden="true">
              |
            </span>
          )}
          {officer.email && (
            <a
              href={`mailto:${officer.email}`}
              className="inline-flex items-center gap-1 text-ink-secondary transition-colors hover:text-husky"
            >
              <Mail className="h-3 w-3" aria-hidden="true" />
              <span>{locale === "en" ? "Email" : "이메일"}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="border-b border-stone-border bg-husky-night py-16 text-white bg-stem-grid sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            {locale === "en" ? "About KSEA UW" : "KSEA UW 소개"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {locale === "en"
              ? "Advancing Korean-American excellence in science, technology, and engineering."
              : "워싱턴대학교 한인 과학·기술·공학 인재들의 연대와 성장을 이끕니다."}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {locale === "en"
              ? "As the official University of Washington Young Generation (YG) chapter of KSEA, we connect Husky students across every STEM discipline with Seattle's global innovation ecosystem."
              : "KSEA(재미한인과학기술자협회) 워싱턴대학교 공식 YG(Young Generation) 학생 지부로서, 교내 모든 STEM 전공 학생들과 시애틀의 글로벌 테크·연구 생태계를 잇는 다리 역할을 합니다."}
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Our Mission" : "우리의 미션"}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {locale === "en"
                ? "Bridging campus curiosity with real-world impact."
                : "캠퍼스의 배움을 현장의 임팩트로 연결합니다."}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-2xl border border-stone-border bg-surface p-6 shadow-xs">
              <h3 className="text-base font-bold text-husky">
                {locale === "en" ? "1. Mentorship Without Barriers" : "1. 장벽 없는 선후배·현직자 멘토링"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                {locale === "en"
                  ? "Whether you are a freshman exploring majors or a PhD candidate preparing for industry research, we create welcoming spaces to ask honest questions and learn directly from Seattle professionals."
                  : "전공을 탐색 중인 신입생부터 취업을 앞둔 석·박사 과정생까지, 시애틀 지역 한인 현직자와 선배들에게 편하게 질문하고 실질적인 조언을 얻을 수 있는 열린 장을 만듭니다."}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-border bg-surface p-6 shadow-xs">
              <h3 className="text-base font-bold text-husky">
                {locale === "en" ? "2. Cross-Disciplinary Collaboration" : "2. 전공을 넘어선 융합 협업"}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                {locale === "en"
                  ? "Modern breakthroughs happen at the intersection of fields. We bring CS, Engineering, Bio, Math, and Design students together through hackathons, research showcases, and KSEA national conferences."
                  : "오늘날의 혁신은 전공의 경계에서 탄생합니다. 컴퓨터공학, 공대, 바이오, 수학, 디자인 학생들이 해커톤과 리서치 쇼케이스, 전국 학술대회(UKC/NWRC)를 통해 함께 협업합니다."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE TIMELINE */}
      <section className="border-y border-stone-border bg-subtle/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Heritage & Milestones" : "연혁 및 발자취"}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {locale === "en"
                ? "Rooted in 50+ years of KSEA tradition."
                : "50년 이상의 KSEA 전통 위에 세워진 UW 챕터."}
            </h2>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE_MILESTONES.map((milestone) => (
              <li
                key={milestone.year}
                className="scroll-reveal relative rounded-2xl border border-stone-border bg-surface p-6 shadow-xs"
              >
                <span className="inline-block rounded-full bg-husky/10 px-3 py-1 font-mono text-xs font-bold text-husky">
                  {milestone.year}
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {t(milestone.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {t(milestone.description)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OFFICERS DIRECTORY */}
      <section id="officers" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "2026–2027 Leadership" : "2026–2027 임원진"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {locale === "en" ? "Executive Board & Officers" : "KSEA UW 운영진 소개"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-secondary">
              {locale === "en"
                ? "Meet the student leaders organizing career panels, technical workshops, and community mixers across UW Seattle."
                : "시애틀 캠퍼스 전역의 커리어 패널, 기술 워크숍, 네트워킹 행사를 이끌어가는 학생 임원진을 소개합니다."}
            </p>
          </div>

          {/* Committee Filter */}
          <div
            role="group"
            aria-label={locale === "en" ? "Filter officers by committee" : "위원회별 임원진 필터"}
            className="flex flex-wrap gap-2"
          >
            {COMMITTEES.map((committee) => {
              const selected = activeCommittee === committee.id;
              const count =
                committee.id === "all"
                  ? OFFICERS.length
                  : OFFICERS.filter((o) => o.committee === committee.id).length;
              return (
                <button
                  key={committee.id}
                  type="button"
                  onClick={() => setActiveCommittee(committee.id)}
                  aria-pressed={selected}
                  className={
                    selected
                      ? "rounded-full bg-husky px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors"
                      : "rounded-full border border-stone-border bg-surface px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:border-husky/40 hover:text-ink"
                  }
                >
                  {t(committee.label)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {visibleGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-baseline justify-between border-b border-stone-border pb-3">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {t(group.label)}
                </h3>
                <span className="font-mono text-xs font-semibold text-gold-deep">
                  {group.officers.length}{" "}
                  {locale === "en" ? "members" : "명"}
                </span>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.officers.map(renderOfficerCard)}
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment Callout */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-stone-border bg-subtle p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-ink">
              {locale === "en"
                ? "Interested in joining the officer board?"
                : "KSEA UW 임원진·위원회 활동에 관심이 있으신가요?"}
            </h3>
            <p className="mt-1 text-sm text-ink-secondary">
              {locale === "en"
                ? `We welcome committee interns every Autumn and Spring quarter. Reach out via ${SITE_INFO.email} or check the officer track on our join form.`
                : `매년 가을·봄 학기 운영 위원회 인턴을 모집합니다. ${SITE_INFO.email}로 문의하시거나 가입 신청서에서 임원진 트랙을 선택해 주세요.`}
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-husky px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-husky-deep"
          >
            <span>{locale === "en" ? "Apply / Connect" : "지원 및 가입 안내"}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

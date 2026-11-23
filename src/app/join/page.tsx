"use client";

import { ArrowUpRight, Award, CheckCircle2, ChevronDown, Mail, Users } from "lucide-react";
import { FAQS, SITE_INFO } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { SponsorBanner } from "@/components/SponsorBanner";

export default function JoinPage() {
  const { locale, t } = useLanguage();

  return (
    <div>
      {/* HEADER */}
      <section className="border-b border-stone-border bg-husky-night py-16 text-white bg-stem-grid sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            {locale === "en" ? "Membership" : "멤버십 가입 안내"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {locale === "en"
              ? "Become a KSEA UW Member"
              : "KSEA UW의 새로운 멤버가 되어주세요"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {locale === "en"
              ? "Free to join for all University of Washington undergraduate and graduate students. Complete our official Google Form to join the community and receive event invites."
              : "워싱턴대학교 학부생·대학원생이라면 누구나 무료로 가입할 수 있습니다. 공식 Google Form을 통해 간편하게 멤버십에 가입하고 행사 소식을 받아보세요."}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={SITE_INFO.membershipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-husky-night shadow-lg transition-colors hover:bg-gold-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-bright"
            >
              <span>
                {locale === "en" ? "Open Membership Form" : "멤버십 가입 폼 바로가기"}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <span>Instagram (@ksea.uw)</span>
              <ArrowUpRight className="h-4 w-4 text-gold-bright" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIAL SPONSOR STRIP */}
      <SponsorBanner variant="strip" />

      {/* MEMBERSHIP TRACKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-stone-border bg-surface p-7 shadow-xs">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-husky/10 text-husky">
              <Users className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-ink">
                {locale === "en" ? "UW Chapter Member" : "UW 교내 챕터 멤버"}
              </h2>
              <span className="rounded-full bg-[#18794e]/10 px-3 py-1 font-mono text-xs font-bold text-[#18794e]">
                {locale === "en" ? "FREE" : "무료"}
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
              {locale === "en"
                ? "Sign up via our official Google Form to join KSEA UW and get invited to all campus seminars, company tours, and networking events."
                : "공식 Google Form을 통해 KSEA UW 멤버로 등록하시면 교내 세미나, 대기업 투어, 커피챗 등 모든 행사 안내를 받아보실 수 있습니다."}
            </p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm text-ink-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Priority RSVP for Seminars, Company Tours & Coffee Chats"
                    : "초청 세미나, 대기업 투어 및 커피챗 우선 안내"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Access to UW Korean STEM community & social mixers"
                    : "UW 한인 STEM 커뮤니티 및 분기별 소셜 행사 참여"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Connection with KSEA Seattle Chapter mentors & alumni"
                    : "KSEA 시애틀 지부 현직자 멘토 및 동문 네트워크 교류"}
                </span>
              </li>
            </ul>
            <a
              href={SITE_INFO.membershipFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-husky px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-husky-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
            >
              <span>
                {locale === "en" ? "Become a Member (Google Form)" : "멤버 가입하기 (Google Form)"}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col rounded-2xl border border-gold/50 bg-husky-night p-7 text-white shadow-sm bg-stem-grid">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-gold-bright">
              <Award className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-white">
                {locale === "en" ? "KSEA National YG Member" : "KSEA 본부 YG 정회원"}
              </h2>
              <span className="rounded-full bg-gold/25 px-3 py-1 font-mono text-xs font-bold text-gold-bright">
                {locale === "en" ? "NATIONAL PERKS" : "본부 혜택"}
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-white/75">
              {locale === "en"
                ? "Register officially with KSEA Headquarters (select Seattle Chapter / UW YG) to unlock national scholarships and conference travel grants."
                : "KSEA 미국 본부에 공식 등록(Seattle Chapter / UW YG 선택)하시면 전국 장학금과 학술대회 참가비 지원을 신청하실 수 있습니다."}
            </p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Eligible for KSEA Annual Undergraduate & Graduate Scholarships"
                    : "KSEA 연례 학부·대학원 장학금 지원 자격"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-bright" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Discounted UKC & NWRC conference registration + travel awards"
                    : "UKC 및 NWRC 학술대회 등록 할인 및 여비 지원"}
                </span>
              </li>
            </ul>
            <a
              href={SITE_INFO.socials.kseaNational}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-husky-night transition-colors hover:bg-gold-bright"
            >
              <span>
                {locale === "en" ? "Register at KSEA.org" : "KSEA 본부 공식 등록하기"}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Direct Contact Note */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-stone-border bg-subtle/70 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-ink">
              {locale === "en" ? "Questions about membership?" : "가입에 대해 궁금한 점이 있으신가요?"}
            </p>
            <p className="mt-1 text-xs text-ink-secondary">
              {locale === "en"
                ? `Reach out anytime via email (${SITE_INFO.email}) or DM us on Instagram (@ksea.uw).`
                : `언제든 이메일(${SITE_INFO.email}) 또는 인스타그램(@ksea.uw) DM으로 편하게 문의해 주세요.`}
            </p>
          </div>
          <a
            href={`mailto:${SITE_INFO.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-border bg-surface px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-husky/40 hover:text-husky"
          >
            <Mail className="h-3.5 w-3.5 text-husky" aria-hidden="true" />
            <span>{SITE_INFO.email}</span>
          </a>
        </div>
      </section>

      {/* FAQ SECTION (Native <details>/<summary>) */}
      <section className="border-t border-stone-border bg-subtle/60 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {locale === "en" ? "Frequently Asked Questions" : "자주 묻는 질문"}
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question.en}
                className="group rounded-2xl border border-stone-border bg-surface px-6 py-4 shadow-xs open:border-husky/35"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-ink">
                  <span>{t(faq.question)}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-husky transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 border-t border-stone-border pt-3 text-sm leading-relaxed text-ink-secondary">
                  {t(faq.answer)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

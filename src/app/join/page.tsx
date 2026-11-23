"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Award, CheckCircle2, ChevronDown, Users } from "lucide-react";
import { FAQS, SITE_INFO } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { useAccessibleFormValidation } from "@/hooks/useAccessibleFormValidation";

interface ApplicationSummary {
  fullName: string;
  email: string;
  major: string;
  standing: string;
  interests: string[];
  officerInterest: boolean;
}

const INTEREST_OPTIONS = [
  { id: "career", en: "Career & Industry Mentorship", ko: "커리어 · 현직자 멘토링" },
  { id: "research", en: "Undergraduate Research & Grad School", ko: "학부 연구(URP) · 대학원 진학" },
  { id: "hackathon", en: "Hackathons & Study Pods", ko: "해커톤 · 스터디 그룹" },
  { id: "social", en: "Social Mixers & Networking", ko: "소셜 믹서 · 네트워킹" },
] as const;

export default function JoinPage() {
  const { locale, t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  useAccessibleFormValidation(formRef);

  const [selectedInterests, setSelectedInterests] = useState<string[]>(["career"]);
  const [officerInterest, setOfficerInterest] = useState(false);
  const [submitted, setSubmitted] = useState<ApplicationSummary | null>(null);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    setSubmitted({
      fullName: String(data.get("fullName") || ""),
      email: String(data.get("email") || ""),
      major: String(data.get("major") || ""),
      standing: String(data.get("standing") || ""),
      interests: selectedInterests,
      officerInterest,
    });
  };

  return (
    <div>
      {/* HEADER */}
      <section className="border-b border-stone-border bg-husky-night py-16 text-white bg-stem-grid sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            {locale === "en" ? "Membership & Applications" : "가입 안내 및 신청"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {locale === "en"
              ? "Join KSEA UW — Open to Every Husky in STEM"
              : "KSEA UW의 새로운 멤버가 되어주세요"}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {locale === "en"
              ? "Free to join for all University of Washington undergraduate and graduate students. Connect with mentors, research opportunities, and friends who share your drive."
              : "워싱턴대학교 학부생·대학원생이라면 누구나 무료로 가입할 수 있습니다. 멘토링, 리서치 정보, 해커톤, 그리고 든든한 선후배 네트워크를 만나보세요."}
          </p>
        </div>
      </section>

      {/* MEMBERSHIP TRACKS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-stone-border bg-surface p-7 shadow-xs">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-husky/10 text-husky">
              <Users className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-ink">
                {locale === "en" ? "UW Chapter Member" : "UW 교내 챕터 일반 멤버"}
              </h2>
              <span className="rounded-full bg-[#18794e]/10 px-3 py-1 font-mono text-xs font-bold text-[#18794e]">
                {locale === "en" ? "FREE" : "무료"}
              </span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
              {locale === "en"
                ? "Sign up below to join our mailing list, Discord server, and campus events throughout the academic year."
                : "아래 신청서를 작성하시면 매 학기 행사 우선 초대, 디스코드 커뮤니티, 스터디 그룹 및 커피챗 공지를 받으실 수 있습니다."}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Priority RSVP for Career Symposium & Coffee Chats"
                    : "커리어 심포지엄 및 현직자 커피챗 우선 신청"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Access to UW study pods, resume book & Discord"
                    : "전공별 스터디 그룹, 이력서 북 및 디스코드 초대"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>
                  {locale === "en"
                    ? "Eligible to apply for Officer & Committee roles"
                    : "임원진 및 운영 위원회(Committee) 지원 자격"}
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/50 bg-husky-night p-7 text-white shadow-sm bg-stem-grid">
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
            <ul className="mt-5 space-y-2 text-sm text-white/85">
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
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-husky-night transition-colors hover:bg-gold-bright"
            >
              <span>
                {locale === "en" ? "Register at KSEA.org" : "KSEA 본부 공식 등록하기"}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {locale === "en" ? "Chapter Sign-Up" : "멤버 가입 신청서"}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              {locale === "en"
                ? "Tell us about your STEM interests."
                : "간단한 정보를 입력해 가입해 주세요."}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              {locale === "en"
                ? "Takes under 2 minutes. We use this information to match you with relevant mentors, study pods, and quarterly event invitations."
                : "2분 이내로 완료됩니다. 작성해 주신 전공과 관심 분야에 맞춰 멘토링 매칭, 스터디 그룹 및 행사 초대장을 보내드립니다."}
            </p>

            <div className="mt-6 rounded-2xl border border-stone-border bg-subtle/70 p-5 text-xs leading-relaxed text-ink-secondary">
              <p className="font-semibold text-ink">
                {locale === "en" ? "Questions before joining?" : "가입 전 궁금한 점이 있으신가요?"}
              </p>
              <p className="mt-1">
                {locale === "en" ? "Email our executive board anytime at " : "언제든 임원진 이메일 "}
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="font-semibold text-husky underline underline-offset-2"
                >
                  {SITE_INFO.email}
                </a>
                {locale === "en" ? "." : "로 편하게 문의해 주세요."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl border border-[#18794e]/30 bg-surface p-8 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18794e]/15 text-[#18794e]">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-ink">
                  {locale === "en"
                    ? `Welcome to KSEA UW, ${submitted.fullName}!`
                    : `${submitted.fullName}님, KSEA UW 가입을 환영합니다!`}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {locale === "en"
                    ? `Your membership registration preview has been recorded for ${submitted.email}. You will receive our Discord invite and upcoming quarter schedule shortly.`
                    : `${submitted.email}로 멤버십 등록(프리뷰)이 접수되었습니다. 디스코드 초대 링크와 이번 학기 행사 일정을 안내해 드리겠습니다.`}
                </p>

                <dl className="mt-6 grid gap-3 rounded-2xl border border-stone-border bg-canvas p-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium text-ink-muted">
                      {locale === "en" ? "Major / Field" : "전공"}
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{submitted.major}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-ink-muted">
                      {locale === "en" ? "Academic Standing" : "학년 / 과정"}
                    </dt>
                    <dd className="mt-0.5 font-semibold text-ink">{submitted.standing}</dd>
                  </div>
                  {submitted.officerInterest && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-medium text-ink-muted">
                        {locale === "en" ? "Leadership Track" : "임원진 트랙"}
                      </dt>
                      <dd className="mt-0.5 font-semibold text-husky">
                        {locale === "en"
                          ? "Opted in for Officer / Committee recruitment updates"
                          : "임원진 / 운영 위원회 모집 안내 수신 신청됨"}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 rounded-full bg-husky px-5 py-2.5 text-sm font-semibold text-white hover:bg-husky-deep"
                  >
                    <span>{locale === "en" ? "Browse Upcoming Events" : "예정 행사 둘러보기"}</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSubmitted(null)}
                    className="rounded-full border border-stone-border bg-canvas px-5 py-2.5 text-sm font-semibold text-ink-secondary hover:bg-subtle hover:text-ink"
                  >
                    {locale === "en" ? "Submit Another Response" : "새 신청서 작성"}
                  </button>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl border border-stone-border bg-surface p-6 shadow-xs sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="ksea-field">
                    <label htmlFor="join-name" className="block text-sm font-semibold text-ink">
                      {locale === "en" ? "Full Name" : "이름 (영문 또는 한글)"}{" "}
                      <span className="text-husky" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <span id="join-name-hint" className="mt-0.5 block text-xs text-ink-muted">
                      {locale === "en"
                        ? "Preferred name used on campus"
                        : "캠퍼스에서 사용하는 이름"}
                    </span>
                    <input
                      id="join-name"
                      name="fullName"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      aria-describedby="join-name-hint"
                      data-error="join-name-error"
                      placeholder={locale === "en" ? "e.g., Minji Kim" : "예: Minji Kim / 김민지"}
                      className="mt-1.5 w-full rounded-xl border border-stone-border bg-canvas px-3.5 py-2.5 text-sm text-ink transition-colors focus:border-husky focus:outline-none"
                    />
                    <div id="join-name-error" className="ksea-error-msg">
                      <span role="img" aria-label="Error">
                        ⚠️
                      </span>
                      <span>
                        {locale === "en"
                          ? "Please enter your name (at least 2 characters)."
                          : "이름을 2자 이상 입력해 주세요."}
                      </span>
                    </div>
                  </div>

                  {/* UW Email */}
                  <div className="ksea-field">
                    <label htmlFor="join-email" className="block text-sm font-semibold text-ink">
                      {locale === "en" ? "UW Email Address" : "UW 이메일 주소"}{" "}
                      <span className="text-husky" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <span id="join-email-hint" className="mt-0.5 block text-xs text-ink-muted">
                      {locale === "en"
                        ? "Format: netid@uw.edu (or personal email)"
                        : "형식: netid@uw.edu (또는 개인 이메일)"}
                    </span>
                    <input
                      id="join-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      aria-describedby="join-email-hint"
                      data-error="join-email-error"
                      placeholder="netid@uw.edu"
                      className="mt-1.5 w-full rounded-xl border border-stone-border bg-canvas px-3.5 py-2.5 text-sm text-ink transition-colors focus:border-husky focus:outline-none"
                    />
                    <div id="join-email-error" className="ksea-error-msg">
                      <span role="img" aria-label="Error">
                        ⚠️
                      </span>
                      <span>
                        {locale === "en"
                          ? "Enter a valid email address such as netid@uw.edu."
                          : "netid@uw.edu 형식의 올바른 이메일 주소를 입력해 주세요."}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Major */}
                  <div className="ksea-field">
                    <label htmlFor="join-major" className="block text-sm font-semibold text-ink">
                      {locale === "en" ? "Major / Intended Major" : "전공 (또는 희망 전공)"}{" "}
                      <span className="text-husky" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <span id="join-major-hint" className="mt-0.5 block text-xs text-ink-muted">
                      {locale === "en"
                        ? "e.g., Computer Science, BioE, Pre-Sciences"
                        : "예: Computer Science, ECE, Pre-Engineering"}
                    </span>
                    <input
                      id="join-major"
                      name="major"
                      type="text"
                      required
                      minLength={2}
                      aria-describedby="join-major-hint"
                      data-error="join-major-error"
                      placeholder={locale === "en" ? "Computer Science" : "컴퓨터공학 / CS"}
                      className="mt-1.5 w-full rounded-xl border border-stone-border bg-canvas px-3.5 py-2.5 text-sm text-ink transition-colors focus:border-husky focus:outline-none"
                    />
                    <div id="join-major-error" className="ksea-error-msg">
                      <span role="img" aria-label="Error">
                        ⚠️
                      </span>
                      <span>
                        {locale === "en"
                          ? "Please enter your current or intended major."
                          : "전공 또는 희망 전공을 입력해 주세요."}
                      </span>
                    </div>
                  </div>

                  {/* Academic Standing */}
                  <div className="ksea-field">
                    <label htmlFor="join-standing" className="block text-sm font-semibold text-ink">
                      {locale === "en" ? "Academic Standing" : "학년 / 학위 과정"}{" "}
                      <span className="text-husky" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <span id="join-standing-hint" className="mt-0.5 block text-xs text-ink-muted">
                      {locale === "en"
                        ? "Select your current year at UW"
                        : "현재 UW 재학 과정을 선택해 주세요"}
                    </span>
                    <select
                      id="join-standing"
                      name="standing"
                      required
                      defaultValue=""
                      aria-describedby="join-standing-hint"
                      data-error="join-standing-error"
                      className="mt-1.5 w-full rounded-xl border border-stone-border bg-canvas px-3.5 py-2.5 text-sm text-ink transition-colors focus:border-husky focus:outline-none"
                    >
                      <option value="" disabled>
                        {locale === "en" ? "Select standing..." : "선택해 주세요..."}
                      </option>
                      <option value="Freshman">
                        {locale === "en" ? "Freshman (1st Year)" : "학부 1학년 (Freshman)"}
                      </option>
                      <option value="Sophomore">
                        {locale === "en" ? "Sophomore (2nd Year)" : "학부 2학년 (Sophomore)"}
                      </option>
                      <option value="Junior">
                        {locale === "en" ? "Junior (3rd Year)" : "학부 3학년 (Junior)"}
                      </option>
                      <option value="Senior">
                        {locale === "en" ? "Senior (4th+ Year)" : "학부 4학년+ (Senior)"}
                      </option>
                      <option value="Master's">
                        {locale === "en" ? "Master's Student (MS/MEng)" : "석사 과정 (Master's)"}
                      </option>
                      <option value="PhD / Postdoc">
                        {locale === "en" ? "PhD Candidate / Postdoc" : "박사 과정 / 포닥 (PhD)"}
                      </option>
                    </select>
                    <div id="join-standing-error" className="ksea-error-msg">
                      <span role="img" aria-label="Error">
                        ⚠️
                      </span>
                      <span>
                        {locale === "en"
                          ? "Please select your academic standing."
                          : "현재 학년 또는 학위 과정을 선택해 주세요."}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interests Checkboxes */}
                <fieldset>
                  <legend className="text-sm font-semibold text-ink">
                    {locale === "en"
                      ? "What programs are you most excited about?"
                      : "가장 관심 있는 KSEA UW 활동 분야는 무엇인가요?"}
                  </legend>
                  <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                    {INTEREST_OPTIONS.map((opt) => {
                      const checked = selectedInterests.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={
                            checked
                              ? "flex cursor-pointer items-center gap-2.5 rounded-xl border border-husky bg-husky/5 px-3.5 py-2.5 text-sm font-medium text-ink"
                              : "flex cursor-pointer items-center gap-2.5 rounded-xl border border-stone-border bg-canvas px-3.5 py-2.5 text-sm text-ink-secondary hover:border-husky/40"
                          }
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleInterest(opt.id)}
                            className="h-4 w-4 accent-[#4b2e83]"
                          />
                          <span>{locale === "en" ? opt.en : opt.ko}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Officer Interest Checkbox */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-gold/50 bg-gold/10 p-4 text-sm">
                  <input
                    type="checkbox"
                    checked={officerInterest}
                    onChange={(e) => setOfficerInterest(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#4b2e83]"
                  />
                  <span>
                    <strong className="block font-semibold text-ink">
                      {locale === "en"
                        ? "Interested in Officer / Committee Intern Track"
                        : "임원진 / 운영 위원회(Committee) 활동에도 관심이 있습니다"}
                    </strong>
                    <span className="text-xs text-ink-secondary">
                      {locale === "en"
                        ? "Receive early notice when committee applications open each quarter."
                        : "매 학기 임원진 및 인턴 모집이 열릴 때 가장 먼저 안내 메일을 보내드립니다."}
                    </span>
                  </span>
                </label>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-ink-muted">
                    {locale === "en"
                      ? "Your info is only used for KSEA UW chapter updates."
                      : "입력하신 정보는 KSEA UW 동아리 안내 목적으로만 사용됩니다."}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-husky px-7 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-husky-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
                  >
                    {locale === "en" ? "Complete Registration" : "가입 신청 완료하기"}
                  </button>
                </div>
              </form>
            )}
          </div>
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

"use client";

import { useId, useState } from "react";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";
import { QUARTERS, type ClubEvent } from "@/data/events";
import { useLanguage } from "@/context/LanguageContext";
import { ModalDialog } from "./ModalDialog";

interface EventDetailModalProps {
  event: ClubEvent | null;
  onClose: () => void;
}

export function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  const { locale, t } = useLanguage();
  const titleId = useId();
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");

  const handleClose = () => {
    setRsvpSubmitted(false);
    setRsvpName("");
    setRsvpEmail("");
    onClose();
  };

  const handleRsvp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;
    setRsvpSubmitted(true);
  };

  const quarterMeta = event ? QUARTERS.find((q) => q.id === event.quarter) : null;

  return (
    <ModalDialog
      open={Boolean(event)}
      onClose={handleClose}
      titleId={titleId}
      closeLabel={locale === "en" ? "Close event details" : "행사 상세 닫기"}
    >
      {event && (
        <div>
          {/* Typographic Husky Purple header — zero per-event photo maintenance */}
          <div className="bg-husky-night px-6 pb-6 pt-7 text-white bg-stem-grid sm:px-8 sm:pt-8">
            <div className="flex flex-wrap items-center gap-2 pr-10">
              {quarterMeta && (
                <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-husky-night">
                  {t(quarterMeta.label)}
                </span>
              )}
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-[11px] font-semibold text-gold-bright">
                {t(event.shortDate)}
              </span>
            </div>

            <h2 id={titleId} className="mt-4 text-2xl font-bold tracking-tight text-white">
              {t(event.title)}
            </h2>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-3 rounded-xl border border-stone-border bg-canvas p-4 text-sm text-ink-secondary sm:grid-cols-2">
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>{t(event.displayDate)}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-husky" aria-hidden="true" />
                <span>{t(event.location)}</span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-secondary sm:text-base">
              {t(event.description)}
            </p>

            {event.speakers && event.speakers.length > 0 && (
              <div className="mt-6">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  {locale === "en" ? "Featured Speaker" : "초청 연사"}
                </h3>
                <ul className="mt-3 space-y-2">
                  {event.speakers.map((speaker) => (
                    <li
                      key={speaker.name}
                      className="rounded-xl border border-stone-border bg-subtle/50 px-4 py-3"
                    >
                      <p className="text-sm font-bold text-ink">{speaker.name}</p>
                      <p className="text-xs text-ink-muted">{t(speaker.affiliation)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick RSVP / Interest Notification */}
            {event.rsvpOpen && (
              <div className="mt-7 border-t border-stone-border pt-6">
                {rsvpSubmitted ? (
                  <div className="flex items-start gap-3 rounded-xl border border-[#18794e]/30 bg-[#18794e]/10 p-4 text-sm text-ink">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#18794e]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold">
                        {locale === "en"
                          ? "RSVP / Notification Saved (Preview)"
                          : "사전 알림·RSVP 접수가 완료되었습니다 (프리뷰)"}
                      </p>
                      <p className="mt-1 text-ink-secondary">
                        {locale === "en"
                          ? `Thanks, ${rsvpName}! We will send room details and schedule reminders to ${rsvpEmail}.`
                          : `${rsvpName}님 감사합니다! 확정된 장소와 일정 안내를 ${rsvpEmail}로 보내드리겠습니다.`}
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleRsvp} className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-ink">
                        {locale === "en" ? "RSVP / Get Event Updates" : "사전 신청 · 일정 알림 받기"}
                      </h3>
                      <p className="text-xs text-ink-muted">
                        {locale === "en"
                          ? "Leave your UW email to receive confirmed time, room, and RSVP links."
                          : "이메일을 남겨주시면 확정된 시간·장소 및 참가 링크를 가장 먼저 안내해 드립니다."}
                      </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor={`${titleId}-name`}
                          className="block text-xs font-semibold text-ink-secondary"
                        >
                          {locale === "en" ? "Full Name" : "이름"}
                        </label>
                        <input
                          id={`${titleId}-name`}
                          type="text"
                          required
                          autoComplete="name"
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          placeholder={locale === "en" ? "e.g., Minji Kim" : "예: 김민지"}
                          className="mt-1 w-full rounded-lg border border-stone-border bg-canvas px-3 py-2 text-sm text-ink focus:border-husky focus:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`${titleId}-email`}
                          className="block text-xs font-semibold text-ink-secondary"
                        >
                          {locale === "en" ? "UW Email" : "UW 이메일"}
                        </label>
                        <input
                          id={`${titleId}-email`}
                          type="email"
                          required
                          autoComplete="email"
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          placeholder="netid@uw.edu"
                          className="mt-1 w-full rounded-lg border border-stone-border bg-canvas px-3 py-2 text-sm text-ink focus:border-husky focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-husky px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-husky-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-husky"
                      >
                        {locale === "en" ? "Notify / RSVP" : "알림 · 참가 신청"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </ModalDialog>
  );
}

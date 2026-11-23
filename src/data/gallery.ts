import type { LocalizedText } from "./site";

export type GalleryCategory = "symposium" | "community" | "workshop" | "campus";

export interface GalleryItem {
  id: string;
  src: string;
  alt: LocalizedText;
  title: LocalizedText;
  caption: LocalizedText;
  quarter: LocalizedText;
  category: GalleryCategory;
}

export interface PartnerItem {
  id: string;
  name: string;
  tier: "sponsor" | "parent" | "campus" | "industry";
  description: LocalizedText;
  monogram: string;
  url?: string;
}

export const GALLERY_CATEGORIES: { id: "all" | GalleryCategory; label: LocalizedText }[] = [
  { id: "all", label: { en: "All Moments", ko: "전체 사진" } },
  { id: "symposium", label: { en: "Career & Panels", ko: "심포지엄 · 패널" } },
  { id: "workshop", label: { en: "Hackathons & Labs", ko: "해커톤 · 워크숍" } },
  { id: "community", label: { en: "Community", ko: "커뮤니티" } },
  { id: "campus", label: { en: "UW Campus", ko: "UW 캠퍼스" } },
];

/**
 * Add event photos to `public/images/` and append items here when ready:
 * {
 *   id: "autumn-general-meeting-2026",
 *   src: "/images/your-photo.jpg",
 *   alt: { en: "Photo description", ko: "사진 설명" },
 *   title: { en: "Event Title", ko: "행사 제목" },
 *   caption: { en: "Short recap...", ko: "간단한 설명..." },
 *   quarter: { en: "Autumn 2026", ko: "2026 가을학기" },
 *   category: "community",
 * }
 */
export const GALLERY_ITEMS: GalleryItem[] = [];

export const PARTNERS: PartnerItem[] = [
  {
    id: "extreme-networks",
    name: "Extreme Networks",
    tier: "sponsor",
    monogram: "EXT",
    url: "https://www.extremenetworks.com/",
    description: {
      en: "Official corporate sponsor of KSEA UW—global leader in cloud-driven AI networking solutions supporting our 2026–2027 student programs.",
      ko: "KSEA UW 공식 기업 후원사로, 클라우드 기반 AI 네트워킹 글로벌 선도 기업으로서 2026–2027 학생 활동을 후원합니다.",
    },
  },
  {
    id: "ksea-hq",
    name: "KSEA National Headquarters",
    tier: "parent",
    monogram: "KSEA",
    description: {
      en: "Parent organization supporting 70+ U.S. chapters, national scholarships, and the annual US-Korea Conference (UKC).",
      ko: "미국 전역 70여 개 지부와 전국 장학금, 연례 한미과학기술학술대회(UKC)를 주관하는 본부입니다.",
    },
  },
  {
    id: "ksea-seattle",
    name: "KSEA Seattle Chapter",
    tier: "parent",
    monogram: "SEA",
    description: {
      en: "Our regional professional chapter connecting UW students directly with Pacific Northwest STEM executives and mentors.",
      ko: "시애틀·벨뷰 지역 한인 현직 전문가들과 UW 학생 지부를 직접 연결하는 공식 지역 지부입니다.",
    },
  },
  {
    id: "uw-rso",
    name: "UW Student Activities Office (RSO)",
    tier: "campus",
    monogram: "UW",
    description: {
      en: "Registered Student Organization at the University of Washington supporting campus-wide academic and cultural events.",
      ko: "워싱턴대학교 공식 학생 단체(RSO)로서 교내 학술·커리어 행사와 학생 활동을 지원받습니다.",
    },
  },
  {
    id: "pnw-alumni",
    name: "Greater Seattle STEM Alumni Network",
    tier: "industry",
    monogram: "PNW",
    description: {
      en: "Volunteer engineers, researchers, and founders from Seattle's tech, aerospace, and biotech ecosystem.",
      ko: "시애틀 테크, 항공우주, 바이오 생태계에서 활약 중인 한인 동문 멘토 및 스피커 네트워크입니다.",
    },
  },
];

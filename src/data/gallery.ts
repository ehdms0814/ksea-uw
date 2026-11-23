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
  tier: "parent" | "campus" | "industry";
  description: LocalizedText;
  monogram: string;
}

export const GALLERY_CATEGORIES: { id: "all" | GalleryCategory; label: LocalizedText }[] = [
  { id: "all", label: { en: "All Moments", ko: "전체 사진" } },
  { id: "symposium", label: { en: "Career & Panels", ko: "심포지엄 · 패널" } },
  { id: "workshop", label: { en: "Hackathons & Labs", ko: "해커톤 · 워크숍" } },
  { id: "community", label: { en: "Community", ko: "커뮤니티" } },
  { id: "campus", label: { en: "UW Campus", ko: "UW 캠퍼스" } },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-symposium-atrium",
    src: "/images/event-tech-symposium.jpg",
    alt: {
      en: "Students and mentors chatting during the Seattle STEM Career Symposium in the Gates Center atrium",
      ko: "Gates Center 아트리움에서 열린 시애틀 STEM 커리어 심포지엄에서 대화하는 학생과 멘토들",
    },
    title: {
      en: "Seattle STEM Career Symposium",
      ko: "시애틀 STEM 커리어 심포지엄",
    },
    caption: {
      en: "Over 120 UW students and Seattle engineering leaders connected over mentorship roundtables at CSE2.",
      ko: "120명 이상의 UW 학생들과 시애틀 엔지니어링 리더들이 CSE2 아트리움에서 멘토링 라운드테이블을 진행했습니다.",
    },
    quarter: { en: "Autumn 2026", ko: "2026 가을학기" },
    category: "symposium",
  },
  {
    id: "gal-buildathon-makerspace",
    src: "/images/event-hackathon.jpg",
    alt: {
      en: "Student hackathon team debugging a robotics prototype and whiteboarding architecture in the UW makerspace",
      ko: "UW 메이커스페이스에서 로보틱스 프로토타입을 디버깅하고 아키텍처를 논의하는 해커톤 팀",
    },
    title: {
      en: "AI & Robotics Buildathon",
      ko: "AI & 로보틱스 빌더톤",
    },
    caption: {
      en: "Interdisciplinary ECE, CS, and ME teams designing autonomous sensor pipelines during our weekend build sprint.",
      ko: "전기공학, 컴퓨터공학, 기계공학 학생들이 한 팀이 되어 주말 동안 자율 센서 파이프라인을 설계하고 구현했습니다.",
    },
    quarter: { en: "Winter 2026", ko: "2026 겨울학기" },
    category: "workshop",
  },
  {
    id: "gal-research-panel",
    src: "/images/event-research-panel.jpg",
    alt: {
      en: "Industry scientists and graduate researchers sharing advice on stage at Alder Auditorium",
      ko: "Alder 오디토리움 무대에서 진로와 연구 조언을 공유하는 현직 연구자와 대학원생 패널",
    },
    title: {
      en: "Research & Grad School Panel",
      ko: "리서치 · 대학원 진학 패널",
    },
    caption: {
      en: "Candid insights on navigating undergraduate research, PhD admissions, and applied science careers.",
      ko: "학부 연구생 경험, 박사과정 진학 전략, 산업계 연구직 커리어에 대한 생생한 이야기를 나누었습니다.",
    },
    quarter: { en: "Spring 2026", ko: "2026 봄학기" },
    category: "symposium",
  },
  {
    id: "gal-study-collaboration",
    src: "/images/event-networking-night.jpg",
    alt: {
      en: "KSEA UW students working together around a wooden table overlooking Seattle evergreen trees",
      ko: "시애틀 상록수 숲이 보이는 테이블에 둘러앉아 프로젝트를 논의하는 KSEA UW 부원들",
    },
    title: {
      en: "Quarterly Project Kickoff",
      ko: "분기별 프로젝트 & 스터디 킥오프",
    },
    caption: {
      en: "Weekly technical study pods and cross-major project teams meeting on campus to learn and build together.",
      ko: "매주 캠퍼스에서 모여 함께 공부하고 사이드 프로젝트를 만들어가는 스터디 코호트 현장입니다.",
    },
    quarter: { en: "Autumn 2026", ko: "2026 가을학기" },
    category: "community",
  },
  {
    id: "gal-rainier-vista",
    src: "/images/hero-uw-campus.jpg",
    alt: {
      en: "Golden hour twilight view down UW Rainier Vista and Drumheller Fountain toward Mount Rainier",
      ko: "레이니어 산과 드럼헬러 분수가 어우러진 워싱턴대학교 Rainier Vista의 노을 풍경",
    },
    title: {
      en: "Home at UW Seattle",
      ko: "워싱턴대학교 시애틀 캠퍼스",
    },
    caption: {
      en: "Rainier Vista at dusk—where generations of Korean-American Husky engineers and scientists begin their journey.",
      ko: "수많은 UW 한인 과학기술인들의 여정이 시작되는 Rainier Vista의 황혼 풍경입니다.",
    },
    quarter: { en: "Seattle, WA", ko: "시애틀 캠퍼스" },
    category: "campus",
  },
];

export const PARTNERS: PartnerItem[] = [
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

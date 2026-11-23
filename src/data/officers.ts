import type { LocalizedText } from "./site";

export type CommitteeId = "executive" | "events" | "external" | "tech";

export interface Officer {
  id: string;
  name: string;
  koreanName: string;
  role: LocalizedText;
  committee: CommitteeId;
  major: LocalizedText;
  classYear: string;
  bio: LocalizedText;
  initials: string;
  accentColor: string;
  linkedin: string;
  email: string;
}

export const COMMITTEES: { id: "all" | CommitteeId; label: LocalizedText }[] = [
  { id: "all", label: { en: "All Officers", ko: "전체 임원진" } },
  { id: "executive", label: { en: "Executive Board", ko: "회장단" } },
  { id: "events", label: { en: "Events & Career", ko: "행사 · 커리어" } },
  { id: "external", label: { en: "External & Finance", ko: "대외협력 · 재무" } },
  { id: "tech", label: { en: "Tech & Media", ko: "테크 · 미디어" } },
];

export const OFFICERS: Officer[] = [
  {
    id: "jihoon-park",
    name: "Jihoon Park",
    koreanName: "박지훈",
    role: { en: "President", ko: "회장 (President)" },
    committee: "executive",
    major: { en: "Computer Science (BS/MS)", ko: "컴퓨터공학 (학석사 연계)" },
    classYear: "Class of 2027",
    bio: {
      en: "Leading chapter strategy and Seattle KSEA partnerships. Researching distributed ML systems at the Paul G. Allen School.",
      ko: "KSEA UW 전체 비전 수립과 시애틀 지부 협력을 총괄하고 있습니다. Allen School에서 분산 머신러닝 시스템을 연구 중입니다.",
    },
    initials: "JP",
    accentColor: "#4B2E83",
    linkedin: "https://linkedin.com",
    email: "president.kseauw@uw.edu",
  },
  {
    id: "seoyeon-kim",
    name: "Seoyeon Kim",
    koreanName: "김서연",
    role: { en: "Vice President", ko: "부회장 (Vice President)" },
    committee: "executive",
    major: { en: "Bioengineering", ko: "바이오엔지니어링" },
    classYear: "Class of 2027",
    bio: {
      en: "Overseeing cross-disciplinary STEM programming and pre-grad mentorship across Life Sciences and Engineering.",
      ko: "생명과학·공학 전공 간 융합 프로그램과 학부 연구생 멘토링 트랙을 총괄하고 있습니다.",
    },
    initials: "SK",
    accentColor: "#6B3FA0",
    linkedin: "https://linkedin.com",
    email: "vp.kseauw@uw.edu",
  },
  {
    id: "daniel-choi",
    name: "Daniel Choi",
    koreanName: "최다니엘",
    role: { en: "Director of Career & Events", ko: "커리어·행사 디렉터" },
    committee: "events",
    major: { en: "Electrical & Computer Engineering", ko: "전기컴퓨터공학" },
    classYear: "Class of 2027",
    bio: {
      en: "Curating quarterly tech talks, hardware workshops, and our flagship Annual Seattle STEM Career Symposium.",
      ko: "분기별 테크 토크, 하드웨어 워크숍, 그리고 연례 시애틀 STEM 커리어 심포지엄을 기획합니다.",
    },
    initials: "DC",
    accentColor: "#31497A",
    linkedin: "https://linkedin.com",
    email: "events.kseauw@uw.edu",
  },
  {
    id: "hannah-lee",
    name: "Hannah Lee",
    koreanName: "이한나",
    role: { en: "Director of External Relations", ko: "대외협력 디렉터" },
    committee: "external",
    major: { en: "Informatics & Data Science", ko: "인포매틱스 · 데이터사이언스" },
    classYear: "Class of 2028",
    bio: {
      en: "Connecting UW students with Korean-American engineers, founders, and corporate sponsors throughout the Puget Sound.",
      ko: "시애틀 지역 한인 엔지니어, 스타트업 파운더, 후원 기업과의 파트너십을 구축하고 있습니다.",
    },
    initials: "HL",
    accentColor: "#7C582B",
    linkedin: "https://linkedin.com",
    email: "external.kseauw@uw.edu",
  },
  {
    id: "minjun-jung",
    name: "Minjun Jung",
    koreanName: "정민준",
    role: { en: "Treasurer & Operations", ko: "재무 · 운영 디렉터" },
    committee: "external",
    major: { en: "Applied & Computational Math Sciences", ko: "응용계산수학 (ACMS)" },
    classYear: "Class of 2028",
    bio: {
      en: "Managing RSO funding, KSEA chapter grants, event logistics, and scholarship information sessions.",
      ko: "교내 RSO 예산, KSEA 지부 그랜트 운영, 행사 로지스틱스 및 장학금 안내를 담당합니다.",
    },
    initials: "MJ",
    accentColor: "#2C5E50",
    linkedin: "https://linkedin.com",
    email: "finance.kseauw@uw.edu",
  },
  {
    id: "yujin-song",
    name: "Yujin Song",
    koreanName: "송유진",
    role: { en: "Director of Academic Programs", ko: "학술 프로그램 디렉터" },
    committee: "events",
    major: { en: "Mechanical Engineering (PhD Student)", ko: "기계공학 (박사과정)" },
    classYear: "PhD Candidate",
    bio: {
      en: "Bridging UW undergraduate and graduate researchers through lab tours, grad school Q&As, and NWRC poster prep.",
      ko: "학부생과 대학원 연구자를 잇는 랩 투어, 대학원 진학 Q&A, NWRC 포스터 발표 준비를 이끕니다.",
    },
    initials: "YS",
    accentColor: "#5E2B63",
    linkedin: "https://linkedin.com",
    email: "academic.kseauw@uw.edu",
  },
  {
    id: "eric-han",
    name: "Eric Han",
    koreanName: "한에릭",
    role: { en: "Tech & Web Lead", ko: "테크 · 웹 리드" },
    committee: "tech",
    major: { en: "Computer Engineering", ko: "컴퓨터공학" },
    classYear: "Class of 2028",
    bio: {
      en: "Building KSEA UW digital infrastructure, member tools, and leading the Winter STEM Hackathon technical track.",
      ko: "KSEA UW 웹사이트와 멤버십 툴을 개발하고 겨울 학기 STEM 해커톤 테크 트랙을 운영합니다.",
    },
    initials: "EH",
    accentColor: "#332B66",
    linkedin: "https://linkedin.com",
    email: "tech.kseauw@uw.edu",
  },
  {
    id: "chloe-yoon",
    name: "Chloe Yoon",
    koreanName: "윤클로이",
    role: { en: "Creative & Media Lead", ko: "디자인 · 미디어 리드" },
    committee: "tech",
    major: { en: "Human Centered Design & Engineering", ko: "인간중심설계공학 (HCDE)" },
    classYear: "Class of 2028",
    bio: {
      en: "Shaping KSEA UW brand storytelling, event photography, and bilingual social campaigns for the UW community.",
      ko: "KSEA UW의 브랜드 디자인, 행사 사진 아카이빙, 한영 소셜 미디어 콘텐츠를 제작합니다.",
    },
    initials: "CY",
    accentColor: "#8A4F5C",
    linkedin: "https://linkedin.com",
    email: "media.kseauw@uw.edu",
  },
];

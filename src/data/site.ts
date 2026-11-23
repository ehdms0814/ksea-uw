export type Locale = "en" | "ko";

export interface LocalizedText {
  en: string;
  ko: string;
}

export const SITE_INFO = {
  shortName: "KSEA UW",
  fullName: {
    en: "Korean-American Scientists and Engineers Association — University of Washington",
    ko: "재미한인과학기술자협회 워싱턴대학교 지부 (KSEA UW)",
  },
  tagline: {
    en: "Bridging Korean-American STEM Leaders at the University of Washington",
    ko: "워싱턴대학교 한인 STEM 인재들을 연결하는 학술·커리어 커뮤니티",
  },
  chapterBadge: {
    en: "UW Young Generation Chapter · Est. Seattle, WA",
    ko: "워싱턴대학교 YG 챕터 · 시애틀",
  },
  coordinates: "47.6553° N, 122.3035° W · SEATTLE, WA",
  email: "ksea.uw@gmail.com",
  membershipFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfzmbd8xMVbXkMOMvtY8m_8XNUxjOPKgCnR6CNJYpJhDcxH3A/viewform?usp=send_form",
  location: {
    en: "University of Washington, Seattle Campus",
    ko: "워싱턴대학교 시애틀 캠퍼스 (UW Seattle)",
  },
  socials: {
    instagram: "https://www.instagram.com/ksea.uw/",
    linkedin: "https://linkedin.com",
    kseaNational: "https://www.ksea.org",
    kseaSeattle: "https://seattle.ksea.org",
    discord: "https://discord.com",
  },
} as const;

export const OFFICIAL_SPONSOR = {
  name: "Extreme Networks",
  url: "https://www.extremenetworks.com/",
  badge: {
    en: "Official Sponsor",
    ko: "공식 후원사",
  },
  headline: {
    en: "Proudly Sponsored by Extreme Networks",
    ko: "KSEA UW 공식 후원사 · Extreme Networks",
  },
  description: {
    en: "A global leader in cloud-driven AI networking solutions—powering KSEA UW's 2026–2027 STEM seminars, career programs, and student community.",
    ko: "클라우드 기반 AI 네트워킹 글로벌 선도 기업 Extreme Networks가 KSEA UW의 2026–2027 세미나, 커리어 프로그램 및 학생 활동을 공식 후원합니다.",
  },
  cta: {
    en: "Visit Extreme Networks",
    ko: "Extreme Networks 웹사이트 방문",
  },
} as const;

export const NAV_ITEMS = [
  { href: "/", label: { en: "Home", ko: "홈" } },
  { href: "/about", label: { en: "About & Officers", ko: "소개 · 임원진" } },
  { href: "/events", label: { en: "Events", ko: "행사 일정" } },
  { href: "/gallery", label: { en: "Gallery & Partners", ko: "갤러리 · 파트너" } },
  { href: "/join", label: { en: "Join Us", ko: "가입 안내" } },
] as const;

export const IMPACT_STATS = [
  {
    value: "250+",
    label: { en: "Active UW STEM Members", ko: "활동 중인 UW STEM 멤버" },
    detail: { en: "Undergrad, MS & PhD across 18+ majors", ko: "18개 이상 STEM 전공 학부·대학원생" },
  },
  {
    value: "15+",
    label: { en: "Annual Programs & Talks", ko: "연간 세미나 및 네트워킹" },
    detail: { en: "Career panels, workshops & mixers", ko: "커리어 패널, 워크숍, 멘토링" },
  },
  {
    value: "40+",
    label: { en: "Seattle Industry Mentors", ko: "시애틀 현직자 멘토진" },
    detail: { en: "Big Tech, Biotech, Aerospace & Research", ko: "빅테크, 바이오, 항공우주 및 연구기관" },
  },
  {
    value: "1971",
    label: { en: "KSEA National Heritage", ko: "KSEA 본부 설립 연도" },
    detail: { en: "70+ Chapters across the United States", ko: "미국 전역 70여 개 지부 네트워크" },
  },
] as const;

export const CORE_PILLARS = [
  {
    id: "career",
    index: "01",
    title: { en: "Career & Industry Mentorship", ko: "커리어 및 현직자 멘토링" },
    description: {
      en: "Direct access to Korean-American engineers, scientists, and researchers across Greater Seattle—from Amazon, Microsoft, Google, and Meta to Fred Hutch and Boeing.",
      ko: "아마존, 마이크로소프트, 구글, 메타부터 프레드 허치, 보잉까지 시애틀 지역 한인 엔지니어·연구자들과 직접 교류하는 멘토링과 리크루팅 세션을 운영합니다.",
    },
    highlights: {
      en: ["1:1 Resume & Portfolio Clinics", "Seattle Tech & Bio Coffee Chats", "Internship & New-Grad Referral Network"],
      ko: ["1:1 이력서·포트폴리오 리뷰", "시애틀 테크·바이오 현직자 커피챗", "인턴십 및 신입 채용 네트워킹"],
    },
  },
  {
    id: "academic",
    index: "02",
    title: { en: "Research & Academic Growth", ko: "학술 교류 및 리서치 성장" },
    description: {
      en: "Navigate UW research labs, graduate school applications, and interdisciplinary STEM projects through hands-on workshops, poster showcases, and KSEA scholarship guidance.",
      ko: "UW 교내 연구실 컨택, 대학원 진학 준비, 융합 STEM 프로젝트 및 해커톤, 그리고 KSEA 본부 장학금·학회(UKC/NWRC) 참가를 체계적으로 지원합니다.",
    },
    highlights: {
      en: ["Undergraduate Research & PhD Panels", "Quarterly Technical Workshops & Hackathons", "KSEA Scholarships & UKC Conference Grants"],
      ko: ["학부 연구생(URP) 및 대학원 진학 패널", "분기별 기술 워크숍 & 해커톤", "KSEA 장학금 및 UKC/NWRC 학회 지원"],
    },
  },
  {
    id: "community",
    index: "03",
    title: { en: "Lifelong Husky STEM Community", ko: "함께 성장하는 UW 한인 커뮤니티" },
    description: {
      en: "Build lasting friendships across CS, Engineering, Data Science, Bioengineering, Physics, and Pre-Health while developing student leadership within the Pacific Northwest.",
      ko: "컴퓨터공학, 전기·기계공학, 데이터사이언스, 바이오, 자연과학 등 다양한 STEM 전공 학생들이 선후배로 만나 교류하고 리더십을 키우는 열린 공동체입니다.",
    },
    highlights: {
      en: ["Quarterly Social Mixers & Study Nights", "Cross-Major Project Teams", "Officer Leadership & Seattle Chapter Collaboration"],
      ko: ["분기별 소셜 믹서 및 스터디 나잇", "전공 간 협업 프로젝트 팀 빌딩", "임원진 리더십 및 시애틀 지부 공동 행사"],
    },
  },
] as const;

export const TIMELINE_MILESTONES = [
  {
    year: "1971",
    title: { en: "KSEA Founded Nationally", ko: "KSEA 미국 본부 설립" },
    description: {
      en: "Korean-American Scientists and Engineers Association established as a premier non-profit advancing science, technology, and U.S.–Korea collaboration.",
      ko: "재미한인과학기술자협회(KSEA)가 설립되어 한미 과학기술 협력과 차세대 이공계 인재 양성의 토대를 마련했습니다.",
    },
  },
  {
    year: "2014",
    title: { en: "UW Young Generation Chapter", ko: "워싱턴대학교 YG 학생 지부 출범" },
    description: {
      en: "KSEA UW officially organized as a Registered Student Organization (RSO) partnering closely with the KSEA Seattle Chapter.",
      ko: "KSEA 시애틀 지부와 긴밀히 협력하는 UW 공식 학생 단체(RSO)로서 한인 STEM 학생들을 위한 커뮤니티를 시작했습니다.",
    },
  },
  {
    year: "2022",
    title: { en: "Pacific NW STEM Expansion", ko: "시애틀 테크·바이오 멘토링 확대" },
    description: {
      en: "Launched annual Seattle STEM Career Symposium and interdisciplinary research mixers welcoming 150+ students and alumni every quarter.",
      ko: "매 분기 150명 이상의 학생과 현직자가 참여하는 시애틀 STEM 커리어 심포지엄과 리서치 네트워킹 프로그램을 정례화했습니다.",
    },
  },
  {
    year: "2026",
    title: { en: "Next-Gen Innovation Hub", ko: "차세대 융합 STEM 허브로 도약" },
    description: {
      en: "Expanding AI/ML study cohorts, biotech research roundtables, and cross-university collaborations across Washington State.",
      ko: "AI/ML 스터디 코호트, 바이오테크 라운드테이블, 워싱턴주 대학 연합 해커톤으로 활동 영역을 넓혀가고 있습니다.",
    },
  },
] as const;

export const FAQS = [
  {
    question: {
      en: "Do I need to be a declared STEM major to join KSEA UW?",
      ko: "STEM 전공으로 이미 배정(Declared)된 학생만 가입할 수 있나요?",
    },
    answer: {
      en: "Not at all! Pre-major students, interdisciplinary learners (Informatics, HCDE, Econ/Stats, Design), graduate students, and anyone curious about science, technology, or engineering at UW are warmly welcome.",
      ko: "전혀 그렇지 않습니다! Pre-major 학생은 물론 Informatics, HCDE, 통계·경제, 대학원생 등 과학·기술·공학 분야에 관심 있는 모든 UW 학생을 환영합니다.",
    },
  },
  {
    question: {
      en: "Do I need to speak Korean fluently to participate?",
      ko: "한국어를 유창하게 해야 참여할 수 있나요?",
    },
    answer: {
      en: "No! Most of our workshops, panels, and announcements are hosted in English or bilingually. Both Korean-American students and international students from Korea thrive together in our community.",
      ko: "아니요! 대부분의 세미나, 패널 토크, 공지는 영어 또는 한영 병기로 진행됩니다. 한인 2세 학생과 한국 유학생 모두 편하게 어울릴 수 있는 분위기입니다.",
    },
  },
  {
    question: {
      en: "Is there a membership fee to join KSEA UW?",
      ko: "동아리 가입비나 회비가 있나요?",
    },
    answer: {
      en: "Joining the KSEA UW campus chapter is completely free for all UW students. Official KSEA National YG membership is optional (free for undergraduate students under current KSEA promotions, small annual fee for grad students) and unlocks national scholarships and conference travel grants.",
      ko: "KSEA UW 교내 챕터 일반 멤버 가입은 전액 무료입니다. 선택 사항인 KSEA 본부 YG 정회원 등록 시(학부생 프로모션 무료 / 대학원생 소액 연회비) 전국 장학금 및 UKC/NWRC 학회 지원 혜택을 받을 수 있습니다.",
    },
  },
] as const;

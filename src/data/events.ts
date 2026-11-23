import type { LocalizedText } from "./site";

export type QuarterId = "autumn" | "winter" | "spring";
export type EventCategory = "seminar" | "career" | "networking" | "community";

export interface QuarterMeta {
  id: QuarterId;
  label: LocalizedText;
  dateRange: LocalizedText;
  academicYear: string;
}

export interface ClubEvent {
  id: string;
  quarter: QuarterId;
  shortDate: LocalizedText;
  displayDate: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  category: EventCategory;
  featured?: boolean;
  speakers?: {
    name: string;
    affiliation: LocalizedText;
  }[];
  tags: string[];
  rsvpOpen: boolean;
}

export const QUARTERS: QuarterMeta[] = [
  {
    id: "autumn",
    label: { en: "Autumn Quarter", ko: "가을 학기 (Autumn Quarter)" },
    dateRange: { en: "Sep 30 – Dec 11, 2026", ko: "2026.09.30 – 12.11" },
    academicYear: "2026–2027",
  },
  {
    id: "winter",
    label: { en: "Winter Quarter", ko: "겨울 학기 (Winter Quarter)" },
    dateRange: { en: "Jan 4 – Mar 12, 2027", ko: "2027.01.04 – 03.12" },
    academicYear: "2026–2027",
  },
  {
    id: "spring",
    label: { en: "Spring Quarter", ko: "봄 학기 (Spring Quarter)" },
    dateRange: { en: "Mar 29 – Jun 4, 2027", ko: "2027.03.29 – 06.04" },
    academicYear: "2026–2027",
  },
];

export const EVENT_CATEGORIES: { id: "all" | EventCategory; label: LocalizedText }[] = [
  { id: "all", label: { en: "All Events", ko: "전체 분야" } },
  { id: "seminar", label: { en: "Seminars", ko: "세미나" } },
  { id: "career", label: { en: "Company Tours & Recruiting", ko: "기업 투어 · 모집" } },
  { id: "networking", label: { en: "Coffee Chat & Picnic", ko: "커피챗 · 네트워킹" } },
  { id: "community", label: { en: "General & Social", ko: "정기 모임 · 소셜" } },
];

export const EVENTS: ClubEvent[] = [
  // ==========================================
  // AUTUMN QUARTER (Sep 30 – Dec 11, 2026)
  // ==========================================
  {
    id: "autumn-general-meeting",
    quarter: "autumn",
    shortDate: { en: "Oct 9", ko: "10/9" },
    displayDate: { en: "Fri, Oct 9, 2026", ko: "2026년 10월 9일 (금)" },
    title: {
      en: "Autumn General Meeting",
      ko: "가을 학기 정기 총회 (General Meeting)",
    },
    summary: {
      en: "Kick off the 2026–2027 academic year with our chapter overview, annual roadmap, and welcome mixer for new & returning members.",
      ko: "2026–2027 학년도 KSEA UW 연간 로드맵 소개, 임원진 인사 및 신입·기존 부원 교류 시간을 갖습니다.",
    },
    description: {
      en: "Join us for our first official gathering of the year! Meet the executive board, preview all upcoming Autumn/Winter/Spring seminars and company tours, learn how to apply for officer roles, and connect with fellow UW STEM students.",
      ko: "새 학기의 시작을 여는 첫 공식 모임입니다. 26–27 연간 세미나·기업 투어·커피챗 일정을 공유하고, 임원진 모집 안내와 전공별 아이스브레이킹을 진행합니다.",
    },
    location: { en: "UW Seattle Campus (Room TBA)", ko: "UW 시애틀 캠퍼스 (강의실 추후 공지)" },
    category: "community",
    tags: ["General Meeting", "Kickoff", "Welcome"],
    rsvpOpen: true,
  },
  {
    id: "autumn-officer-recruitment",
    quarter: "autumn",
    shortDate: { en: "Oct 9 – 16", ko: "10/9 – 10/16" },
    displayDate: { en: "Oct 9 – Oct 16, 2026", ko: "2026년 10월 9일 – 10월 16일" },
    title: {
      en: "2026–2027 Officer Recruitment",
      ko: "2026–2027 임원진 모집",
    },
    summary: {
      en: "Applications open for student leaders across Events, External Relations, Tech & Web, and Media committees.",
      ko: "행사 기획, 대외협력, 테크·웹, 디자인·미디어 등 KSEA UW를 함께 이끌어갈 신규 임원진을 모집합니다.",
    },
    description: {
      en: "Help shape UW's premier Korean-American STEM community. Gain hands-on leadership experience coordinating speaker seminars, corporate tours, and Seattle KSEA chapter partnerships. Open to all UW undergrad and grad students.",
      ko: "세미나 연사 초청, 대기업 투어 기획, 시애틀 지부 협력 등 실질적인 리더십 경험을 쌓을 수 있습니다. 전공과 학년에 관계없이 열정 있는 UW 학생 누구나 지원 가능합니다.",
    },
    location: { en: "Online Application & Campus Interviews", ko: "온라인 지원서 접수 및 인터뷰" },
    category: "career",
    tags: ["Recruitment", "Leadership", "Officers"],
    rsvpOpen: true,
  },
  {
    id: "autumn-ksea-seattle-picnic",
    quarter: "autumn",
    shortDate: { en: "Oct 12 – 16", ko: "10/12 – 10/16 중" },
    displayDate: { en: "Week of Oct 12 – 16, 2026", ko: "2026년 10월 12일 – 16일 사이" },
    title: {
      en: "KSEA Seattle Chapter Picnic",
      ko: "KSEA Seattle 지부 피크닉",
    },
    summary: {
      en: "Outdoor autumn picnic hosted together with KSEA Seattle professionals, alumni, and fellow Puget Sound STEM students.",
      ko: "KSEA 시애틀 지부 현직자, 동문, 학생 멤버들이 함께 어울리는 가을 야외 피크닉입니다.",
    },
    description: {
      en: "Enjoy Seattle autumn weather, great food, and casual conversations with engineers, researchers, and scientists from the KSEA Seattle Chapter. Exact date and park location will be announced to registered members.",
      ko: "편안한 분위기 속에서 KSEA 시애틀 지부 현직자 및 선후배들과 식사를 나누며 교류하는 자리입니다. 정확한 날짜와 공원 위치는 확정되는 대로 공지됩니다.",
    },
    location: { en: "Greater Seattle Park (Exact Date & Venue TBA)", ko: "시애틀 인근 공원 (일시·장소 추후 확정)" },
    category: "networking",
    tags: ["KSEA Seattle", "Picnic", "Networking"],
    rsvpOpen: true,
  },
  {
    id: "autumn-seminar-1-soyeon-yi",
    quarter: "autumn",
    shortDate: { en: "Oct 22", ko: "10/22" },
    displayDate: { en: "Thu, Oct 22, 2026", ko: "2026년 10월 22일 (목)" },
    title: {
      en: "Seminar #1: Special Talk with Dr. Soyeon Yi",
      ko: "세미나 1: 이소연 박사님 초청 강연",
    },
    summary: {
      en: "An inspiring keynote and Q&A with Dr. Soyeon Yi on space exploration, interdisciplinary STEM leadership, and fearless career paths.",
      ko: "이소연 박사님을 모시고 우주·과학기술 여정, 도전의 경험, 그리고 STEM 인재로서의 커리어 인사이트를 듣는 특별 세미나입니다.",
    },
    description: {
      en: "We are honored to welcome Dr. Soyeon Yi as our first keynote speaker of the 2026–2027 academic year. Hear firsthand stories from her journey in aerospace engineering, science communication, and global STEM leadership, followed by an open student Q&A.",
      ko: "2026–2027 학년도 첫 세미나로 이소연 박사님을 초청합니다. 우주와 공학 연구, 글로벌 커리어 전환과 도전에 대한 생생한 강연 후 학생들과 자유로운 Q&A 시간이 이어집니다.",
    },
    location: { en: "UW Seattle Campus Auditorium (Room TBA)", ko: "UW 시애틀 캠퍼스 강당 (강의실 추후 공지)" },
    category: "seminar",
    featured: true,
    speakers: [
      {
        name: "Dr. Soyeon Yi (이소연 박사)",
        affiliation: {
          en: "First Korean Astronaut · STEM Leader & Educator",
          ko: "대한민국 최초 우주인 · 과학기술 리더 및 강연자",
        },
      },
    ],
    tags: ["Seminar 1", "Keynote", "Dr. Soyeon Yi"],
    rsvpOpen: true,
  },
  {
    id: "autumn-suneung-event",
    quarter: "autumn",
    shortDate: { en: "Nov 19", ko: "11/19" },
    displayDate: { en: "Thu, Nov 19, 2026", ko: "2026년 11월 19일 (목)" },
    title: {
      en: "Suneung (CSAT) Community Event",
      ko: "수능 이벤트",
    },
    summary: {
      en: "A fun campus cultural & finals-season encouragement event featuring Korean treats, quizzes, and community hangout.",
      ko: "수능 시즌을 맞아 한국 간식 나눔, 미니 퀴즈, 학기 말 응원 이벤트를 함께 즐기는 커뮤니티 행사입니다.",
    },
    description: {
      en: "Celebrate Korean exam-day traditions right on UW campus! Stop by for nostalgic snacks, friendly trivia, and study-break camaraderie with KSEA UW friends ahead of autumn finals.",
      ko: "UW 캠퍼스에서 함께 즐기는 KSEA UW만의 수능 시즌 특별 이벤트입니다. 가을 학기 파이널을 앞두고 한국 간식과 재미있는 활동으로 에너지를 충전해 보세요.",
    },
    location: { en: "UW Seattle Campus (Location TBA)", ko: "UW 시애틀 캠퍼스 (장소 추후 공지)" },
    category: "community",
    tags: ["Suneung", "Community", "Social"],
    rsvpOpen: true,
  },
  {
    id: "autumn-company-tour",
    quarter: "autumn",
    shortDate: { en: "Nov 19", ko: "11/19" },
    displayDate: { en: "Thu, Nov 19, 2026", ko: "2026년 11월 19일 (목)" },
    title: {
      en: "Seattle Big Tech & Engineering Company Tour",
      ko: "시애틀 대기업 오피스 투어",
    },
    summary: {
      en: "On-site visits and engineer Q&As at major Puget Sound headquarters including Amazon, Microsoft, Boeing, Oracle, and more.",
      ko: "Amazon, Microsoft, Boeing, Oracle 등 시애틀 지역 대표 글로벌 기업 오피스를 방문해 현직자와 교류합니다.",
    },
    description: {
      en: "Step inside leading Greater Seattle tech and aerospace offices! Tour workspaces, learn about engineering culture and internship pipelines directly from Korean-American hosts, and grow your local industry network.",
      ko: "시애틀·벨뷰·에버렛 지역을 대표하는 글로벌 테크 및 항공우주 기업(Amazon, Microsoft, Boeing, Oracle 등)을 직접 방문하여 사옥 투어와 현직자 Q&A를 진행합니다.",
    },
    location: {
      en: "Greater Seattle (Amazon, Microsoft, Boeing, Oracle, etc.)",
      ko: "시애틀 권역 기업 사옥 (Amazon, Microsoft, Boeing, Oracle 등)",
    },
    category: "career",
    featured: true,
    tags: ["Company Tour", "Amazon", "Microsoft", "Boeing", "Oracle"],
    rsvpOpen: true,
  },

  // ==========================================
  // WINTER QUARTER (Jan 4 – Mar 12, 2027)
  // ==========================================
  {
    id: "winter-seminar-2-michael-cho",
    quarter: "winter",
    shortDate: { en: "Jan 14", ko: "1/14" },
    displayDate: { en: "Thu, Jan 14, 2027", ko: "2027년 1월 14일 (목)" },
    title: {
      en: "Seminar #2: Frontier AI Talk with Michael Cho (OpenAI)",
      ko: "세미나 2: OpenAI Michael Cho님 초청 세미나",
    },
    summary: {
      en: "Inside frontier AI engineering and building at the cutting edge—featuring guest speaker Michael Cho from OpenAI.",
      ko: "OpenAI 소속 Michael Cho님을 초청해 최신 AI 기술 트렌드, 실무 경험, 그리고 커리어 조언을 듣는 세미나입니다.",
    },
    description: {
      en: "Kick off Winter Quarter with an exclusive technical and career talk featuring Michael Cho from OpenAI. Explore what it takes to build modern AI systems, prepare for high-impact engineering roles, and ask your questions live.",
      ko: "겨울 학기 첫 세미나로 OpenAI의 Michael Cho님을 모십니다. 최전선 AI 개발 현장 이야기와 함께 학생들이 AI 시대에 어떤 역량을 준비하면 좋을지 깊이 있는 Q&A를 나눕니다.",
    },
    location: { en: "UW Seattle Campus (Room TBA)", ko: "UW 시애틀 캠퍼스 (강의실 추후 공지)" },
    category: "seminar",
    featured: true,
    speakers: [
      {
        name: "Michael Cho",
        affiliation: { en: "OpenAI", ko: "OpenAI" },
      },
    ],
    tags: ["Seminar 2", "OpenAI", "AI/ML"],
    rsvpOpen: true,
  },
  {
    id: "winter-seollal-event",
    quarter: "winter",
    shortDate: { en: "Feb 6 – 8", ko: "2/6 – 2/8 중" },
    displayDate: { en: "Between Feb 6 – 8, 2027", ko: "2027년 2월 6일 – 8일 사이" },
    title: {
      en: "Lunar New Year (Seollal) Celebration",
      ko: "설날 이벤트",
    },
    summary: {
      en: "Celebrate Seollal together on campus with Korean holiday food, traditional games, and warm community fellowship.",
      ko: "설날을 맞아 명절 음식, 전통 놀이, 그리고 동아리 멤버들과 따뜻한 새해 인사를 나누는 소셜 행사입니다.",
    },
    description: {
      en: "Home away from home! Gather with fellow Korean-American STEM students during Lunar New Year weekend for festive food, games, and mid-winter connection.",
      ko: "타지에서 맞는 설날, KSEA UW 멤버들과 함께 따뜻한 명절 음식과 게임을 즐기며 겨울 학기의 활력을 나누는 자리입니다.",
    },
    location: { en: "UW Seattle Campus (Venue TBA)", ko: "UW 시애틀 캠퍼스 (장소 추후 공지)" },
    category: "community",
    tags: ["Seollal", "Lunar New Year", "Social"],
    rsvpOpen: true,
  },
  {
    id: "winter-coffee-chat",
    quarter: "winter",
    shortDate: { en: "Feb 26", ko: "2/26" },
    displayDate: { en: "Fri, Feb 26, 2027", ko: "2027년 2월 26일 (금)" },
    title: {
      en: "Winter Coffee Chat: Faculty, Grad Students & Industry",
      ko: "겨울 학기 Coffee Chat (교수님 · 대학원생 · 현직자)",
    },
    summary: {
      en: "Small-group mentoring tables connecting undergrads with UW professors, MS/PhD researchers, and Seattle industry mentors.",
      ko: "UW 교수님, 대학원생, 시애틀 현직자 멘토들과 소그룹 테이블에서 진로·연구·취업을 자유롭게 상담하는 커피챗입니다.",
    },
    description: {
      en: "Whether you are deciding between grad school and industry, looking for an undergraduate research lab, or preparing for summer internships, rotate across curated tables to have candid 1:small-group conversations over coffee.",
      ko: "대학원 진학과 취업 사이에서 고민 중이거나, 교내 연구실 컨택 및 인턴십 준비에 실질적인 조언이 필요한 학생들을 위해 교수님·대학원생·현직자 멘토를 한자리에 모십니다.",
    },
    location: { en: "UW Seattle Campus (Room TBA)", ko: "UW 시애틀 캠퍼스 (장소 추후 공지)" },
    category: "networking",
    featured: true,
    tags: ["Coffee Chat", "Faculty", "Grad School", "Industry"],
    rsvpOpen: true,
  },

  // ==========================================
  // SPRING QUARTER (Mar 29 – Jun 4, 2027)
  // ==========================================
  {
    id: "spring-seminar-3",
    quarter: "spring",
    shortDate: { en: "Apr 15", ko: "4/15" },
    displayDate: { en: "Thu, Apr 15, 2027", ko: "2027년 4월 15일 (목)" },
    title: {
      en: "Seminar #3 (Speaker TBA)",
      ko: "세미나 3 (연사 추후 공개)",
    },
    summary: {
      en: "Spring Quarter technical & career guest seminar featuring a leader in science and engineering.",
      ko: "봄 학기 첫 번째 초청 강연 세미나입니다. 연사 및 세부 주제는 추후 공지될 예정입니다.",
    },
    description: {
      en: "Our third seminar of the 2026–2027 series continues bridging UW students with distinguished Korean-American scientists and engineers. Speaker announcement coming soon!",
      ko: "2026–2027 세미나 시리즈의 세 번째 강연입니다. 확정되는 연사 정보와 강연 주제는 KSEA UW 채널과 본 페이지를 통해 가장 먼저 안내해 드립니다.",
    },
    location: { en: "UW Seattle Campus (Room TBA)", ko: "UW 시애틀 캠퍼스 (강의실 추후 공지)" },
    category: "seminar",
    tags: ["Seminar 3", "Spring Quarter"],
    rsvpOpen: true,
  },
  {
    id: "spring-coffee-chat",
    quarter: "spring",
    shortDate: { en: "Date TBA", ko: "일정 미정" },
    displayDate: { en: "Spring 2027 (Date TBA)", ko: "2027년 봄 학기 (일정 미정)" },
    title: {
      en: "Spring Coffee Chat: Faculty, Grad Students & Industry",
      ko: "봄 학기 Coffee Chat (교수님 · 대학원생 · 현직자)",
    },
    summary: {
      en: "Intimate spring mentoring session with UW faculty, graduate researchers, and Greater Seattle STEM professionals.",
      ko: "교수님, 대학원생, 현직자 멘토와 함께 여름 인턴십·연구·졸업 후 진로를 나누는 봄 학기 커피챗입니다.",
    },
    description: {
      en: "Connect with mentors across academia and industry before summer begins. Great for students preparing for summer internships, graduate fellowships, or autumn recruiting.",
      ko: "여름 방학을 앞두고 학계와 산업계 멘토들에게 직접 피드백을 받을 수 있는 소규모 네트워킹 자리입니다. 정확한 날짜는 봄 학기 초 공지됩니다.",
    },
    location: { en: "UW Seattle Campus (TBA)", ko: "UW 시애틀 캠퍼스 (추후 공지)" },
    category: "networking",
    tags: ["Coffee Chat", "Mentorship", "TBA"],
    rsvpOpen: true,
  },
  {
    id: "spring-seminar-4",
    quarter: "spring",
    shortDate: { en: "May 13", ko: "5/13" },
    displayDate: { en: "Thu, May 13, 2027", ko: "2027년 5월 13일 (목)" },
    title: {
      en: "Seminar #4 (Speaker TBA)",
      ko: "세미나 4 (연사 추후 공개)",
    },
    summary: {
      en: "Final speaker seminar of the 2026–2027 academic year highlighting emerging STEM careers and research.",
      ko: "2026–2027 학년도 네 번째 초청 세미나입니다. 세부 강연 주제는 추후 공지됩니다.",
    },
    description: {
      en: "Wrap up our 2026–2027 seminar series with industry and academic insights tailored for UW STEM students planning their next chapter.",
      ko: "한 해를 마무리하는 네 번째 정기 세미나입니다. 연사 라인업이 확정되는 대로 업데이트됩니다.",
    },
    location: { en: "UW Seattle Campus (Room TBA)", ko: "UW 시애틀 캠퍼스 (강의실 추후 공지)" },
    category: "seminar",
    tags: ["Seminar 4", "Spring Quarter"],
    rsvpOpen: true,
  },
  {
    id: "spring-company-tour",
    quarter: "spring",
    shortDate: { en: "Date TBA", ko: "일정 미정" },
    displayDate: { en: "Spring 2027 (Date TBA)", ko: "2027년 봄 학기 (일정 미정)" },
    title: {
      en: "Spring Big Tech & Industry Company Tour",
      ko: "봄 학기 대기업 오피스 투어",
    },
    summary: {
      en: "Second on-site corporate visit of the year to leading Seattle tech, aerospace, and engineering companies.",
      ko: "시애틀 지역 글로벌 테크·엔지니어링 기업 사옥을 탐방하고 현직자 멘토와 교류하는 봄 학기 투어입니다.",
    },
    description: {
      en: "Following our Autumn corporate tour, join us in Spring Quarter for another behind-the-scenes look at Greater Seattle's top engineering organizations. Participating host company and exact date to be announced.",
      ko: "가을 학기에 이어 봄 학기에도 시애틀 지역 주요 대기업 오피스 투어를 진행합니다. 방문 기업과 세부 일정은 확정 후 공지됩니다.",
    },
    location: { en: "Greater Seattle Area (Host Company TBA)", ko: "시애틀 권역 기업 사옥 (방문 기업 추후 공지)" },
    category: "career",
    tags: ["Company Tour", "Career", "TBA"],
    rsvpOpen: true,
  },
];

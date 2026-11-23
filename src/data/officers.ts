import type { LocalizedText } from "./site";

export type CommitteeId = "executive" | "pr" | "planning" | "design";

export interface Officer {
  id: string;
  name: string;
  koreanName?: string;
  role: LocalizedText;
  isLead?: boolean;
  committee: CommitteeId;
  major: LocalizedText;
  classYear: string;
  bio?: LocalizedText;
  initials: string;
  accentColor: string;
  linkedin?: string;
  email?: string;
}

export const COMMITTEES: { id: "all" | CommitteeId; label: LocalizedText }[] = [
  { id: "all", label: { en: "All Officers", ko: "전체 임원진" } },
  { id: "executive", label: { en: "Executive Board", ko: "회장단" } },
  { id: "pr", label: { en: "PR Team", ko: "PR팀" } },
  { id: "planning", label: { en: "Planning Team", ko: "기획팀" } },
  { id: "design", label: { en: "Design & Marketing", ko: "디자인·마케팅팀" } },
];

export const COMMITTEE_GROUPS: { id: CommitteeId; label: LocalizedText }[] = [
  { id: "executive", label: { en: "Executive Board", ko: "회장단 (Executive Board)" } },
  { id: "pr", label: { en: "PR Team", ko: "PR팀 (Public Relations)" } },
  { id: "planning", label: { en: "Planning Team", ko: "기획팀 (Events & Planning)" } },
  {
    id: "design",
    label: { en: "Design & Marketing Team", ko: "디자인·마케팅팀 (Design & Marketing)" },
  },
];

export const OFFICERS: Officer[] = [
  // ==========================================
  // EXECUTIVE BOARD (회장단)
  // ==========================================
  {
    id: "hanbyul-kang",
    name: "Hanbyul Kang",
    role: { en: "President", ko: "회장 (President)" },
    isLead: true,
    committee: "executive",
    major: { en: "Computer Science", ko: "컴퓨터공학 (CS)" },
    classYear: "Class of 2027",
    initials: "HK",
    accentColor: "#4B2E83",
  },
  {
    id: "jung-lee",
    name: "Jung Lee",
    role: { en: "Vice President", ko: "부회장 (Vice President)" },
    isLead: true,
    committee: "executive",
    major: { en: "Mathematics", ko: "수학 (Mathematics)" },
    classYear: "Class of 2027",
    initials: "JL",
    accentColor: "#5C3A9C",
  },
  {
    id: "ann-yun",
    name: "Ann Yun",
    role: { en: "Secretary", ko: "서기 (Secretary)" },
    isLead: true,
    committee: "executive",
    major: { en: "Biology", ko: "생물학 (Biology)" },
    classYear: "Class of 2029",
    initials: "AY",
    accentColor: "#3D246C",
  },

  // ==========================================
  // PR TEAM (PR팀)
  // ==========================================
  {
    id: "jennifer-yoo",
    name: "Jennifer Yoo",
    role: { en: "PR Team Lead", ko: "PR팀장" },
    isLead: true,
    committee: "pr",
    major: {
      en: "Medical Anthropology & Global Health",
      ko: "의료인류학 · 글로벌헬스",
    },
    classYear: "Class of 2027",
    initials: "JY",
    accentColor: "#7C582B",
  },
  {
    id: "eunbin-jang",
    name: "Eunbin Jang",
    role: { en: "PR Officer", ko: "PR팀원" },
    committee: "pr",
    major: { en: "Accounting & Finance", ko: "회계 · 재무 (Accounting/Finance)" },
    classYear: "Class of 2028",
    initials: "EJ",
    accentColor: "#8A6738",
  },
  {
    id: "changyun-heo",
    name: "Changyun Heo",
    role: { en: "PR Officer", ko: "PR팀원" },
    committee: "pr",
    major: { en: "Electrical & Computer Engineering (ECE)", ko: "전기컴퓨터공학 (ECE)" },
    classYear: "Class of 2028",
    initials: "CH",
    accentColor: "#6B5230",
  },
  {
    id: "hazel-choi",
    name: "Hazel Choi",
    role: { en: "PR Officer", ko: "PR팀원" },
    committee: "pr",
    major: { en: "Pre-Sciences", ko: "Pre-Sciences" },
    classYear: "Class of 2028",
    initials: "HC",
    accentColor: "#947141",
  },
  {
    id: "doeun-kim",
    name: "Doeun Kim",
    role: { en: "PR Officer", ko: "PR팀원" },
    committee: "pr",
    major: { en: "Computer Science", ko: "컴퓨터공학 (CS)" },
    classYear: "Class of 2028",
    initials: "DK",
    accentColor: "#5E4524",
  },

  // ==========================================
  // PLANNING TEAM (기획팀)
  // ==========================================
  {
    id: "jimin-chae",
    name: "Jimin Chae",
    role: { en: "Planning Team Lead", ko: "기획팀장" },
    isLead: true,
    committee: "planning",
    major: { en: "Environmental Public Health", ko: "환경보건학 (Environmental Public Health)" },
    classYear: "Class of 2028",
    initials: "JC",
    accentColor: "#2C5E50",
  },
  {
    id: "hajin-lee",
    name: "Hajin Lee",
    role: { en: "Planning Officer", ko: "기획팀원" },
    committee: "planning",
    major: { en: "Biochemistry", ko: "생화학 (Biochemistry)" },
    classYear: "Class of 2030",
    initials: "HL",
    accentColor: "#367060",
  },
  {
    id: "jihoon-park",
    name: "Jihoon Park",
    role: { en: "Planning Officer", ko: "기획팀원" },
    committee: "planning",
    major: {
      en: "Applied & Computational Math Sciences (ACMS)",
      ko: "응용계산수학 (ACMS)",
    },
    classYear: "Class of 2030",
    initials: "JP",
    accentColor: "#244D42",
  },
  {
    id: "chaeyun-kim",
    name: "Chaeyun Kim",
    role: { en: "Planning Officer", ko: "기획팀원" },
    committee: "planning",
    major: { en: "Materials Science & Engineering", ko: "재료공학 (MSE)" },
    classYear: "Class of 2028",
    initials: "CK",
    accentColor: "#3C6E63",
  },
  {
    id: "seonho-lee",
    name: "Seonho Lee",
    role: { en: "Planning Officer", ko: "기획팀원" },
    committee: "planning",
    major: { en: "Engineering", ko: "공학 (Engineering)" },
    classYear: "Class of 2030",
    initials: "SL",
    accentColor: "#1F443A",
  },

  // ==========================================
  // DESIGN & MARKETING TEAM (디자인/마케팅팀)
  // ==========================================
  {
    id: "haize-ha",
    name: "Haize Ha",
    role: { en: "Design & Marketing Lead", ko: "디자인·마케팅팀장" },
    isLead: true,
    committee: "design",
    major: { en: "Human Centered Design & Engineering (HCDE)", ko: "인간중심설계공학 (HCDE)" },
    classYear: "Class of 2027",
    initials: "HH",
    accentColor: "#31497A",
  },
  {
    id: "lena-seong",
    name: "Lena Seong",
    role: { en: "Design & Marketing Officer", ko: "디자인·마케팅팀원" },
    committee: "design",
    major: { en: "Chemistry", ko: "화학 (Chemistry)" },
    classYear: "Class of 2028",
    initials: "LS",
    accentColor: "#405C94",
  },
  {
    id: "kevin-kuk",
    name: "Kevin Kuk",
    role: { en: "Design & Marketing Officer", ko: "디자인·마케팅팀원" },
    committee: "design",
    major: { en: "Computer Science", ko: "컴퓨터공학 (CS)" },
    classYear: "Class of 2027",
    initials: "KK",
    accentColor: "#253961",
  },
];

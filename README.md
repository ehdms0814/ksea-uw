# KSEA UW Official Website

**Korean-American Scientists and Engineers Association — University of Washington Young Generation Chapter**

워싱턴대학교(UW Seattle) 한인 STEM 동아리 **KSEA UW**의 공식 웹사이트 프로젝트입니다.  
Next.js (App Router), TypeScript, Tailwind CSS 기반으로 구축되었으며 **영어(기본) / 한국어 전환(EN / KR)**을 지원합니다.

## Pages & Features

- **Home (`/`)**: UW Rainier Vista 히어로 섹션, 핵심 지표, 3대 활동 축(커리어·학술·커뮤니티), 예정 행사 하이라이트(모달 RSVP), 갤러리 프리뷰, 가입 CTA
- **About & Officers (`/about`)**: 동아리 미션, KSEA 연혁 타임라인, 위원회별 필터링 가능한 임원진 디렉토리
- **Events (`/events`)**: 예정/지난 행사 필터, 카테고리 필터, 실시간 검색, 네이티브 `<dialog>` 행사 상세 및 간편 RSVP 모달
- **Gallery & Partners (`/gallery`)**: 카테고리 필터링 포토 아카이브, 키보드 탐색을 지원하는 네이티브 `<dialog>` 라이트박스, 파트너/후원사 안내
- **Join Us (`/join`)**: UW 챕터 무료 멤버십 vs KSEA 본부 YG 정회원 비교, 접근성 기반 멤버 가입 신청 폼, FAQ 아코디언

## Easy Content Editing (동아리 임원진용 콘텐츠 수정 가이드)

별도의 DB 없이 `src/data/` 폴더의 파일만 수정하면 사이트 전체(영어/한국어)에 즉시 반영됩니다.

| 파일 | 수정 가능한 내용 |
| --- | --- |
| `src/data/site.ts` | 동아리 소개, 연락처 이메일, SNS 링크(Instagram/LinkedIn/Discord), 핵심 수치, 연혁, FAQ |
| `src/data/officers.ts` | 2026–2027 임원진 명단, 직책, 전공, 소개, LinkedIn/이메일 |
| `src/data/events.ts` | 26–27 분기별(Autumn/Winter/Spring) 행사 로드맵, 날짜(`shortDate`), 연사 정보, 주요 행사(`featured`) 여부 (사진 없이 텍스트만으로 간편 수정 가능) |
| `src/data/gallery.ts` | 활동 사진 목록(`public/images/`에 이미지 추가 후 경로 지정), 후원사 및 협력 기관 |

## Getting Started

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## Production Build

```bash
npm run build
npm run start
```

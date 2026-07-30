// 라이브 사이트맵(0.5단계 검증)에서 확인된 8개 카테고리 + "일본 생활"의 하위
// 카테고리 "요리 레시피"를 별도 목록 페이지로 취급한다 (원본 Tistory도 두 URL을
// 별도 사이트맵 엔트리로 뒀음).
export const CATEGORY_SLUGS: Record<string, string> = {
  '일본 생활': 'japan-life',
  '일본 생활/요리 레시피': 'recipe',
  '위시리스트': 'wishlist',
  '한국 생활정보': 'korea-life',
  '한국 뉴스-이슈': 'korea-news',
  '해외토픽': 'world-topic',
  '드라마-영화 리뷰': 'movie-review',
  '책-작가 소개': 'book',
  '유튜버가 되어보자 (A~Z)': 'youtuber',
};

export const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([name, slug]) => [slug, name])
);

export function categorySlug(category: string): string | null {
  return CATEGORY_SLUGS[category] ?? null;
}

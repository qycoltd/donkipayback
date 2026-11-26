/**
 * 네이버 검색광고 전환 추적(WCS) 공통키.
 *
 * wcs_add["wa"]에 넣는 공개 사이트 식별자입니다. 비밀값이 아니라서 저장소에 둡니다.
 * 비어 있으면 wcslog.js를 불러오지 않고, 페이지뷰와 버튼 전환도 보내지 않습니다.
 *
 * 값이 있으면 모든 페이지에서 다음을 합니다.
 * 1. https://wcs.naver.net/wcslog.js 를 한 번 로드
 * 2. wcs_add["wa"] = 이 값, wcs.inflow("donkipayback.com"), wcs_do()
 *    (SPA 경로가 바뀔 때도 페이지뷰를 다시 보냄)
 * 3. 카카오 채널 추가 링크(KAKAO_CHANNEL_ADD_URL) 클릭 시
 *    wcs.trans({ type: "custom001" })
 *
 * 채팅 링크(pf.kakao.com/_VITdX/chat)는 채널 추가가 아니므로 전환으로 세지 않습니다.
 * 구 스크립트(wcs.cnv + wcs_do(_nasa))는 같은 클릭에 같이 호출하면 중복 집계되고,
 * trans 전환이 한 번이라도 나가면 같은 유형의 cnv 전환이 영구 필터링되므로 호출하지 않습니다.
 * https://naver.github.io/conversion-tracking/pages/01_script_guide_wcstrans/
 *
 * 설치 테스트 중에는 NAVER_WCS_CONVERSION_TYPE만 "test_custom001"로
 * 바꿨다가, 확인 후 다시 "custom001"로 되돌리세요.
 */
export const NAVER_WCS_WA = "s_55a7dfe387a8";

/** 광고 유입 쿠키를 www와 비www에 맞추는 최상위 도메인. */
export const NAVER_WCS_INFLOW_DOMAIN = "donkipayback.com";

/** 채널 추가 버튼. 보고서의 사용자정의 #1 (구 스크립트 cnv type 5). */
export const NAVER_WCS_CONVERSION_TYPE = "custom001";

/** 이 주소로 가는 클릭만 채널 추가 전환입니다. */
export const KAKAO_CHANNEL_ADD_URL = "https://pf.kakao.com/_VITdX/friend";

export function isNaverWcsConfigured(): boolean {
  return NAVER_WCS_WA.trim().length > 0;
}

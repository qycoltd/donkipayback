/**
 * 네이버 프리미엄 로그분석(전환 추적) 공통키.
 *
 * 도구 > 전환 추적 관리(구 프리미엄 로그분석) 또는 신청 후 기술담당 메일로
 * 받은 wcs_add["wa"] 값만 아래 빈 문자열에 붙여 넣으세요.
 *
 *   export const NAVER_WCS_WA = "발급받은_네이버공통키";
 *
 * 비어 있으면 wcslog.js를 불러오지 않고, 버튼 클릭도 전환을 보내지 않습니다.
 * 공통키가 오기 전에는 이 값을 그대로 두세요. 키를 만들어 넣지 마세요.
 *
 * 값이 있을 때만 /kakao 페이지가 다음을 합니다.
 * 1. https://wcs.naver.net/wcslog.js 로드
 * 2. wcs_add["wa"] = 이 값, wcs.inflow("donkipayback.com"), wcs_do()
 * 3. 「카카오 채널 추가하고 쿠폰 받기」 클릭 시
 *    wcs.trans({ type: "custom001" })
 * 다른 페이지는 이 스크립트를 넣지 않습니다.
 *
 * 설치 테스트 중에는 NAVER_WCS_CONVERSION_TYPE만 "test_custom001"로
 * 바꿨다가, 확인 후 다시 "custom001"로 되돌리세요.
 */
export const NAVER_WCS_WA = "";

/** 광고 유입 쿠키를 www와 비www에 맞추는 최상위 도메인. */
export const NAVER_WCS_INFLOW_DOMAIN = "donkipayback.com";

/** 채널 추가 버튼. 보고서의 사용자정의 #1. */
export const NAVER_WCS_CONVERSION_TYPE = "custom001";

export function isNaverWcsConfigured(): boolean {
  return NAVER_WCS_WA.trim().length > 0;
}

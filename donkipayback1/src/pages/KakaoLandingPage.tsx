import { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadNaverWcs, trackKakaoChannelAddConversion } from "../lib/naverWcs.ts";

const KAKAO_FRIEND_URL = "https://pf.kakao.com/_VITdX/friend";
const KAKAO_CHAT_URL = "https://pf.kakao.com/_VITdX/chat";

const PAGE_TITLE = "일본 쇼핑, 쿠폰 받고 페이백까지 | 돈키페이백";
const PAGE_DESCRIPTION =
  "드럭스토어 5% · 다이마루·킨테츠 2% 현금 페이백. 카카오 채널을 추가하고 쿠폰을 받은 뒤, 영수증을 보내 페이백을 신청하세요.";

const CTA_CLASS =
  "flex w-full items-center justify-center gap-2 rounded-2xl border border-[rgba(250,200,0,0.45)] bg-[#FEE500] px-3 py-4 text-base font-extrabold tracking-[-0.03em] text-[#191919] shadow-[0_8px_24px_rgba(0,0,0,0.08)] break-keep transition-transform active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919] [@media(hover:hover)]:hover:-translate-y-0.5";

const benefits: { store: string; benefit: "5" | "2" | "coupon" }[] = [
  { store: "고쿠민 · 선드럭\n코스모스 · 스기", benefit: "5" },
  { store: "에디온", benefit: "5" },
  { store: "다이마루 · 킨테츠", benefit: "2" },
  { store: "돈키호테 · 빅카메라", benefit: "coupon" },
];

const steps = [
  {
    title: "카카오 채널에서 쿠폰 받기",
    body: "위 버튼으로 카카오 채널을 추가하면, 드럭스토어 쿠폰(고쿠민·선드럭·코스모스·스기)을 받을 수 있어요.",
  },
  {
    title: "매장 계산대에서 쿠폰 바코드 보여주고 결제",
    body: "채널 쿠폰(바코드)을 직원에게 보여 준 뒤 결제해요. 할인이 안 되어도, 페이백을 받으려면 우리 쿠폰으로 스캔·결제해야 해요.",
  },
  {
    title: "영수증 사진을 채널로 보내면 확인 후 페이백",
    body: "페이백 대상 매장은 영수증 사진(매장·날짜·금액이 보이게)을 채널 채팅에 보내 주세요. 확인이 끝나면 영업일 기준 5일 안에 카카오페이로 입금돼요. 엔화 수령은 오사카 다이마루 3층 고객센터만 가능해요.",
  },
];

const notes = [
  "채널을 추가한 분께 드리는 쿠폰이에요.",
  "면세 구매에만 쓰는 쿠폰이 있어요.",
  "다른 쿠폰과 함께 쓸 수 없는 경우가 있어요.",
  "일부 브랜드·상품은 제외될 수 있어요. 쿠폰마다 조건이 다를 수 있어요.",
];

function KakaoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#191919" aria-hidden="true" className="shrink-0">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.8 5.3 4.6 6.7-.2.7-.7 2.5-.8 2.9 0 .2.1.3.2.2.3-.1 3.3-2.2 3.8-2.6.7.1 1.4.2 2.2.2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
    </svg>
  );
}

function PayoutExample() {
  return (
    <aside
      className="mb-3 rounded-xl border border-[#dbeafe] bg-[#eff6ff] px-3 py-2.5 shadow-[inset_3px_0_0_#1d4ed8]"
      data-testid="payout-example"
    >
      <p className="text-[11px] font-extrabold tracking-[-0.02em] text-[#1d4ed8]">실제 지급 사례</p>
      <p className="mt-1 text-[13px] font-bold leading-[1.45] tracking-[-0.03em] break-keep">
        오사카 선드럭 영수증 ¥15,177 → 페이백 5,840원 지급
      </p>
      <p className="mt-1 text-[11px] leading-[1.5] text-[#4b5563] break-keep">
        소비세를 뺀 금액의 5% · 영수증 사진만 보내면 확인 후 지급
      </p>
    </aside>
  );
}

function ChannelAddButton() {
  return (
    <a
      href={KAKAO_FRIEND_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackKakaoChannelAddConversion}
      data-testid="kakao-friend-cta"
      className={CTA_CLASS}
    >
      <KakaoMark />
      카카오 채널 추가하고 쿠폰 받기
    </a>
  );
}

function Benefit({ kind }: { kind: "5" | "2" | "coupon" }) {
  if (kind === "coupon") {
    return (
      <>
        <span className="inline-block rounded-full bg-[#f3f4f6] px-[7px] py-0.5 text-xs font-extrabold tracking-[-0.02em] text-[#4b5563]">
          쿠폰만
        </span>{" "}
        (페이백 없음)
      </>
    );
  }

  return (
    <>
      채널 쿠폰 +{" "}
      <span className="inline-block rounded-full bg-[#dbeafe] px-[7px] py-0.5 text-xs font-extrabold tracking-[-0.02em] text-[#1d4ed8]">
        {kind}% 페이백
      </span>
    </>
  );
}

export default function KakaoLandingPage() {
  useEffect(() => {
    const root = document.documentElement;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const restoreTitle = root.dataset.defaultTitle || document.title;
    const restoreDescription =
      root.dataset.defaultDescription ?? meta?.getAttribute("content") ?? "";

    document.title = PAGE_TITLE;
    meta?.setAttribute("content", PAGE_DESCRIPTION);
    void loadNaverWcs();

    return () => {
      document.title = restoreTitle;
      meta?.setAttribute("content", restoreDescription);
      delete root.dataset.defaultTitle;
      delete root.dataset.defaultDescription;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111827] antialiased sm:bg-[#e8edf3]">
      <div className="mx-auto min-h-screen w-full max-w-[480px] bg-white sm:shadow-[0_0_40px_rgba(15,23,42,0.06)]">
        <header className="flex items-center gap-2 border-b border-[#f3f4f6] px-5 pb-2.5 pt-[18px]">
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FEE500] text-[13px] font-extrabold text-[#191919]"
            aria-hidden="true"
          >
            돈
          </div>
          <div className="min-w-0 leading-tight">
            <div className="text-base font-extrabold tracking-[-0.03em]">돈키페이백</div>
            <p className="text-[11px] font-medium text-[#6b7280]">
              채널 추가하고, 쿠폰 받은 뒤 페이백 신청
            </p>
          </div>
        </header>

        <div className="px-5 pb-2 pt-7">
          <h1 className="mb-3 text-[28px] font-extrabold leading-[1.28] tracking-[-0.04em] break-keep">
            일본 쇼핑,
            <br />
            <span className="text-[#1d4ed8]">쿠폰 받고 페이백까지</span>
          </h1>
          <p className="text-[15px] font-medium leading-[1.55] text-[#374151] break-keep">
            드럭스토어 5% · 다이마루·킨테츠 2% 현금 페이백
            <span className="mt-1.5 block text-[13.5px] font-normal text-[#6b7280]">
              돈키호테·빅카메라는 쿠폰 할인만 적용돼요.
            </span>
          </p>
        </div>

        <div className="px-5 pb-2 pt-5">
          <PayoutExample />
          <ChannelAddButton />
          <p className="mt-2 text-center text-xs leading-relaxed text-[#6b7280] break-keep">
            카카오톡이 열리고, 채널을 추가하면 쿠폰을 받을 수 있어요
          </p>
          <p className="mt-1 text-center text-xs">
            <a
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] underline decoration-[#d1d5db] underline-offset-2"
            >
              이미 채널 친구라면 채팅으로 문의
            </a>
          </p>
        </div>

        <section className="px-5 pt-[22px]">
          <h2 className="mb-3 text-[17px] font-extrabold tracking-[-0.03em]">매장별 혜택</h2>
          <table className="w-full border-collapse text-[13.5px] break-keep">
            <thead>
              <tr>
                <th className="bg-[#f9fafb] px-2.5 py-[11px] text-left text-xs font-bold text-[#6b7280]">
                  매장
                </th>
                <th className="bg-[#f9fafb] px-2.5 py-[11px] text-left text-xs font-bold text-[#6b7280]">
                  혜택
                </th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((row) => (
                <tr key={row.store}>
                  <td className="w-[46%] border-b border-[#f3f4f6] px-2.5 py-[11px] align-top font-bold">
                    {row.store.split("\n").map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </td>
                  <td className="border-b border-[#f3f4f6] px-2.5 py-[11px] align-top">
                    <Benefit kind={row.benefit} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2.5 text-xs leading-[1.55] text-[#6b7280] break-keep">
            다이마루는 후쿠오카점 제외. 일부 매장·층·브랜드는 안 될 수 있어요. 루이비통·코치는 페이백 제외예요.
          </p>
        </section>

        <section className="px-5 pt-[22px]">
          <h2 className="mb-3 text-[17px] font-extrabold tracking-[-0.03em]">이용 방법</h2>
          <ol className="flex flex-col gap-2.5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-3 rounded-[14px] bg-[#f8fafc] p-3.5">
                <span
                  className="mt-px flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-[13px] font-extrabold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <strong className="mb-1 block text-[14.5px] tracking-[-0.03em]">{step.title}</strong>
                  <p className="text-[13px] leading-[1.55] text-[#4b5563] break-keep">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="px-5 pt-[22px]">
          <h2 className="mb-3 text-[17px] font-extrabold tracking-[-0.03em]">쿠폰 쓸 때 알아둘 점</h2>
          <ul>
            {notes.map((note) => (
              <li
                key={note}
                className="relative pb-2.5 pl-3.5 text-[13px] leading-[1.55] text-[#374151] break-keep before:absolute before:left-0 before:top-2 before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#9ca3af]"
              >
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-1 rounded-xl border border-[#fed7aa] bg-[#fff7ed] px-3.5 py-3 text-[13.5px] font-bold leading-normal text-[#9a3412] break-keep">
            결제 전 돈키페이백 고객센터에 확인해 주세요.
          </p>
        </section>

        <div className="px-5 pb-2 pt-[18px]">
          <ChannelAddButton />
        </div>

        <footer className="mt-7 bg-[#f3f4f6] px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[22px] text-[11px] leading-[1.6] text-[#6b7280] break-keep">
          <p className="mb-2 text-xs font-bold text-[#4b5563]">
            주식회사 큐와이 · 고객센터{" "}
            <a href="tel:1544-9687" className="text-[#4b5563]">
              1544-9687
            </a>{" "}
            /{" "}
            <a
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4b5563]"
            >
              카카오톡 채널
            </a>
          </p>
          <p>
            본 서비스는 일본 내 제휴 매장 구매를 바탕으로 캐시백을 제공해요. 당사는 상품의 판매 당사자가 아니며, 요율과 지급 일정은 달라질 수 있어요. 최신 조건은 카카오톡 채널에서 확인해 주세요.
          </p>
          <p className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
            <Link to="/" className="text-[#4b5563]">
              홈
            </Link>
            <Link to="/drugstore" className="text-[#4b5563]">
              드럭스토어 쿠폰
            </Link>
            <Link to="/department" className="text-[#4b5563]">
              백화점 쿠폰
            </Link>
            <Link to="/electronics" className="text-[#4b5563]">
              전자상가 쿠폰
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

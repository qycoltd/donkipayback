import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CouponTopNav from '../components/CouponTopNav';

export default function DonkiPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '돈키호테 쿠폰';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <CouponTopNav />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 mb-10">
          <img src="/image/donki/돈키쿠폰1.jpg" alt="돈키호테 안내" className="w-full rounded-2xl shadow-sm border border-gray-200/50" />
          <button onClick={() => navigate('/donki/coupon/2')} className="w-full transition-transform active:scale-[0.98] hover:-translate-y-0.5">
            <img src="/image/donki/돈키쿠폰2.jpg" alt="돈키호테 5% 할인 쿠폰" className="w-full rounded-2xl shadow-sm border border-gray-200/50" />
          </button>
          <button onClick={() => navigate('/donki/coupon/3')} className="w-full transition-transform active:scale-[0.98] hover:-translate-y-0.5">
            <img src="/image/donki/돈키쿠폰3.jpg" alt="돈키호테 7% 할인 쿠폰" className="w-full rounded-2xl shadow-sm border border-gray-200/50" />
          </button>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200 mb-6">
          <h3 className="text-lg font-extrabold mb-5 text-blue-600 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-sm">안내</span>
            [이용방법]
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-sm sm:text-base text-gray-700 break-keep leading-relaxed font-medium">
            <li>화면상의 쿠폰 배너를 탭하여 쿠폰 바코드 표시 화면으로 이동해주세요.</li>
            <li>쿠폰 화면을 계산 시, 직원에게 제시해 주시길 바랍니다.</li>
            <li className="leading-loose">
              쿠폰 화면의 STEP.1～ STEP.4의 조작 순서로 진행해 주세요.<br/>
              <span className="text-gray-500 ml-5 bg-gray-50 px-3 py-1.5 rounded-lg text-sm border border-gray-100 block mt-2">
                함께 스마트폰(휴대폰)의 조작을 부탁드리고 있습니다.
              </span>
            </li>
            <li>마지막 닫기 버튼을 눌러주세요.</li>
          </ol>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-extrabold mb-5 text-red-500 flex items-center gap-2">
            <span className="bg-red-100 text-red-500 px-2 py-0.5 rounded text-sm">필독</span>
            [주의사항]
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-gray-600 break-keep leading-relaxed">
            <li className="font-bold text-gray-900 text-base">· 본 쿠폰은 일정 금액 이상의 면세 구매 시, 1회에 한하여 유효합니다.</li>
            <li className="pl-3 text-gray-700">또한 이하의 상품은 할인 대상에서 제외되므로 할인 조건에 포함되지 않습니다. 양해 부탁드립니다.</li>
            <li className="pl-3 text-xs sm:text-sm text-red-500 font-medium">※상세 금액은 사용하시는 쿠폰 배너에서 직접 확인해주세요.</li>
            <li className="pt-2">・쿠폰은 반드시 결제 시 제시해 주시길 바랍니다.</li>
            <li>・결제 후, 쿠폰을 제시하는 경우에는 사용이 불가하오니 양해 부탁드립니다.</li>
            <li>・캡쳐(스크린샷) 이미지는 사용할 수 없습니다.</li>
            <li>・다른 할인이나 서비스, majica 카드와 함께 사용할 수 없습니다.</li>
            
            <li className="mt-6 pt-6 border-t border-gray-100 font-bold text-gray-900">※할인 제외 상품</li>
            <li className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-700 font-medium">
              술・담배・게임기 본체・비과세 상품(POSA 카드 등)・정가 판매 상품・단품 100,000엔(세금 불포함) 이상의 상품
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

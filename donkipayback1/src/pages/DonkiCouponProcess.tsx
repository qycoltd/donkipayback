import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, AlertTriangle, CheckCircle2, ChevronLeft, Info, Receipt } from 'lucide-react';
import FloatingKakaoButton from '../components/FloatingKakaoButton';

export default function DonkiCouponProcess() {
  const navigate = useNavigate();
  const EXTERNAL_DONKI_URL = "https://japanportal.donki-global.com/coupon/?ptcd=0136000004";

  useEffect(() => {
    document.title = '돈키호테 공식 쿠폰 발급 가이드';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg relative">
        {/* Header */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-100 px-4 py-4 flex items-center">
          <button onClick={() => navigate('/donki')} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="ml-2 font-bold text-lg">Don Quijote Coupon Guide</h1>
        </div>

        <main className="px-6 py-8">
          {/* Visual Alert */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full mb-6">
              <AlertTriangle size={40} className="animate-bounce" />
            </div>
            <h2 className="text-2xl font-black mb-4 tracking-tight text-gray-900 break-keep">
              잠깐! 지금 <span className="text-blue-600">계산대 앞</span>이신가요?
            </h2>
            <p className="text-gray-500 leading-relaxed break-keep font-medium text-sm sm:text-base">
              돈키호테 공식 쿠폰은 '일회용' 링크입니다.<br/>
              실수로 미리 발급받으면 실제 결제 시 사용이 어려울 수 있습니다.
            </p>
          </div>

          {/* Warning Content */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500 p-1.5 rounded-full">
                <Info size={16} className="text-white" />
              </div>
              <h3 className="font-extrabold text-red-600 text-base sm:text-lg">발급 전 필독 주의사항</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm sm:text-base leading-relaxed text-gray-700 break-keep">
                <span className="text-red-500 font-black">•</span>
                <span>이 쿠폰은 일회성으로, <strong className="text-red-600">쿠키를 삭제하지 않는 한 재발급이 불가능</strong>할 수 있습니다.</span>
              </li>
              <li className="flex gap-3 text-sm sm:text-base leading-relaxed text-gray-700 break-keep">
                <span className="text-red-500 font-black">•</span>
                <span>만약 실수로 쿠폰을 미리 열었다면, 브라우저의 <strong className="text-gray-900 underline underline-offset-4">인터넷 사용 기록 및 쿠키를 삭제</strong>한 후 다시 시도해 주세요.</span>
              </li>
            </ul>
          </div>

          {/* How to use */}
          <div className="mb-10">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1 mb-4 flex items-center gap-2">
              <Receipt size={14} />
              어떻게 사용하나요?
            </h4>
            <div className="space-y-3">
              {[
                "계산대에서 본인 차례가 되면",
                "아래 '공식 쿠폰 열기' 버튼 클릭",
                "직원에게 직접 화면을 제시",
                "직원이 확인 후 할인 적용!"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 group transition-all hover:bg-blue-50 hover:border-blue-100">
                  <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 group-hover:border-blue-200 group-hover:bg-blue-100 transition-colors">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-blue-700 transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sticky bottom-0 bg-white pt-4">
            <a
              href={EXTERNAL_DONKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FEE500] text-[#191919] font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(254,229,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              돈키호테 공식 쿠폰 열기
              <ExternalLink size={20} />
            </a>
            <button 
              onClick={() => navigate('/donki')}
              className="w-full bg-white text-gray-400 font-bold py-4 hover:bg-gray-50 transition-colors rounded-xl text-sm"
            >
              목록으로 돌아가기
            </button>
          </div>

          <p className="mt-10 text-center text-[10px] sm:text-[11px] text-gray-400 leading-relaxed font-medium pb-10 break-keep">
            ※ 주의: 화면을 미리 캡처한 이미지(스크린샷)로는 할인을 받으실 수 없습니다. 반드시 실시간 웹사이트 화면을 제시해 주세요.
          </p>
        </main>

        <FloatingKakaoButton />
      </div>
    </div>
  );
}

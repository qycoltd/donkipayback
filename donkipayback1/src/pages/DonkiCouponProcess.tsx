import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DonkiCouponProcess() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = '돈키호테 쿠폰 사용';
    window.scrollTo(0, 0);
  }, [step]);

  const bannerSrc = `/image/donki/돈키쿠폰${id}.jpg`;
  const barcodeSrc = `/image/donki/돈키쿠폰${id}바코드.png`;

  const handleNext = () => {
    setShowConfirm(true);
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    setStep(2);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      <div className="max-w-md mx-auto shadow-[0_0_40px_rgba(0,0,0,0.05)] min-h-screen bg-white">
        {/* Banner */}
        <img src={bannerSrc} alt="쿠폰 배너" className="w-full h-auto block" />

        {step === 1 && (
          <div className="px-5 py-8 text-center animate-in fade-in duration-300">
            <p className="text-base sm:text-lg font-bold text-red-600 mb-1">1～4단계까지직원분과 함께 해주세요.</p>
            <p className="text-xs sm:text-sm text-gray-600 mb-5">※조작 도중 중단 시, 쿠폰 사용이 불가할 수도 있습니다.</p>
            
            <p className="text-sm sm:text-base font-bold text-red-600 mb-1">STEP.1～4までを従業員と一緒に操作して下さい。</p>
            <p className="text-[11px] sm:text-xs text-gray-600 mb-8">※操作が途中の場合、クーポンの使用が出来ない場合がございます。</p>

            <div className="bg-gray-100 py-3 px-6 rounded-xl mb-8 inline-block border border-gray-200">
              <p className="font-bold text-lg tracking-tight">이 화면을 직원에게 보여주세요.</p>
            </div>

            <h2 className="text-3xl font-black text-blue-600 mb-2">STEP.1</h2>
            <p className="font-bold text-lg mb-1">바코드를 스캔합니다.</p>
            <h2 className="text-xl font-black text-blue-600 mt-5 mb-1">STEP.1</h2>
            <p className="font-bold text-sm mb-6">↓↓↓バーコードをスキャンします↓↓↓</p>

            <div 
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-10 inline-block cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setExpandedImage("/image/donki/돈키바코드1.jpg")}
            >
              <img src="/image/donki/돈키바코드1.jpg" alt="STEP 1 바코드" className="w-full max-w-[260px] mx-auto" />
              <p className="text-xs text-gray-400 mt-3 font-medium">👆 터치하여 바코드 확대</p>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleNext}
                className="w-full bg-red-500 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-red-600 active:scale-[0.98] transition-all"
              >
                STEP.2<br/>다음으로 / 次へ
              </button>
              <button 
                onClick={() => navigate('/donki')}
                className="w-full bg-gray-100 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all"
              >
                이전으로 돌아가기
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="px-5 py-8 text-center animate-in slide-in-from-right-4 fade-in duration-300">
            <div className="bg-gray-100 py-3 px-6 rounded-xl mb-8 inline-block border border-gray-200">
              <p className="font-bold text-lg tracking-tight">이 화면을 직원에게 보여주세요.</p>
            </div>

            <h2 className="text-3xl font-black text-blue-600 mb-6">STEP.3</h2>
            
            <div className="text-left bg-yellow-50 border border-yellow-200 p-5 rounded-xl mb-8 shadow-sm">
              <p className="font-bold text-sm sm:text-base text-red-600 mb-2 leading-relaxed">①必ず「小計」を押下してから以下の「バーコード」をスキャンして下さい。</p>
              <p className="text-xs sm:text-sm text-gray-700 mb-5 leading-relaxed">※小計前にスキャンすると単品値引きになるのでご注意下さい。</p>
              <p className="font-bold text-sm sm:text-base text-red-600 leading-relaxed">②必ず使用済み確認をしてください。</p>
            </div>

            <div 
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-10 inline-block cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setExpandedImage(barcodeSrc)}
            >
              <img src={barcodeSrc} alt="쿠폰 바코드" className="w-full max-w-[260px] mx-auto" />
              <p className="text-xs text-gray-400 mt-3 font-medium">👆 터치하여 바코드 확대</p>
            </div>

            <button 
              onClick={() => navigate('/donki')}
              className="w-full bg-gray-800 text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-gray-900 active:scale-[0.98] transition-all"
            >
              STEP.4 닫기 (원래 화면으로)
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 sm:p-8 text-center">
              <p className="font-extrabold text-lg sm:text-xl mb-2 text-gray-900 break-keep">직원에게 STEP.1 바코드를 제시했습니까?</p>
              <p className="font-bold text-sm sm:text-base mb-6 text-gray-700">レジスタッフにSTEP.1のバーコードを提示しましたか？</p>
              
              <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-xs sm:text-sm mb-8 text-left leading-relaxed">
                <p className="mb-2 font-medium">※STEP.1의 바코드를 스캔하지 않을 경우, 할인을 받을 수 없습니다.</p>
                <p className="font-medium">※STEP.1のバーコードをスキャンしていない場合、割引出来ません。</p>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleConfirmNo}
                  className="flex-1 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all"
                >
                  아니오
                </button>
                <button 
                  onClick={handleConfirmYes}
                  className="flex-1 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md"
                >
                  네
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 cursor-pointer animate-in fade-in duration-200 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-full max-w-2xl flex flex-col items-center">
            <img 
              src={expandedImage} 
              alt="확대된 바코드" 
              className="w-full h-auto max-h-[85vh] object-contain bg-white p-4 rounded-xl animate-in zoom-in-95 duration-200" 
            />
            <p className="text-white/70 text-sm mt-6 font-medium">아무 곳이나 터치하여 닫기</p>
          </div>
        </div>
      )}
    </div>
  );
}

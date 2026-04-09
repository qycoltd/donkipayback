import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CouponTopNav from '../components/CouponTopNav';

export default function DonkiPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '돈키호테 쿠폰';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <CouponTopNav />
      <main className="max-w-2xl mx-auto px-5 py-16 text-center">
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed break-keep mb-10">
          죄송합니다 현재 계약문제로 아직 안됐습니다. 최대한 빨리 정상 서비스 되도록 노력하겠습니다.
        </p>
        <button
          onClick={() => navigate('/drugstore')}
          className="px-6 py-3 bg-black text-white font-bold rounded-lg active:scale-95 transition-transform"
        >
          다른 드럭스토어 쿠폰 보러가기
        </button>
      </main>
    </div>
  );
}

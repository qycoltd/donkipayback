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
          죄송합니다. 현재 계약 관련 문제로 서비스가 지연되고 있습니다. 불편을 드린 점 양해 부탁드리며, 최대한 빠르게 정상화될 수 있도록 최선을 다하겠습니다.
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

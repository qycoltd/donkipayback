import { useEffect } from 'react';
import CouponTopNav from '../components/CouponTopNav';
import CouponGrid from '../components/CouponGrid';
import FloatingKakaoButton from '../components/FloatingKakaoButton';
import { electronicsCoupons } from '../data/couponData';

export default function ElectronicsPage() {
  useEffect(() => {
    document.title = '전자상가 쿠폰';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      <CouponTopNav />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">전자상가 쿠폰</h1>
        <CouponGrid brands={electronicsCoupons} />
      </main>
      <FloatingKakaoButton />
    </div>
  );
}

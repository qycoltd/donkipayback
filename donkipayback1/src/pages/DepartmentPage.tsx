import { useEffect } from 'react';
import CouponTopNav from '../components/CouponTopNav';
import CouponGrid from '../components/CouponGrid';
import FloatingKakaoButton from '../components/FloatingKakaoButton';
import { departmentCoupons } from '../data/couponData';

export default function DepartmentPage() {
  useEffect(() => {
    document.title = '백화점 쿠폰';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
      <CouponTopNav />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">백화점 쿠폰</h1>
        <CouponGrid brands={departmentCoupons} />
      </main>
      <FloatingKakaoButton />
    </div>
  );
}

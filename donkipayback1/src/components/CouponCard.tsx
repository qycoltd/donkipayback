import { useState } from 'react';
import { CouponBrand } from '../data/couponData';

interface Props {
  brand: CouponBrand;
}

export default function CouponCard({ brand }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 focus:outline-none active:bg-gray-50 transition-colors"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
          <img 
            src={brand.squareImage} 
            alt={brand.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="ml-4 flex-1 text-left">
          <h3 className="text-lg font-bold text-gray-900">{brand.name} 쿠폰</h3>
          <p className="text-sm text-gray-500 mt-1">{isOpen ? '접기 ▲' : '쿠폰 보기 ▼'}</p>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 flex flex-col items-center">
          <button 
            onClick={() => setIsOpen(false)}
            className="mb-4 px-5 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-sm active:bg-gray-100 transition-colors"
          >
            쿠폰 닫기 ▲
          </button>
          <div className="w-full max-w-md flex flex-col gap-2">
            {brand.couponImages.map((imgSrc, index) => (
              <img 
                key={index}
                src={imgSrc} 
                alt={`${brand.name} 쿠폰 상세 ${index + 1}`} 
                className="w-full h-auto rounded-lg shadow-sm"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

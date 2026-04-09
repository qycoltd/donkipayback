import { CouponBrand } from '../data/couponData';
import CouponCard from './CouponCard';

interface Props {
  brands: CouponBrand[];
}

export default function CouponGrid({ brands }: Props) {
  return (
    <div className="flex flex-col">
      {brands.map((brand) => (
        <CouponCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}

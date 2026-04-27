export interface CouponBrand {
  id: string;
  name: string;
  squareImage: string;
  couponImages: string[];
}

export const drugstoreCoupons: CouponBrand[] = [
  {
    id: "kokumin",
    name: "고쿠민",
    squareImage: "/image/drugstore/고쿠민-square.jpg",
    couponImages: ["/image/drugstore/고쿠민.jpg"]
  },
  {
    id: "sundrug",
    name: "선드럭",
    squareImage: "/image/drugstore/선드럭-square.jpg",
    couponImages: ["/image/drugstore/선드럭.jpg"]
  },
  {
    id: "cosmos",
    name: "코스모스",
    squareImage: "/image/drugstore/코스모스-square.jpg",
    couponImages: ["/image/drugstore/코스모스.jpg"]
  },
  {
    id: "sugi",
    name: "스기",
    squareImage: "/image/drugstore/스기-square.jpg",
    couponImages: ["/image/drugstore/스기.jpg", "/image/drugstore/스기2.jpg"]
  }
];

export const departmentCoupons: CouponBrand[] = [
  {
    id: "daimaru",
    name: "다이마루 백화점",
    squareImage: "/image/department/다이마루-square.jpg",
    couponImages: [
      "/image/department/다이마루1.jpg",
      "/image/department/다이마루2.jpg",
      "/image/department/다이마루3.jpg"
    ]
  },
  {
    id: "kintetsu",
    name: "킨테츠 백화점",
    squareImage: "/image/department/킨테츠-square.jpg",
    couponImages: ["/image/department/킨테츠.jpg"]
  }
];

export const electronicsCoupons: CouponBrand[] = [
  {
    id: "edion",
    name: "에디온 전자상가",
    squareImage: "/image/electronics/에디온-square.jpg",
    couponImages: ["/image/electronics/에디온.jpg"]
  },
  {
    id: "biccamera",
    name: "빅카메라",
    squareImage: "/image/electronics/빅카메라-square.jpg",
    couponImages: ["/image/electronics/빅카메라.jpg"]
  }
];

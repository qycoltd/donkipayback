import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Ticket, 
  ShoppingBag, 
  Send, 
  Building2, 
  Pill, 
  MonitorSmartphone, 
  ShieldCheck, 
  Clock, 
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Plane,
  Cloud,
  Camera,
  Map,
  UserX
} from 'lucide-react';

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_VITdX/chat";

function KakaoCTA({ className = "", size = "default", dominant = false }: { className?: string, size?: "default" | "large", dominant?: boolean }) {
  const baseStyle = "inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] font-bold transition-all active:scale-[0.98]";
  const sizeStyle = size === "large" 
    ? "px-7 py-4 sm:px-10 sm:py-5 rounded-2xl sm:rounded-[1.25rem] text-base sm:text-lg" 
    : "px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base";
  
  // Dominant style adds a stronger shadow, slight hover lift, and a subtle pulse effect to draw the eye
  const dominantStyle = dominant 
    ? "shadow-[0_8px_30px_rgba(254,229,0,0.3)] hover:shadow-[0_12px_40px_rgba(254,229,0,0.4)] hover:-translate-y-1 border border-yellow-400/50" 
    : "shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 border border-yellow-400/20";
  
  return (
    <div className={`relative inline-block ${className}`}>
      {dominant && (
        <div className="absolute inset-0 bg-[#FEE500] rounded-2xl sm:rounded-[1.25rem] animate-ping opacity-20"></div>
      )}
      <a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full ${baseStyle} ${sizeStyle} ${dominantStyle}`}
      >
        <MessageCircle className={size === "large" ? "w-6 h-6 sm:w-7 sm:h-7" : "w-5 h-5"} fill="#191919" />
        카카오톡 채널 이동하기
      </a>
    </div>
  );
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const FloatingIcon = ({ children, delay, duration, x, y, yRange = 20 }: any) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y }}
    animate={{ y: [0, -yRange, 0], rotate: [-5, 5, -5] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

const SakuraPetal = ({ delay, duration, left, size = 16 }: { delay: number, duration: number, left: string, size?: number }) => (
  <motion.div
    className="absolute top-[-10%]"
    style={{ left }}
    animate={{ 
      y: ['-10vh', '110vh'], 
      x: [0, 50, -50, 0],
      rotate: [0, 180, 360] 
    }}
    transition={{ 
      y: { duration, repeat: Infinity, ease: "linear", delay },
      x: { duration: duration * 0.5, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 0.8, repeat: Infinity, ease: "linear", delay }
    }}
  >
    <svg width={size} height={size} viewBox="0 0 30 30" fill="#FBCFE8" className="opacity-70 drop-shadow-sm">
      <path d="M15,2 C20,-2 28,4 25,12 C22,20 15,28 15,28 C15,28 8,20 5,12 C2,4 10,-2 15,2 Z" />
    </svg>
  </motion.div>
);

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Wave Landscape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 flex justify-center items-end h-[120px] sm:h-[160px]">
        {/* Animated Waves */}
        {/* Wave 1 (Back) */}
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[60px] sm:h-[90px]">
            <path d="M0,50 C150,90 450,10 600,50 C750,90 1050,10 1200,50 L1200,120 L0,120 Z" fill="#FBCFE8" opacity="0.4" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[60px] sm:h-[90px]">
            <path d="M0,50 C150,90 450,10 600,50 C750,90 1050,10 1200,50 L1200,120 L0,120 Z" fill="#FBCFE8" opacity="0.4" />
          </svg>
        </motion.div>

        {/* Wave 2 (Middle) */}
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] flex"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[50px] sm:h-[70px]">
            <path d="M0,65 C150,25 450,105 600,65 C750,25 1050,105 1200,65 L1200,120 L0,120 Z" fill="#FCE7F3" opacity="0.8" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[50px] sm:h-[70px]">
            <path d="M0,65 C150,25 450,105 600,65 C750,25 1050,105 1200,65 L1200,120 L0,120 Z" fill="#FCE7F3" opacity="0.8" />
          </svg>
        </motion.div>

        {/* Wave 3 (Front - matches bg-gray-50) */}
        <motion.div 
          className="absolute bottom-0 left-0 w-[200%] flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[40px] sm:h-[50px]">
            <path d="M0,80 C150,110 450,50 600,80 C750,110 1050,50 1200,80 L1200,120 L0,120 Z" fill="#F9FAFB" />
          </svg>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-1/2 h-[40px] sm:h-[50px]">
            <path d="M0,80 C150,110 450,50 600,80 C750,110 1050,50 1200,80 L1200,120 L0,120 Z" fill="#F9FAFB" />
          </svg>
        </motion.div>
      </div>

      {/* Airplane */}
      <motion.div
        className="absolute text-blue-300/40"
        animate={{ 
          x: ['-10vw', '110vw'], 
          y: ['30vh', '10vh'] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ top: '10%', left: 0 }}
      >
        <Plane size={40} className="rotate-[15deg]" />
      </motion.div>

      {/* Clouds */}
      <motion.div
        className="absolute text-white/80 drop-shadow-sm"
        animate={{ x: ['-10vw', '110vw'] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ top: '20%', left: 0 }}
      >
        <Cloud size={60} />
      </motion.div>
      <motion.div
        className="absolute text-white/60 drop-shadow-sm"
        animate={{ x: ['110vw', '-10vw'] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 0 }}
        style={{ top: '50%', right: 0 }}
      >
        <Cloud size={80} />
      </motion.div>

      {/* Floating Icons */}
      <FloatingIcon x="15%" y="25%" delay={0} duration={4}>
        <ShoppingBag size={28} className="text-pink-300/50" />
      </FloatingIcon>
      <FloatingIcon x="82%" y="30%" delay={1} duration={5} yRange={25}>
        <Camera size={24} className="text-yellow-400/50" />
      </FloatingIcon>
      <FloatingIcon x="22%" y="65%" delay={2} duration={4.5} yRange={15}>
        <Ticket size={20} className="text-green-400/50" />
      </FloatingIcon>
      <FloatingIcon x="78%" y="60%" delay={0.5} duration={5.5} yRange={20}>
        <Map size={26} className="text-blue-400/50" />
      </FloatingIcon>

      {/* Sakura Petals */}
      <SakuraPetal left="15%" delay={0} duration={12} size={14} />
      <SakuraPetal left="35%" delay={5} duration={15} size={18} />
      <SakuraPetal left="55%" delay={2} duration={11} size={12} />
      <SakuraPetal left="75%" delay={7} duration={14} size={16} />
      <SakuraPetal left="90%" delay={1} duration={13} size={15} />
    </div>
  );
};

const partnerCategories = [
  {
    id: 'dept',
    title: '백화점',
    icon: Building2,
    desc: '유명 브랜드 및 명품 쇼핑',
    shortDesc: '명품 쇼핑',
    maxRate: '최대 17%',
    stores: [
      { name: '다이마루 백화점', discount: '면세 10% + 5% 할인', payback: '2% 페이백' },
      { name: '킨테츠 백화점', discount: '면세 10% + 5% 할인', payback: '2% 페이백' },
    ]
  },
  {
    id: 'drug',
    title: '드럭스토어',
    icon: Pill,
    desc: '의약품, 화장품, 생활용품',
    shortDesc: '의약품, 화장품',
    maxRate: '최대 24%',
    stores: [
      { name: '돈키호테', discount: '면세 10% + 7% 할인', payback: 'X' },
      { name: '고쿠민', discount: '면세 10% + 8% 할인', payback: '5% 페이백' },
      { name: '선드럭', discount: '면세 10% + 7% 할인', payback: '5% 페이백' },
      { name: '코스모스', discount: '면세 10% + 9% 할인', payback: '5% 페이백' },
      { name: '스기', discount: '면세 10% + 8% 할인', payback: '5% 페이백' },
    ]
  },
  {
    id: 'elec',
    title: '전자기기',
    icon: MonitorSmartphone,
    desc: '가전제품 및 복합 쇼핑몰',
    shortDesc: '가전, 쇼핑몰',
    maxRate: '최대 22%',
    stores: [
      { name: '에디온 전자상가', discount: '면세 10% + 7% 할인', payback: '5% 페이백' },
      { name: '빅카메라', discount: '면세 10% + 7% 할인', payback: 'X' },
    ]
  }
];

export default function App() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-yellow-200 pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-pink-100/60 shadow-[0_4px_20px_-10px_rgba(244,114,182,0.15)]">
        <div className="max-w-5xl mx-auto px-5 h-14 sm:h-16 flex items-center justify-center sm:justify-start">
          <div className="flex items-center">
            <img src="/favicon.png" alt="로고" className="w-6 h-6 sm:w-8 sm:h-8 mr-2 object-contain" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-pink-500 to-rose-400 text-transparent bg-clip-text">
              돈키호테 페이백 앤 쿠폰
            </span>
          </div>
        </div>
      </header>

      <main className="pt-14 sm:pt-16">
        {/* 1. Hero Section */}
        <section className="relative bg-white px-5 py-16 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50/80 via-white to-white -z-10"></div>
          <HeroBackground />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-50/80 text-pink-600 font-bold text-xs sm:text-sm mb-6 sm:mb-8 border border-pink-100/50 backdrop-blur-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
                일본 여행객 전용 쇼핑 혜택
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-8 break-keep text-gray-900">
                일본에서 쓴 쇼핑 금액,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">영수증만 찍으면 현금으로</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-500 mb-10 sm:mb-12 leading-relaxed break-keep max-w-xl mx-auto font-medium">
                제휴 매장에서 할인 받고, 종이 영수증은 카카오톡으로 보내세요. 영업일 기준 5일 내 카카오페이로 입금해 드립니다.
              </p>
              
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <KakaoCTA size="large" dominant className="w-full sm:w-auto" />
                
                {/* Trust Points - Ultra scannable */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-8 mt-2 text-xs sm:text-sm font-bold text-gray-500">
                  <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-gray-100/50 shadow-sm">
                    <UserX className="w-4 h-4 text-gray-400" />
                    개인정보 수집 X
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-gray-100/50 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-gray-400" />
                    안전한 검증
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50/80 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-gray-100/50 shadow-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    5일 내 입금
                  </div>
                </div>

                <div className="mt-2 w-full sm:w-auto">
                  <Link 
                    to="/drugstore"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 sm:px-10 sm:py-5 rounded-2xl sm:rounded-[1.25rem] text-base sm:text-lg font-bold bg-blue-50/80 text-blue-600 border border-blue-200/60 shadow-sm hover:bg-blue-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-[0.98]"
                  >
                    <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />
                    할인쿠폰 받기
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. How it works (Under 5 seconds scan) */}
        <section className="px-5 py-16 sm:py-28 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight">단 3단계, 참 쉽죠?</h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium">복잡한 절차 없이 여행의 즐거움만 남기세요.</p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 flex flex-row md:flex-col items-center md:items-start text-left gap-5 sm:gap-6 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="text-blue-600 font-bold text-sm mb-1.5 tracking-wide">STEP 1</div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">할인 코드 발급</h3>
                  <p className="text-sm sm:text-base text-gray-500 break-keep leading-relaxed">
                    카카오톡에서 제휴 매장 할인 코드를 미리 확인하세요.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="hidden md:flex items-center justify-center text-gray-200">
              <ChevronRight className="w-10 h-10" />
            </div>

            <FadeIn delay={0.2}>
              <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 flex flex-row md:flex-col items-center md:items-start text-left gap-5 sm:gap-6 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="text-blue-600 font-bold text-sm mb-1.5 tracking-wide">STEP 2</div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">현지 쇼핑</h3>
                  <p className="text-sm sm:text-base text-gray-500 break-keep leading-relaxed">
                    할인 코드를 제시하여 쇼핑하고, 종이 영수증을 챙겨주세요.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="hidden md:flex items-center justify-center text-gray-200">
              <ChevronRight className="w-10 h-10" />
            </div>

            <FadeIn delay={0.3}>
              <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex-1 flex flex-row md:flex-col items-center md:items-start text-left gap-5 sm:gap-6 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Send className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="text-blue-600 font-bold text-sm mb-1.5 tracking-wide">STEP 3</div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2">영수증 전송</h3>
                  <p className="text-sm sm:text-base text-gray-500 break-keep leading-relaxed">
                    영수증 사진을 카카오톡으로 보내면 5일 내 입금됩니다.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Rates / partner store section (Clear & Trustworthy) */}
        <section className="bg-[#111827] text-white px-5 py-16 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#111827] to-[#111827] -z-10"></div>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight">어디서 얼마나 돌려받을 수 있나요?</h2>
                <p className="text-base sm:text-lg text-gray-400 font-medium">다양한 제휴 매장에서 쇼핑하고 확실한 혜택을 누리세요.</p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-12 items-start">
              {partnerCategories.map((category, index) => {
                const isExpanded = expandedCategory === category.id;
                const Icon = category.icon;
                return (
                  <React.Fragment key={category.id}>
                    <FadeIn delay={0.1 * (index + 1)}>
                      <div 
                        className={`bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 sm:p-8 rounded-[2rem] flex flex-col transition-all cursor-pointer hover:bg-white/10 ${isExpanded ? 'bg-white/10 ring-1 ring-blue-500/50' : ''}`}
                        onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                      >
                      <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 w-full">
                        <div className="flex items-center gap-3 sm:gap-4 sm:mb-6 flex-1 sm:w-full min-w-0">
                          <div className="bg-blue-500/20 p-2.5 sm:p-3 rounded-2xl shrink-0">
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="text-lg sm:text-2xl font-bold whitespace-nowrap">{category.title}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm sm:hidden mt-0.5 whitespace-nowrap truncate">{category.shortDesc}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-base mb-6 flex-grow hidden sm:block w-full">{category.desc}</p>
                        
                        <div className="sm:pt-6 sm:border-t sm:border-white/10 shrink-0 sm:w-full text-right sm:text-left flex items-center sm:items-end justify-end sm:justify-between gap-3 sm:gap-0">
                          <div className="text-right sm:text-left">
                            <div className="text-xs sm:text-sm text-gray-400 font-bold mb-0.5 sm:mb-1">예상 총 혜택</div>
                            <div className="text-xl sm:text-4xl font-extrabold text-blue-400 whitespace-nowrap">{category.maxRate}</div>
                          </div>
                          <div className="shrink-0 sm:pb-1">
                            <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden w-full"
                          >
                            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3 sm:gap-4">
                              {category.stores.map((store, i) => (
                                <div key={i} className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl p-4 sm:p-5 flex flex-col gap-3 border border-white/5 shadow-sm">
                                  <div className="font-bold text-base sm:text-lg text-white flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400"></div>
                                    {store.name}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-2 pl-4">
                                    <div className="text-xs sm:text-sm font-bold text-pink-300 bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 rounded-lg">
                                      {store.discount}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border ${store.payback === 'X' ? 'text-gray-400 bg-gray-500/10 border-gray-500/20' : 'text-blue-300 bg-blue-500/10 border-blue-500/20'}`}>
                                      {store.payback === 'X' ? '페이백 제외' : `+ ${store.payback}`}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                </React.Fragment>
                );
              })}
            </div>

            <FadeIn delay={0.4}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center">
                <p className="text-gray-400 text-sm break-keep font-medium">
                  * 매장별 정책 및 구매 제품 등에 따라 실제 할인 및 캐시백 적립률이 달라질 수 있습니다.<br className="hidden sm:block" />
                  정확한 제휴 매장 목록과 적립률은 카카오톡 채널에서 즉시 확인 가능합니다.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Trust / FAQ section (Tight & Clean) */}
        <section className="px-5 py-16 sm:py-28 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight">안심하고 이용하세요</h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium">가장 자주 묻는 질문들을 모았습니다.</p>
            </div>
          </FadeIn>
          
          <div className="space-y-4 sm:space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                <h3 className="text-base sm:text-xl font-bold mb-3 flex items-center gap-2.5 text-gray-900">
                  <span className="text-blue-600 font-extrabold">Q.</span> 캐시백 지급을 위해 어떤 정보가 필요한가요?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep pl-7">
                  별도의 연락처나 계좌번호, 본인인증도 필요 없습니다. <strong className="text-gray-900">카카오톡으로 영수증 인증</strong>만 완료해주시면, 해당 계정의 <strong className="text-gray-900">카카오페이</strong>로 즉시 입금해 드립니다.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                <h3 className="text-base sm:text-xl font-bold mb-3 flex items-center gap-2.5 text-gray-900">
                  <span className="text-blue-600 font-extrabold">Q.</span> 영수증 검증은 왜 필요한가요?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep pl-7">
                  제휴 매장에서의 실제 구매 내역과 할인 코드 사용 여부를 정확히 확인하고, 올바른 캐시백 금액을 산정하여 지급하기 위한 투명한 절차입니다.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                <h3 className="text-base sm:text-xl font-bold mb-3 flex items-center gap-2.5 text-gray-900">
                  <span className="text-blue-600 font-extrabold">Q.</span> 할인이 되지 않더라도 바코드를 스캔해야 하나요?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep pl-7">
                  <strong className="text-gray-900">맞습니다.</strong> 페이백을 받기 위해서는 꼭 채널에서 확인할 수 있는 바코드를 스캔하셔야 하며, 그래야 할인을 받지 않더라도 페이백이 가능합니다.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
                <h3 className="text-base sm:text-xl font-bold mb-3 flex items-center gap-2.5 text-gray-900">
                  <span className="text-blue-600 font-extrabold">Q.</span> 캐시백은 언제 입금되나요?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-keep pl-7">
                  보내주신 영수증의 검수가 완료된 후, <strong className="text-gray-900">영업일 기준 5일 이내</strong>에 고객님의 카카오페이로 안전하게 원화 입금 처리됩니다.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 5. Final CTA section */}
        <section className="px-5 py-12 sm:py-16 text-center">
          <FadeIn>
            <div className="bg-blue-600 text-white rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-20 max-w-4xl mx-auto shadow-[0_20px_50px_rgba(37,99,235,0.25)] relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-700 rounded-full blur-3xl opacity-60"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 break-keep tracking-tight leading-tight">
                  일본 여행 출발 전,<br className="hidden sm:block" />혜택부터 확인하세요.
                </h2>
                <p className="text-blue-100 text-base sm:text-xl break-keep max-w-xl mx-auto font-medium">
                  지금 카카오톡 채널을 추가하고 제휴 매장과 할인 코드를 받아보세요.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 pt-12 pb-32 px-5 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-left text-gray-500 text-xs sm:text-sm leading-relaxed break-keep">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
            {/* Business Information */}
            <div className="md:col-span-4">
              <h4 className="font-bold text-gray-700 mb-3 text-sm">주식회사 큐와이</h4>
              <div className="space-y-1.5 font-medium">
                <p>대표: CUI HU (최호)</p>
                <p>사업자등록번호: 379-85-02459</p>
                <p>고객센터: 1544-9687 / 카카오톡 채널</p>
              </div>
            </div>

            {/* Policies & Notices */}
            <div className="md:col-span-8 space-y-3 text-gray-400 text-[11px] sm:text-xs">
              <p>
                <strong className="text-gray-500">서비스 안내:</strong> 본 서비스는 일본 내 제휴 매장에서 발생한 구매를 바탕으로 캐시백을 제공하는 서비스입니다. 당사는 상품의 판매 당사자가 아니며, 모든 구매 거래는 고객과 제휴 매장 간에 직접 이루어집니다.
              </p>
              <p>
                <strong className="text-gray-500">캐시백 정책:</strong> 캐시백 적립률 및 지급 일정은 제휴 매장의 조건 및 당사 내부 정책에 따라 변동될 수 있습니다. 최신 캐시백 조건 및 지급 일정은 카카오톡 채널을 통해 확인하실 수 있으며, 캐시백은 영수증 검증 완료 후 지급됩니다.
              </p>
              <p>
                <strong className="text-gray-500">개인정보 처리:</strong> 서비스 이용 시 별도의 연락처, 계좌 정보, 본인인증을 요구하지 않으며, 카카오톡을 통한 영수증 확인 및 카카오페이 지급 목적으로만 최소한의 정보를 활용합니다.
              </p>
              <p>
                <strong className="text-gray-500">유의사항:</strong> 유효하지 않거나 조작된 영수증, 또는 부정 이용이 의심되는 경우 캐시백 지급이 제한될 수 있습니다.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 text-gray-400 text-center md:text-left">
            <p>© {new Date().getFullYear()} 주식회사 큐와이. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 2. Bottom-right floating button */}
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-50">
        <a
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] font-bold px-4 py-4 sm:px-6 sm:py-4 rounded-2xl sm:rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 transition-all border border-yellow-400/30 w-full sm:w-auto"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" fill="#191919" />
          <span className="text-base">카카오톡 채널 이동하기</span>
        </a>
      </div>
    </div>
  );
}

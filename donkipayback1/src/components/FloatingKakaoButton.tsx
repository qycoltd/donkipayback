import { MessageCircle } from 'lucide-react';

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_VITdX/chat";

export default function FloatingKakaoButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FEE500] text-[#191919] p-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <MessageCircle size={24} fill="#191919" />
      </a>
    </div>
  );
}

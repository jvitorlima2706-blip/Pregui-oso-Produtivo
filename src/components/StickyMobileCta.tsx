import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { HERO_DATA, CHECKOUT_URL } from '../data/content';

interface StickyMobileCtaProps {
  onOpenCheckout?: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#060a18]/95 backdrop-blur-xl border-t border-cyan-500/30 shadow-2xl shadow-black animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-mono line-through leading-none">
            De R${HERO_DATA.priceOriginal}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-slate-300 font-medium">Por</span>
            <span className="text-lg font-extrabold text-cyan-300 font-mono leading-tight">
              R${HERO_DATA.priceCurrent}
            </span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer font-display uppercase tracking-wide text-center"
        >
          <span>QUERO O EBOOK AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL } from '../data/content';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#02040a]/80 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
          : 'bg-[#02040a]/30 backdrop-blur-md border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center font-bold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
            PP
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold tracking-wider text-white font-display uppercase">
                PREGUIÇOSO
              </span>
              <span className="text-sm font-extrabold tracking-wider text-cyan-400 font-display uppercase">
                PRODUTIVO
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 block tracking-tight">
              10 MIN/DIA • SEM PLANO PRO
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <button 
            onClick={() => scrollToSection('a-dor')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            A Dor
          </button>
          <button 
            onClick={() => scrollToSection('o-produto')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            O Produto
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Resultados
          </button>
          <button 
            onClick={() => scrollToSection('bonus')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            3 Bônus
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="hover:text-cyan-300 transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <div className="bg-blue-500/10 border border-blue-400/30 px-3 py-1 rounded-full text-cyan-300 text-[11px] font-mono backdrop-blur-md">
            Garantia 7 Dias
          </div>
        </nav>

        {/* Action Button & Price Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-semibold text-slate-500 block line-through">De R$147</span>
            <span className="text-xs font-bold text-cyan-300 font-mono">Por R$47</span>
          </div>

          <a
            href={CHECKOUT_URL}
            id="nav-cta-btn"
            className="relative group overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>QUERO POR R$ 47</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b18]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-5 space-y-3">
          <button 
            onClick={() => scrollToSection('a-dor')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            A Dor
          </button>
          <button 
            onClick={() => scrollToSection('o-produto')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            O Produto & A Cura
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            Resultados (Prova Social)
          </button>
          <button 
            onClick={() => scrollToSection('bonus')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            3 Bônus Inclusos
          </button>
          <button 
            onClick={() => scrollToSection('oferta')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            Oferta Especial (R$ 47)
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left py-2 text-sm text-slate-300 hover:text-white"
          >
            Perguntas Frequentes
          </button>
          <a
            href={CHECKOUT_URL}
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl text-center shadow-lg uppercase"
          >
            GARANTIR ACESSO POR R$ 47
          </a>
        </div>
      )}
    </header>
  );
};

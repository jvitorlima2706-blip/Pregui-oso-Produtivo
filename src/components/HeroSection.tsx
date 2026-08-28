import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, CheckCircle2, Clock, DollarSign, Cpu } from 'lucide-react';
import { EbookMockup3D } from './EbookMockup3D';
import { HERO_DATA, CHECKOUT_URL } from '../data/content';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-radial-gradient pointer-events-none -z-10" />
      <div className="absolute top-24 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-36 right-1/4 w-[380px] h-[380px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Isca Principal */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Hook Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)] mb-5"
            >
              <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>{HERO_DATA.hookPill}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.1] font-display mb-4"
            >
              Com <span className="text-cyan-400">10 minutos por dia</span>, lucre no mínimo{' '}
              <span className="text-blue-400 underline decoration-blue-500/40">R$ 1.000 no primeiro mês</span>{' '}
              usando IA.
            </motion.h1>

            {/* Subheadline: Clareza sobre NÃO precisar de plano PRO */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-6"
            >
              Você <strong className="text-white">NÃO precisa contratar ferramentas caras</strong> nem pagar planos PRO. Aprenda a usar IAs 100% gratuitas para criar anúncios, copies e vendas automáticas todos os dias.
            </motion.p>

            {/* CTA Box with Fast Pricing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-xl bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-blue-400/30 p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative overflow-hidden mb-6"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
              
              {/* Pricing Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-sm font-medium text-slate-500 line-through">
                    De R${HERO_DATA.priceOriginal}
                  </span>
                  <span className="text-xs text-slate-400">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan-300 font-mono">
                    R${HERO_DATA.priceCurrent}
                  </span>
                </div>

                <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded font-bold text-xs font-mono uppercase tracking-wide">
                  ECONOMIA DE R${HERO_DATA.economy}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={CHECKOUT_URL}
                id="hero-cta-button"
                className="w-full relative group overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base py-4 px-6 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 font-display uppercase tracking-wide text-center"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 animate-shimmer pointer-events-none" />
                <span className="relative z-10">{HERO_DATA.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              {/* Guarantees & Microcopy */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-cyan-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Garantia de 7 Dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> Acesso Imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 3 Bônus Inclusos
                </span>
              </div>
            </motion.div>

            {/* Quick 3-Point Guarantee Highlights */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-xl text-center text-xs">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5">
                <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white block">10 Minutos/Dia</span>
                <span className="text-[9px] text-slate-400">Rotina rápida</span>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5">
                <Cpu className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white block">Sem Plano PRO</span>
                <span className="text-[9px] text-slate-400">100% IA Gratuita</span>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5">
                <DollarSign className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white block">R$ 1.000 Mínimo</span>
                <span className="text-[9px] text-slate-400">No 1º mês</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Mockup with Cover Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <EbookMockup3D />
          </div>

        </div>
      </div>
    </section>
  );
};

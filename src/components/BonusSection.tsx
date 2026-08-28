import React from 'react';
import { motion } from 'motion/react';
import { Gift, Lock, CheckCircle2, ArrowRight, Sparkles, BookOpen, Compass, Key } from 'lucide-react';
import { BONUS_DATA, CHECKOUT_URL } from '../data/content';

interface BonusSectionProps {
  onOpenCheckout?: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  const getBonusIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <BookOpen className="w-6 h-6 text-blue-400" />;
      case 2:
        return <Key className="w-6 h-6 text-amber-400" />;
      default:
        return <Gift className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="bonus" className="py-16 sm:py-20 relative bg-[#060a19] border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Gift className="w-3.5 h-3.5 text-cyan-400" />
            <span>3 BÔNUS EXCLUSIVOS INCLUSOS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            GARANTA HOJE E LEVE MAIS{' '}
            <span className="text-cyan-400 underline decoration-cyan-500/30">
              3 BÔNUS DE GRAÇA
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Materiais práticos complementares para acelerar seus primeiros R$ 1.000 de lucro com a IA.
          </p>
        </div>

        {/* 3 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {BONUS_DATA.map((bonus, idx) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className={`bg-white/[0.03] backdrop-blur-xl rounded-2xl border p-6 flex flex-col justify-between hover:scale-[1.02] transition-all shadow-xl relative overflow-hidden ${
                idx === 2 
                  ? 'border-amber-500/40 bg-gradient-to-b from-amber-950/20 to-transparent' 
                  : 'border-cyan-500/30 hover:border-cyan-400/60'
              }`}
            >
              {/* Slot & Badge header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getBonusIcon(idx)}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/70 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {bonus.slot}
                    </span>
                  </div>

                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 border ${
                    idx === 2
                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-950/60 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {bonus.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-2">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {bonus.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Valor individual:</span>
                <span className={`font-bold ${idx === 2 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {bonus.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick CTA banner */}
        <div className="text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer uppercase tracking-wider"
          >
            <span>QUERO O EBOOK + OS 3 BÔNUS POR APENAS R$47</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

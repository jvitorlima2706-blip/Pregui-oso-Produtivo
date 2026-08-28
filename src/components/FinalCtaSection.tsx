import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Lock, CheckCircle2 } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-24 relative bg-[#050711] border-t border-slate-800/80 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="rounded-3xl bg-gradient-to-b from-[#0c1638] via-[#080e25] to-[#040816] border border-cyan-500/40 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1b3d] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>A DECISÃO É SUA</span>
          </div>

          {/* Section Headlines */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-300 font-display tracking-tight leading-tight mb-2">
            VOCÊ PODE CONTINUAR FAZENDO TUDO MANUALMENTE.
          </h2>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-display tracking-tight leading-tight mb-6">
            OU PODE COMEÇAR A TRABALHAR DE FORMA MAIS INTELIGENTE.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Aprenda a colocar a Inteligência Artificial ao lado do seu processo de vendas e transforme horas de trabalho em minutos de execução.
          </p>

          {/* CTA Box */}
          <div className="max-w-md mx-auto">
            <button
              onClick={onOpenCheckout}
              id="final-cta-btn"
              className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-extrabold text-base sm:text-lg py-4.5 px-8 rounded-2xl shadow-2xl shadow-cyan-500/35 hover:shadow-cyan-500/60 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 font-display uppercase tracking-wide"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 animate-shimmer pointer-events-none" />
              <span className="relative z-10">QUERO SER UM PREGUIÇOSO PRODUTIVO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>

            {/* Below CTA text */}
            <div className="mt-4 flex flex-col items-center gap-1.5 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="line-through text-slate-500">De R$147</span>
                <span className="font-bold text-cyan-300 text-sm">por R$47</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Acesso imediato • Pagamento único
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

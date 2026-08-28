import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ArrowRight, XCircle, Flame } from 'lucide-react';
import { PAIN_POINTS, CHECKOUT_URL } from '../data/content';

interface PatternBreakSectionProps {
  onOpenCheckout?: () => void;
}

export const PatternBreakSection: React.FC<PatternBreakSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="a-dor" className="py-16 sm:py-20 relative bg-[#040713] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-red-400" />
            <span>A REALIDADE DO TRABALHO MANUAL</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            VOCÊ ESTÁ CANSADO DE{' '}
            <span className="text-red-400 underline decoration-red-500/30">
              TRABALHAR HORAS A FIO
            </span>{' '}
            SEM VER O DINHEIRO CAIR NA CONTA?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            O problema não é a sua dedicação. É insistir em fazer no braço o que a Inteligência Artificial gratuita faz em segundos.
          </p>
        </div>

        {/* 4 Pain vs Solution Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {PAIN_POINTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 p-5 flex flex-col justify-between hover:border-blue-400/40 transition-all"
            >
              {/* The Pain (Red) */}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-red-400 uppercase font-bold tracking-wider">A Dor Que Trava Você</p>
                  <p className="text-sm font-semibold text-slate-200">{item.pain}</p>
                </div>
              </div>

              {/* The Solution (Blue/Cyan) */}
              <div className="flex items-start gap-3 pt-3 border-t border-white/5 bg-blue-950/20 rounded-xl p-3">
                <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-cyan-300 uppercase font-bold tracking-wider">A Cura com IA</p>
                  <p className="text-xs sm:text-sm text-slate-300">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-blue-900/40 border border-blue-400/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              Chega de perder tempo e dinheiro. Deixe a IA trabalhar para você.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Apenas 10 minutos por dia com ferramentas 100% gratuitas.
            </p>
          </div>
          <a
            href={CHECKOUT_URL}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer flex items-center gap-2 uppercase tracking-wide text-center"
          >
            <span>QUERO A CURA POR R$47</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

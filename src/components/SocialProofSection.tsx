import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, MessageSquareText, TrendingUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

interface SocialProofSectionProps {
  onOpenCheckout: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 relative bg-[#040817] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>PROVA SOCIAL & RESULTADOS REAIS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            QUEM APLICOU 10 MIN/DIA{' '}
            <span className="text-emerald-400 underline decoration-emerald-500/30">
              JÁ ESTÁ LUCRANDO
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Veja como pessoas comuns usaram IA gratuita para destravar suas vendas sem complicação técnica.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {t.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>

                {t.metricPlaceholder && (
                  <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    {t.metricPlaceholder}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

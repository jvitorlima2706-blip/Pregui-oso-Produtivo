import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, XCircle, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { TRANSFORMATION_COMPARISON } from '../data/content';

interface TransformationSectionProps {
  onOpenCheckout: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-indigo-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
            <span>A TRANSFORMAÇÃO DO SEU DIA A DIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            ANTES DA IA <span className="text-slate-500 font-light">×</span> <span className="text-blue-400 underline decoration-blue-500/30">DEPOIS DA IA</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Veja a diferença prática na sua rotina produtiva ao colocar Inteligência Artificial ao seu lado.
          </p>
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Column 1: ANTES (Old Way - Red/Gray) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-red-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <h3 className="text-lg font-bold text-red-300 font-display tracking-wider uppercase">
                    SEM O MÉTODO (ANTES)
                  </h3>
                </div>
                <span className="text-xs font-mono text-red-400/80 bg-red-950/60 px-2.5 py-1 rounded-md border border-red-500/20">
                  Lento & Cansativo
                </span>
              </div>

              <div className="space-y-4">
                {TRANSFORMATION_COMPARISON.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full bg-white/[0.02] border border-red-500/20 rounded-xl p-4 flex items-start gap-3.5">
                      <div className="p-1 rounded-md bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                        <XCircle className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-red-200/90 font-medium">
                        "{step.before}"
                      </p>
                    </div>

                    {idx < TRANSFORMATION_COMPARISON.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-red-500/40 my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-900/30 text-center">
              <p className="text-xs text-red-300/70 font-mono">
                Resultado: Horas gastas em esforço manual sem escala previsível.
              </p>
            </div>
          </motion.div>

          {/* Column 2: DEPOIS (New Way - Blue/Cyan) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-blue-400/40 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden"
          >
            {/* Glow sheen */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                  <h3 className="text-lg font-bold text-blue-200 font-display tracking-wider uppercase">
                    COM O PREGUIÇOSO PRODUTIVO
                  </h3>
                </div>
                <span className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-400/30 backdrop-blur-md">
                  Rápido & Estratégico
                </span>
              </div>

              <div className="space-y-4">
                {TRANSFORMATION_COMPARISON.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full bg-white/[0.04] border border-blue-400/20 rounded-xl p-4 flex items-start gap-3.5 shadow-sm">
                      <div className="p-1 rounded-md bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-sm text-blue-100 font-semibold">
                        "{step.after}"
                      </p>
                    </div>

                    {idx < TRANSFORMATION_COMPARISON.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-blue-400/60 my-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center">
              <p className="text-xs text-blue-300 font-mono font-medium">
                Resultado: Execução em minutos e tempo livre para focar no crescimento.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Transformation Banner */}
        <div className="text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] active:scale-95 cursor-pointer font-display transition-all"
          >
            <span>QUERO TRANSFORMAR MINHA ROTINA POR R$47</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

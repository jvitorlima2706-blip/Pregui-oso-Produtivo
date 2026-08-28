import React from 'react';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Bot, 
  PlayCircle, 
  FlaskConical, 
  BarChart, 
  SlidersHorizontal, 
  Trophy, 
  ArrowRight,
  UserCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import { METHOD_STEPS } from '../data/content';

interface MethodSectionProps {
  onOpenCheckout: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onOpenCheckout }) => {
  const getStepIcon = (label: string) => {
    switch (label) {
      case 'IDEIA': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'IA': return <Bot className="w-5 h-5 text-blue-400" />;
      case 'EXECUÇÃO': return <PlayCircle className="w-5 h-5 text-cyan-400" />;
      case 'TESTE': return <FlaskConical className="w-5 h-5 text-purple-400" />;
      case 'DADOS': return <BarChart className="w-5 h-5 text-indigo-400" />;
      case 'OTIMIZAÇÃO': return <SlidersHorizontal className="w-5 h-5 text-blue-300" />;
      case 'RESULTADO': return <Trophy className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>FLUXO OPERACIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            O MÉTODO DO <span className="text-blue-400 underline decoration-blue-500/30">PREGUIÇOSO PRODUTIVO</span>
          </h2>
          
          {/* Core Concept Punch */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-lg">
            <span className="text-sm sm:text-base font-extrabold text-blue-400 font-mono">
              IA FAZ O PESADO.
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="text-sm sm:text-base font-extrabold text-white font-mono">
              VOCÊ FAZ O ESTRATÉGICO.
            </span>
          </div>

          <p className="mt-5 text-slate-400 text-base sm:text-lg">
            A IA não substitui a sua inteligência ou tomada de decisão. Ela simplesmente elimina 90% do trabalho braçal para você testar mais e vender mais.
          </p>
        </div>

        {/* Step-by-Step Interactive Workflow */}
        <div className="relative mb-16">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-emerald-500/30 -translate-y-6 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
            {METHOD_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-400/50 p-4 flex flex-col justify-between transition-all group hover:bg-white/[0.06] shadow-lg"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-slate-300 group-hover:text-blue-400 group-hover:border-blue-400/40">
                      0{step.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                      {getStepIcon(step.label)}
                    </div>
                  </div>

                  {/* Step Label */}
                  <h3 className="text-base font-bold text-white font-display tracking-wide mb-1 group-hover:text-blue-300 transition-colors">
                    {step.label}
                  </h3>
                  
                  {/* Role Tag */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 mb-2.5">
                    {step.role === 'ai' ? (
                      <>
                        <Bot className="w-2.5 h-2.5 text-blue-400" />
                        <span className="text-blue-300">Assistente IA</span>
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-2.5 h-2.5 text-cyan-400" />
                        <span className="text-cyan-300">Você (Estratégia)</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs font-medium text-slate-300 mb-2">
                    {step.action}
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 leading-snug pt-2 border-t border-white/10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Method Summary Callout */}
        <div className="rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div>
            <h4 className="text-lg font-bold text-white font-display mb-1">
              Pronto para colocar o método em prática hoje?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Receba o guia completo com todos os passos detalhados por apenas R$47.
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95 cursor-pointer font-display"
          >
            QUERO APLICAR O MÉTODO
          </button>
        </div>

      </div>
    </section>
  );
};

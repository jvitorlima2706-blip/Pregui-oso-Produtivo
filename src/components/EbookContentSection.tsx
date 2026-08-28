import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  PenTool, 
  Palette, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { EBOOK_MODULES } from '../data/content';

interface EbookContentSectionProps {
  onOpenCheckout: () => void;
}

export const EbookContentSection: React.FC<EbookContentSectionProps> = ({ onOpenCheckout }) => {
  const [selectedModule, setSelectedModule] = useState<string>(EBOOK_MODULES[0].id);

  const getModuleIcon = (icon: string) => {
    switch (icon) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-300" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-300" />;
      default: return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="conteudo" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>CONTEÚDO PROGRAMÁTICO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            O QUE VOCÊ VAI ENCONTRAR DENTRO DO{' '}
            <span className="text-blue-400 underline decoration-blue-500/30">
              PREGUIÇOSO PRODUTIVO?
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Um manual prático estruturado em 7 pilares fundamentais, sem enrolação teórica e focado 100% na aplicação direta no seu dia a dia.
          </p>
        </div>

        {/* 7 Modules Interactive Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {EBOOK_MODULES.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => setSelectedModule(mod.id)}
              className={`rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedModule === mod.id 
                  ? 'bg-white/[0.07] backdrop-blur-2xl border-blue-400/60 shadow-[0_0_30px_rgba(37,99,235,0.25)] ring-1 ring-blue-400/40' 
                  : 'bg-white/[0.03] backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
              }`}
            >
              <div>
                {/* Module Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/30">
                    {getModuleIcon(mod.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-400/30 backdrop-blur-md">
                    MÓDULO {mod.number}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-xl font-bold text-white font-display mb-1.5">
                  {mod.title}
                </h3>
                <p className="text-xs font-mono text-blue-300/90 mb-3">
                  {mod.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {mod.description}
                </p>
              </div>

              {/* Module Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {mod.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center pt-6">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] active:scale-95 cursor-pointer font-display"
          >
            <span>QUERO TER ACESSO AOS 7 MÓDULOS POR R$47</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-400 mt-2 font-mono">
            Download imediato após a confirmação do pagamento
          </p>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  BookOpenCheck, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react';
import { DIFFERENTIAL_CATEGORIES, CHECKOUT_URL } from '../data/content';

interface DifferentialSectionProps {
  onOpenCheckout?: () => void;
}

export const DifferentialSection: React.FC<DifferentialSectionProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<string>('fisico');

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeCategory = DIFFERENTIAL_CATEGORIES.find(c => c.id === activeTab) || DIFFERENTIAL_CATEGORIES[0];

  return (
    <section id="o-produto" className="py-16 sm:py-20 relative bg-[#02040a] border-t border-slate-800/80 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>O PRODUTO & A CURA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            COMO O EBOOK PREGUIÇOSO PRODUTIVO{' '}
            <span className="text-blue-400 underline decoration-blue-500/30">
              COLOCA DINHEIRO NO SEU BOLSO
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Não importa o que você vende ou deseja vender: a IA atua como seu estrategista e executor 24 horas por dia.
          </p>
        </div>

        {/* 3 Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {DIFFERENTIAL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-400/40'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Box */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-blue-400/30 rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 mb-2 inline-block">
                {activeCategory.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {activeCategory.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeCategory.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex items-start gap-3 hover:border-blue-400/30 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200">{useCase}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Central Quote */}
        <div className="text-center">
          <p className="text-sm sm:text-base font-semibold text-cyan-300 italic mb-4">
            "10 minutos de comando de manhã, e a sua máquina de vendas fica rodando o dia inteiro."
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer uppercase tracking-wide"
          >
            <span>GARANTIR MEU GUIA POR R$47</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

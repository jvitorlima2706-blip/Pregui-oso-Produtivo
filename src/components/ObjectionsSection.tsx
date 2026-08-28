import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Briefcase, 
  Bot, 
  Clock, 
  Target, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { OBJECTIONS_DATA } from '../data/content';

interface ObjectionsSectionProps {
  onOpenCheckout: () => void;
}

export const ObjectionsSection: React.FC<ObjectionsSectionProps> = ({ onOpenCheckout }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-cyan-300" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-400" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-400" />;
      default: return <HelpCircle className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 relative bg-[#050711] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1633] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>QUEBRA DE OBJEÇÕES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            "MAS SERÁ QUE ISSO É <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">PARA MIM?</span>"
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Veja as respostas diretas para as dúvidas mais comuns de quem está pensando em dar o próximo passo:
          </p>
        </div>

        {/* Objections Grid / Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {OBJECTIONS_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-gradient-to-b from-[#0a122a] to-[#070b1a] rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 p-5 sm:p-6 flex flex-col justify-between transition-all shadow-lg"
              >
                <div>
                  {/* Question Row with Icon */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    <div className="p-2 rounded-xl bg-[#0e1b3d] border border-cyan-500/30 shrink-0 mt-0.5">
                      {getIcon(item.icon)}
                    </div>
                    <h3 className="text-base font-bold text-white font-display leading-snug">
                      "{item.question}"
                    </h3>
                  </div>

                  {/* Answer */}
                  <div className="pl-12 pt-1 border-t border-slate-800/80">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item.answer}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1633] via-[#091129] to-[#0d1633] border border-cyan-500/30 p-6 text-center max-w-3xl mx-auto shadow-xl">
          <p className="text-sm sm:text-base text-slate-200 font-bold font-display">
            Se você vende alguma coisa pela internet ou quer começar com velocidade, este método foi feito exatamente para você.
          </p>
        </div>

      </div>
    </section>
  );
};

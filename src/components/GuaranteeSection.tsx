import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 relative bg-[#02040a] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-blue-400/30 p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left"
        >
          {/* Shield Badge Icon */}
          <div className="shrink-0 relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-blue-500/20">
              <div className="w-full h-full bg-[#070b1a] rounded-[14px] flex items-center justify-center text-cyan-300">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black font-black text-[10px] rounded-full px-1.5 py-0.5 shadow-md">
              7 DIAS
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>GARANTIA INCONDICIONAL DE 7 DIAS</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
              Risco Zero: Teste o método por 7 dias inteiros
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Adquira seu exemplar agora e coloque em prática por 7 dias. Se você ler o e-book, aplicar os comandos de 10 minutos diários e achar que não teve retorno ou que não valeu a pena, basta nos enviar um único email e <strong>devolveremos 100% do seu dinheiro</strong>. Sem letras miúdas.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Reembolso Rápido e Sem Burocracia
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Pagamento 100% Criptografado
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

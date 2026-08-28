import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, TrendingUp, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { AUTHOR_DATA } from '../data/content';

interface AuthorSectionProps {
  onOpenCheckout: () => void;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="autor" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Author Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Author Avatar / Badge Frame */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-4">
                {/* Glowing ring frame */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-blue-500/20 border border-blue-400/40 p-1 shadow-[0_0_30px_rgba(37,99,235,0.3)] backdrop-blur-xl">
                  <div className="w-full h-full bg-white/[0.03] rounded-[14px] flex flex-col items-center justify-center p-4 border border-white/10">
                    <UserCheck className="w-16 h-16 text-blue-400 mb-2" />
                    <span className="text-xs font-mono font-bold text-slate-300">AUTOR DO GUIA</span>
                  </div>
                </div>

                <div className="absolute -bottom-2 bg-blue-600 text-white font-bold text-[11px] font-mono px-3 py-0.5 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  VERIFICADO
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-white font-display">
                {AUTHOR_DATA.name}
              </h3>
              <p className="text-xs text-blue-300 font-mono mt-1 text-center">
                {AUTHOR_DATA.role}
              </p>
            </div>

            {/* Right: Author Bio & Practical Philosophy */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>QUEM ESTÁ POR TRÁS DO PREGUIÇOSO PRODUTIVO?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                Criado a partir da prática real de tráfego e vendas na internet.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Como especialista em tráfego pago, marketing digital e estratégias de crescimento, João Vitor atua diariamente na gestão de campanhas, criação de anúncios, copies e funis de vendas.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                O método do <strong>Preguiçoso Produtivo</strong> não nasceu de teorias abstratas, mas da necessidade real de acelerar a produção de criativos, testar mais hipóteses e aumentar os resultados de negócios digitais trabalhando de maneira mais inteligente.
              </p>

              {/* Pillars list */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Testado no campo de batalha real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Sem promessas irreais de dinheiro fácil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Foco em tráfego, vendas e conversão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Linguagem direta e aplicável</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

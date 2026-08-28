import React from 'react';
import { motion } from 'motion/react';
import { Scale, Utensils, CreditCard, Sparkles, Check, ArrowRight } from 'lucide-react';

interface AnchoringSectionProps {
  onOpenCheckout: () => void;
}

export const AnchoringSection: React.FC<AnchoringSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 relative bg-[#050711] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1633] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>ANCORAGEM DE VALOR</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-snug">
            "O preço de um jantar ou de uma ferramenta de IA pode ser suficiente para você aprender a usar IA em todo o seu processo de vendas."
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Jantar / Lanche */}
          <div className="bg-[#090e21] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-900 w-fit mb-4 text-slate-400">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-1">Um único jantar / delivery</h3>
              <p className="text-xs text-slate-400 mb-4">Dura apenas 30 minutos e não traz nenhum retorno financeiro para o seu negócio.</p>
            </div>
            <div className="pt-4 border-t border-slate-800 font-mono text-slate-400 text-sm">
              Média: <span className="text-white font-bold">R$60 - R$120</span>
            </div>
          </div>

          {/* Card 2: Mensalidades recorrentes de softwares */}
          <div className="bg-[#090e21] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-slate-900 w-fit mb-4 text-slate-400">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-1">Mensalidade de ferramentas</h3>
              <p className="text-xs text-slate-400 mb-4">Cobrança todo mês no seu cartão sem que você saiba como extrair o máximo do recurso.</p>
            </div>
            <div className="pt-4 border-t border-slate-800 font-mono text-slate-400 text-sm">
              Média: <span className="text-white font-bold">R$100 - R$250/mês</span>
            </div>
          </div>

          {/* Card 3: Ebook Preguiçoso Produtivo (Featured) */}
          <div className="bg-gradient-to-b from-[#0f1b3d] to-[#070d22] rounded-2xl border border-cyan-500/50 p-6 flex flex-col justify-between shadow-xl shadow-cyan-950/40 relative">
            <div className="absolute -top-3 right-4 bg-cyan-400 text-[#050711] font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            <div>
              <div className="p-3 rounded-xl bg-[#0a1430] border border-cyan-500/30 w-fit mb-4 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-display mb-1">Preguiçoso Produtivo</h3>
              <p className="text-xs text-cyan-200/90 mb-4">Método prático definitivo que você aprende uma única vez e aplica em qualquer IA gratuita ou paga.</p>
            </div>
            <div className="pt-4 border-t border-cyan-500/30 font-mono text-cyan-300 text-base font-extrabold flex items-center justify-between">
              <span>Pagamento Único:</span>
              <span className="text-xl text-white font-bold font-mono">R$47</span>
            </div>
          </div>

        </div>

        {/* Clear Position Statement */}
        <div className="rounded-2xl bg-[#09112a] border border-cyan-500/30 p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
            Você paga apenas <strong>R$47</strong> pelo conhecimento estratégico e tem a liberdade total de aplicar o método usando as ferramentas de Inteligência Artificial que preferir (gratuitas ou pagas).
          </p>
        </div>

      </div>
    </section>
  );
};

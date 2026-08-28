import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Gift,
  Flame,
  Clock,
  Lock
} from 'lucide-react';
import { EbookMockup3D } from './EbookMockup3D';
import { HERO_DATA, CHECKOUT_URL } from '../data/content';

interface OfferSectionProps {
  onOpenCheckout?: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-16 sm:py-24 relative bg-[#040713] border-t border-slate-800/80 overflow-hidden">
      {/* Heavy Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-300 text-xs font-mono mb-3">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>OFERTA IMPERDÍVEL POR TEMPO LIMITADO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            COMECE HOJE COM{' '}
            <span className="text-cyan-400 underline decoration-cyan-500/40">
              RISCO ZERO
            </span>{' '}
            E ACESSO IMEDIATO
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Tudo o que você precisa para aplicar em 10 minutos diários e faturar no mínimo R$ 1.000 no primeiro mês com IA gratuita.
          </p>
        </div>

        {/* Big Offer Bento Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-b from-[#0e1738] via-[#091026] to-[#040713] border-2 border-blue-400/40 p-6 sm:p-10 shadow-2xl shadow-blue-950/60 relative overflow-hidden"
        >
          {/* Holographic badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[11px] font-bold px-5 py-1.5 rounded-bl-2xl shadow-lg uppercase tracking-wider">
            70% OFF • HOJE POR R$ 47
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Mockup View */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <EbookMockup3D />
            </div>

            {/* Right Pricing & Inclusions */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">
                  E-book Preguiçoso Produtivo
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono mb-5">
                  + 3 Bônus Oficiais • Garantia Incondicional de 7 Dias
                </p>

                {/* 3 Step Visual Price Comparison */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 text-center font-mono">
                  <div className="bg-[#060a1a] border border-slate-800 rounded-xl p-2.5">
                    <span className="text-[10px] text-slate-400 block uppercase">De</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-400 line-through">R$ 147</span>
                  </div>
                  <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-2.5">
                    <span className="text-[10px] text-emerald-400 block uppercase">Desconto</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-300">-R$ 100</span>
                  </div>
                  <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-xl p-2.5">
                    <span className="text-[10px] text-cyan-300 block uppercase">Hoje Por</span>
                    <span className="text-base sm:text-xl font-black text-cyan-300">R$ 47</span>
                  </div>
                </div>

                {/* Checklist with the 3 Bonuses */}
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>E-book Preguiçoso Produtivo</strong> (O método de 10 min/dia com IA Gratuita)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>BÔNUS 1:</strong> E-book de Tráfego Pago para Iniciantes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>BÔNUS 2:</strong> E-book de Ideias de Produtos para Vendas na Internet</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>BÔNUS 3:</strong> O Produto Secreto (Acesso Imediato)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Garantia Blindada de 7 Dias</strong> (Satisfação ou 100% de reembolso)</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={CHECKOUT_URL}
                  id="offer-cta-main-btn"
                  className="w-full relative group overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(37,99,235,0.7)] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 font-display transition-all duration-300 text-center"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 animate-shimmer pointer-events-none" />
                  <span className="relative z-10 tracking-wide uppercase">
                    QUERO MEU ACESSO AGORA POR APENAS R$ 47
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>

                {/* Trust Footer Badges */}
                <div className="mt-3.5 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Zap className="w-3 h-3 text-cyan-400" /> Acesso Imediato por Email
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-blue-400" /> Pagamento 100% Seguro
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> Sem Mensalidades
                  </span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

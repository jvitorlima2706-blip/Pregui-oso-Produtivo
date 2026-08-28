import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Cpu, 
  Brain, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Maximize2,
  Zap,
  Target,
  Clock,
  Bot,
  TrendingUp,
  Settings,
  Coffee,
  Glasses
} from 'lucide-react';
import { CoverVariant } from './EbookMockup3D';

interface VisualShowcaseSectionProps {
  onOpenCheckout: () => void;
}

export const VisualShowcaseSection: React.FC<VisualShowcaseSectionProps> = ({ onOpenCheckout }) => {
  const [activeCover, setActiveCover] = useState<CoverVariant>('lifestyle');

  const coversData = [
    {
      id: 'lifestyle' as CoverVariant,
      title: 'Edição 1: Visão 3D & Setup Estratégico',
      subtitle: 'O estilo de vida do empreendedor moderno com IA',
      tag: 'EDIÇÃO PRINCIPAL',
      icon: <Sparkles className="w-4 h-4 text-blue-400" />,
      features: [
        'Cenário completo com o setup do empreendedor',
        'Diagrama do fluxo: Estratégia ➔ IA ➔ Vendas Automáticas',
        'Checklist do Método Preguiçoso Produtivo',
        'Selo Oficial: Preguiçoso Sim, Ineficiente Nunca'
      ],
      quote: 'Deixe a IA fazer o pesado. Você colhe os resultados.',
      badgeColor: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'neon' as CoverVariant,
      title: 'Edição 2: Cyber Chip & Tráfego IA',
      subtitle: 'Como processar dados, campanhas e funis no automático',
      tag: 'FOCO EM ESCALA',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      features: [
        'Chip Neural IA em 3D de alta performance',
        'Tráfego Inteligente com campanhas que atraem e convertem',
        'Vendas Automatizadas com funis e mensagens 24/7',
        'Economia de horas operacionais diárias'
      ],
      quote: 'Tráfego + Vendas + IA = Resultados Reais.',
      badgeColor: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'minimal' as CoverVariant,
      title: 'Edição 3: Fluxo Minimalista',
      subtitle: 'Os 4 pilares essenciais da rotina de alta produtividade',
      tag: 'FOCO EM EXECUÇÃO',
      icon: <Brain className="w-4 h-4 text-blue-400" />,
      features: [
        'Os 4 pilares: Trabalhe Menos, Automatize, Venda Mais, Resultados Diários',
        'Design limpo com foco nos passos essenciais',
        'Guia rápido de consulta para seu desktop ou tablet',
        'Prompts e modelos prontos para copiar e colar'
      ],
      quote: 'Trabalhe menos. Produza mais. Venda todos os dias.',
      badgeColor: 'from-blue-500 to-cyan-400'
    }
  ];

  const currentCover = coversData.find(c => c.id === activeCover) || coversData[0];

  return (
    <section id="edicoes" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>ARTES & EDIÇÕES EXCLUSIVAS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            CONHEÇA O VISUAL DO SEU{' '}
            <span className="text-blue-400 underline decoration-blue-500/30">
              NOVO MATERIAL
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Um guia com acabamento visual moderno e diagramação de alto padrão, desenvolvido para leitura ágil no celular, tablet ou computador.
          </p>
        </div>

        {/* Interactive 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Tab Selectors & Descriptions */}
          <div className="lg:col-span-6 space-y-4">
            {coversData.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveCover(item.id)}
                whileHover={{ scale: 1.01 }}
                className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeCover === item.id
                    ? 'bg-white/[0.07] backdrop-blur-2xl border-blue-400/60 shadow-[0_0_30px_rgba(37,99,235,0.25)] ring-1 ring-blue-400/40'
                    : 'bg-white/[0.02] backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/30">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-400/30">
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 pl-10">
                  {item.subtitle}
                </p>

                {activeCover === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-10 space-y-2 pt-3 border-t border-white/10"
                  >
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    <div className="mt-3 p-2.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-300 italic">
                      "{item.quote}"
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Live Interactive Card Canvas Render */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-blue-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(37,99,235,0.3)] flex flex-col justify-between overflow-hidden">
              
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

              <AnimatePresence mode="wait">
                {activeCover === 'lifestyle' && (
                  <motion.div
                    key="view-lifestyle"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <p className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase border-b border-white/10 pb-2 mb-3">
                        TRÁFEGO + VENDAS + IA = RESULTADOS
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight uppercase leading-none">
                        PREGUIÇOSO
                      </h3>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-500 font-display tracking-tight uppercase leading-none mb-3">
                        PRODUTIVO
                      </h3>
                      <p className="text-xs text-slate-300 leading-tight">
                        COMO USAR INTELIGÊNCIA ARTIFICIAL PARA <span className="text-blue-400 font-bold">TRABALHAR MENOS</span>, <span className="text-blue-400 font-bold">PRODUZIR MAIS</span> E <span className="text-blue-400 font-bold">VENDER TODOS OS DIAS</span>.
                      </p>
                    </div>

                    {/* Central Diagram */}
                    <div className="my-auto py-3 bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-mono font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
                          SISTEMA IA
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-medium">
                        <div className="bg-white/5 p-1.5 rounded">🧠 Menos Esforço</div>
                        <div className="bg-white/5 p-1.5 rounded">🎯 Tráfego Inteligente</div>
                        <div className="bg-white/5 p-1.5 rounded">🤖 Vendas Automáticas</div>
                        <div className="bg-white/5 p-1.5 rounded">🕒 Mais Tempo Livre</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-blue-400 font-bold">PREGUIÇOSO SIM, INEFICIENTE NUNCA</span>
                      <span>JV</span>
                    </div>
                  </motion.div>
                )}

                {activeCover === 'neon' && (
                  <motion.div
                    key="view-neon"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col justify-between text-center"
                  >
                    <div>
                      <p className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase border-b border-white/10 pb-2 mb-3">
                        TRÁFEGO + VENDAS + IA = RESULTADOS
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight uppercase leading-none">
                        PREGUIÇOSO
                      </h3>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-display tracking-tight uppercase leading-none mb-3">
                        PRODUTIVO
                      </h3>
                    </div>

                    <div className="my-auto flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400/80 flex items-center justify-center text-blue-300 mb-2 shadow-[0_0_30px_rgba(37,99,235,0.7)]">
                        <Brain className="w-9 h-9" />
                      </div>
                      <div className="w-24 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-mono font-black text-2xl shadow-[0_0_35px_rgba(37,99,235,0.8)]">
                        IA
                      </div>
                    </div>

                    <div className="bg-blue-600 text-white rounded-xl py-3 px-4 text-xs font-bold font-display uppercase shadow-lg">
                      O GUIA PRÁTICO PARA ESCALAR RESULTADOS COM IA
                    </div>
                  </motion.div>
                )}

                {activeCover === 'minimal' && (
                  <motion.div
                    key="view-minimal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-col justify-between text-center"
                  >
                    <div>
                      <p className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase border-b border-white/10 pb-2 mb-3">
                        TRÁFEGO + VENDAS + IA = RESULTADOS
                      </p>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight uppercase leading-none">
                        PREGUIÇOSO
                      </h3>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-display tracking-tight uppercase leading-none mb-3">
                        PRODUTIVO
                      </h3>
                    </div>

                    <div className="my-auto space-y-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
                          <Brain className="w-6 h-6" />
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-2xl shadow-xl">
                          IA
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                        <div className="p-2 rounded bg-white/5">Trabalhe Menos</div>
                        <div className="p-2 rounded bg-white/5">Automatize</div>
                        <div className="p-2 rounded bg-white/5">Venda Mais</div>
                        <div className="p-2 rounded bg-white/5">Resultados Diários</div>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-blue-400 font-bold uppercase">
                      EDIÇÃO DIGITAL DEFINITIVA 2026
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] active:scale-95 cursor-pointer font-display"
          >
            <span>QUERO MEU ACESSO COMPLETO POR R$47</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

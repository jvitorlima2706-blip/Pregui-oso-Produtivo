import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Cpu, 
  Zap, 
  CheckCircle, 
  CheckCircle2,
  Maximize2, 
  X, 
  Brain, 
  TrendingUp, 
  ShoppingBag, 
  Clock, 
  Target, 
  DollarSign, 
  Layers,
  ChevronRight,
  Bot,
  Settings,
  Flame,
  Coffee,
  CheckSquare
} from 'lucide-react';

export type CoverVariant = 'lifestyle' | 'neon' | 'minimal';

interface EbookMockup3DProps {
  interactive?: boolean;
  defaultVariant?: CoverVariant;
  showSelector?: boolean;
  className?: string;
}

export const EbookMockup3D: React.FC<EbookMockup3DProps> = ({ 
  interactive = true,
  defaultVariant = 'lifestyle',
  showSelector = true,
  className = ''
}) => {
  const [variant, setVariant] = useState<CoverVariant>(defaultVariant);
  const [rotateX, setRotateX] = useState(10);
  const [rotateY, setRotateY] = useState(-18);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateY(((x - centerX) / centerX) * 18);
    setRotateX(-((y - centerY) / centerY) * 18);
  };

  const handleMouseLeave = () => {
    setRotateX(10);
    setRotateY(-18);
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      
      {/* Cover Switcher Tabs */}
      {showSelector && (
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl mb-4 text-xs font-mono z-30">
          <button
            onClick={() => setVariant('lifestyle')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              variant === 'lifestyle'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3 h-3 text-blue-300" />
            <span>Capa 3D Completa</span>
          </button>
          
          <button
            onClick={() => setVariant('neon')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              variant === 'neon'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Cpu className="w-3 h-3 text-blue-300" />
            <span>Cyber Chip IA</span>
          </button>

          <button
            onClick={() => setVariant('minimal')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              variant === 'minimal'
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Brain className="w-3 h-3 text-blue-300" />
            <span>Minimalista</span>
          </button>
        </div>
      )}

      {/* Main 3D Stage */}
      <div 
        className="relative flex items-center justify-center p-2 sm:p-4 perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background glowing aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-cyan-500/15 to-transparent rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
        
        {/* Floating Tag Top */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-4, 5, -4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-3 -right-2 sm:right-2 z-30 bg-black/80 backdrop-blur-xl border border-blue-400/40 rounded-full px-3 py-1 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="text-[11px] font-semibold text-blue-200 font-mono">EBOOK OFICIAL EM PDF</span>
        </motion.div>

        {/* Floating Tag Bottom */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [5, -4, 5] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-2 sm:left-2 z-30 bg-black/85 backdrop-blur-xl border border-white/15 rounded-xl px-3.5 py-2 shadow-2xl flex items-center gap-2.5"
        >
          <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Fórmula Validada</p>
            <p className="text-xs font-bold text-white tracking-tight">TRÁFEGO + VENDAS + IA</p>
          </div>
        </motion.div>

        {/* Zoom Button Trigger */}
        <button
          onClick={() => setIsZoomOpen(true)}
          className="absolute top-4 left-4 z-30 p-2 rounded-xl bg-black/60 hover:bg-black/90 border border-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all shadow-lg cursor-pointer group"
          title="Ver Capa em Tela Cheia"
        >
          <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {/* 3D Book Container */}
        <motion.div
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: 0,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative w-[270px] sm:w-[310px] md:w-[330px] h-[400px] sm:h-[460px] md:h-[490px] transform-style-3d cursor-grab active:cursor-grabbing"
        >
          {/* Book Spine (3D Left side) */}
          <div 
            className="absolute top-0 bottom-0 left-0 w-10 sm:w-12 bg-gradient-to-b from-[#060b1b] via-[#091538] to-[#040712] border-l border-t border-b border-blue-500/40 rounded-l-md origin-right shadow-2xl flex flex-col justify-between py-6 px-1 items-center z-10"
            style={{
              transform: 'rotateY(-90deg) translateZ(0px) translateX(-44px)',
            }}
          >
            <span className="text-[9px] tracking-widest text-blue-400 font-mono rotate-90 whitespace-nowrap uppercase font-bold">
              JV • EBOOK
            </span>
            <span className="text-[11px] font-extrabold text-white tracking-widest rotate-90 whitespace-nowrap font-display uppercase">
              PREGUIÇOSO PRODUTIVO
            </span>
            <span className="text-[9px] font-mono text-blue-300 rotate-90 whitespace-nowrap">
              TRÁFEGO • VENDAS • IA
            </span>
          </div>

          {/* Book Front Cover Canvas */}
          <div className="absolute inset-0 bg-[#030611] rounded-r-2xl rounded-l-sm border border-blue-400/40 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(37,99,235,0.25)] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {variant === 'lifestyle' && (
                <motion.div
                  key="lifestyle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden bg-gradient-to-b from-[#070e24] via-[#040817] to-[#02040a]"
                >
                  {/* Subtle Top Header */}
                  <div className="relative z-10">
                    <p className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-blue-400 text-center uppercase border-b border-white/10 pb-1.5 mb-2">
                      TRÁFEGO + VENDAS + IA = RESULTADOS
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none text-center font-display uppercase">
                      PREGUIÇOSO
                    </h2>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-500 tracking-tight leading-none text-center font-display uppercase mb-1.5">
                      PRODUTIVO
                    </h2>
                    <p className="text-[9px] text-slate-300 text-center font-medium leading-tight px-1">
                      COMO USAR INTELIGÊNCIA ARTIFICIAL PARA <span className="text-blue-400 font-bold">TRABALHAR MENOS</span>, <span className="text-blue-400 font-bold">PRODUZIR MAIS</span> E <span className="text-blue-400 font-bold">VENDER TODOS OS DIAS</span>.
                    </p>
                  </div>

                  {/* Character & Setup Visual Mockup representation */}
                  <div className="relative z-10 my-auto py-2 flex flex-col items-center">
                    
                    {/* Glowing AI Chip Centerpiece */}
                    <div className="relative mb-2 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-400 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.8)] backdrop-blur-md">
                        <Cpu className="w-6 h-6 text-blue-300" />
                        <span className="text-[11px] font-extrabold text-white font-mono tracking-widest">IA</span>
                      </div>
                      
                      {/* Radiating Circuit Lines */}
                      <div className="absolute -left-12 -right-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent -z-10" />
                    </div>

                    {/* Relaxed Entrepreneur Badges Grid */}
                    <div className="w-full grid grid-cols-2 gap-1.5 mb-2">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex items-center gap-1.5">
                        <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0">
                          <Brain className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[8px] font-bold text-white leading-none">MENOS ESFORÇO</p>
                          <p className="text-[7px] text-slate-400">Mais estratégia</p>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex items-center gap-1.5">
                        <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0">
                          <Target className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[8px] font-bold text-white leading-none">TRÁFEGO INTELIGENTE</p>
                          <p className="text-[7px] text-slate-400">Campanhas e anúncios</p>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex items-center gap-1.5">
                        <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0">
                          <Bot className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[8px] font-bold text-white leading-none">VENDAS NO AUTO</p>
                          <p className="text-[7px] text-slate-400">Funis que vendem</p>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex items-center gap-1.5">
                        <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0">
                          <Clock className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[8px] font-bold text-white leading-none">MAIS TEMPO LIVRE</p>
                          <p className="text-[7px] text-slate-400">Liberdade diária</p>
                        </div>
                      </div>
                    </div>

                    {/* Work Setup Checklist snippet */}
                    <div className="w-full bg-blue-950/60 border border-blue-400/30 rounded-lg p-2 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[8px] font-mono font-bold text-blue-300 flex items-center gap-1">
                          <CheckSquare className="w-2.5 h-2.5" />
                          SISTEMA AUTOMATIZADO:
                        </span>
                        <span className="text-[7px] bg-blue-500/20 text-blue-300 px-1 rounded font-mono">
                          100% OPERACIONAL
                        </span>
                      </div>
                      <p className="text-[8px] text-slate-300 font-medium italic">
                        "Deixe a IA fazer o pesado. Você colhe os resultados."
                      </p>
                    </div>

                  </div>

                  {/* Bottom Footer Ribbon */}
                  <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-4 rounded bg-blue-600 text-[9px] font-bold text-white flex items-center justify-center font-mono">
                        JV
                      </span>
                      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">
                        PREGUIÇOSO SIM, INEFICIENTE NUNCA
                      </span>
                    </div>
                    <span className="text-[8px] text-blue-400 font-mono font-bold">
                      EDIÇÃO COMPLETA
                    </span>
                  </div>
                </motion.div>
              )}

              {variant === 'neon' && (
                <motion.div
                  key="neon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden bg-gradient-to-b from-[#08112e] via-[#050b1d] to-[#02050f]"
                >
                  {/* Top Header */}
                  <div className="relative z-10 text-center">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-blue-400 uppercase border-b border-white/10 pb-1.5 mb-2">
                      TRÁFEGO + VENDAS + IA = RESULTADOS
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none font-display uppercase">
                      PREGUIÇOSO
                    </h2>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight leading-none font-display uppercase mb-1.5">
                      PRODUTIVO
                    </h2>
                    <p className="text-[9px] text-slate-300 font-medium leading-tight">
                      COMO USAR INTELIGÊNCIA ARTIFICIAL PARA <span className="text-blue-400 font-bold">FACILITAR SEU TRÁFEGO</span> E <span className="text-blue-400 font-bold">MULTIPLICAR SUAS VENDAS</span>
                    </p>
                  </div>

                  {/* 3D Cyber Chip & Brain Artwork */}
                  <div className="relative z-10 my-auto flex flex-col items-center">
                    <div className="relative flex flex-col items-center mb-4">
                      {/* Glowing Brain */}
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/60 flex items-center justify-center text-blue-400 mb-1 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                      >
                        <Brain className="w-7 h-7" />
                      </motion.div>

                      {/* Connector Stream */}
                      <div className="w-0.5 h-3 bg-blue-400 shadow-[0_0_8px_#60a5fa]" />

                      {/* 3D Chip */}
                      <div className="w-20 h-16 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-400 p-0.5 shadow-[0_0_30px_rgba(37,99,235,0.8)]">
                        <div className="w-full h-full bg-[#040819] rounded-[10px] flex items-center justify-center">
                          <span className="text-xl font-extrabold text-white font-mono tracking-wider">
                            IA
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="w-full space-y-1.5 text-left text-[9px] text-slate-300">
                      <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span><strong>Tráfego Inteligente:</strong> Campanhas que convertem</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span><strong>Vendas Automatizadas:</strong> Mensagens e ofertas</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Banner */}
                  <div className="relative z-10 pt-2 border-t border-white/10">
                    <div className="bg-blue-600 text-white rounded-md py-1.5 px-2 text-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                      <p className="text-[9px] font-bold uppercase font-display tracking-tight">
                        O GUIA PRÁTICO PARA ESCALAR COM IA
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {variant === 'minimal' && (
                <motion.div
                  key="minimal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden bg-gradient-to-b from-[#060b1c] to-[#020308]"
                >
                  {/* Top Header */}
                  <div className="relative z-10 text-center">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-blue-400 uppercase border-b border-white/10 pb-1.5 mb-2">
                      TRÁFEGO + VENDAS + IA = RESULTADOS
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none font-display uppercase">
                      PREGUIÇOSO
                    </h2>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight leading-none font-display uppercase mb-1.5">
                      PRODUTIVO
                    </h2>
                    <p className="text-[9px] text-slate-400 font-medium leading-tight">
                      TRABALHAR MENOS, PRODUZIR MAIS E VENDER TODOS OS DIAS.
                    </p>
                  </div>

                  {/* Minimal Icons Flow */}
                  <div className="relative z-10 my-auto flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-400/40 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        <Brain className="w-6 h-6" />
                      </div>
                      <div className="text-blue-500 font-mono font-bold text-xs">•••</div>
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold font-mono text-xl shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                        IA
                      </div>
                      <div className="text-blue-500 font-mono font-bold text-xs">•••</div>
                      <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-400/40 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* 4 Pillars Clean Grid */}
                    <div className="grid grid-cols-2 gap-2 w-full text-center">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="text-[8px] font-bold text-white uppercase block">Trabalhe Menos</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <Settings className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="text-[8px] font-bold text-white uppercase block">Automatize</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <Target className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="text-[8px] font-bold text-white uppercase block">Venda Mais</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <DollarSign className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="text-[8px] font-bold text-white uppercase block">Resultados</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Brush */}
                  <div className="relative z-10 pt-2 border-t border-white/10 text-center">
                    <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                      PREGUIÇOSO PRODUTIVO • GUIA 2026
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Holographic Gloss Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
          </div>

          {/* Book Thickness (bottom edge) */}
          <div 
            className="absolute -bottom-3 left-0 right-0 h-4 bg-gradient-to-r from-[#040713] via-slate-800 to-[#040713] rounded-b-md border-t border-slate-700 shadow-inner"
            style={{ transform: 'rotateX(90deg) translateZ(-2px)' }}
          />
        </motion.div>
      </div>

      {/* Fullscreen Zoom Modal to Inspect the 3 Covers */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl p-4 sm:p-8 flex flex-col items-center justify-center overflow-y-auto"
            onClick={() => setIsZoomOpen(false)}
          >
            <div 
              className="relative max-w-2xl w-full bg-[#05091a] border border-blue-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(37,99,235,0.4)] text-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VISUALIZAÇÃO EM ALTA RESOLUÇÃO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
                As 3 Artes Oficiais do Guia
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Todas as edições seguem o mesmo método estruturado de automação e vendas com IA.
              </p>

              {/* Cover Switcher in Modal */}
              <div className="flex justify-center gap-2 mb-6">
                <button
                  onClick={() => setVariant('lifestyle')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    variant === 'lifestyle' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  Capa 3D Completa
                </button>
                <button
                  onClick={() => setVariant('neon')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    variant === 'neon' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  Cyber Chip Neon
                </button>
                <button
                  onClick={() => setVariant('minimal')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    variant === 'minimal' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  Minimalista
                </button>
              </div>

              {/* Large Cover Preview */}
              <div className="flex justify-center mb-6">
                <div className="w-[300px] sm:w-[360px] aspect-[2/3] rounded-2xl border-2 border-blue-400/50 shadow-2xl overflow-hidden">
                  {variant === 'lifestyle' && (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#0a1538] via-[#040817] to-[#02040a] text-center">
                      <div>
                        <p className="text-[11px] font-mono font-bold text-blue-400 tracking-widest border-b border-white/10 pb-2 mb-3">
                          TRÁFEGO + VENDAS + IA = RESULTADOS
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">PREGUIÇOSO</h2>
                        <h2 className="text-3xl sm:text-4xl font-black text-blue-400 font-display mb-2">PRODUTIVO</h2>
                        <p className="text-xs text-slate-300 leading-tight">
                          COMO USAR INTELIGÊNCIA ARTIFICIAL PARA TRABALHAR MENOS, PRODUZIR MAIS E VENDER TODOS OS DIAS.
                        </p>
                      </div>

                      <div className="py-4 space-y-2">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600/30 border-2 border-blue-400 flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.8)]">
                          <Cpu className="w-8 h-8 text-blue-300" />
                          <span className="font-mono font-extrabold text-sm">IA</span>
                        </div>
                        <p className="text-xs font-bold text-blue-300 italic">
                          "Deixe a IA fazer o pesado. Você colhe os resultados."
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                        <span>JV • AUTOR</span>
                        <span className="font-mono text-blue-400">100% PRÁTICO</span>
                      </div>
                    </div>
                  )}

                  {variant === 'neon' && (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#0c1840] via-[#060c22] to-[#02050f] text-center">
                      <div>
                        <p className="text-[11px] font-mono font-bold text-blue-400 tracking-widest border-b border-white/10 pb-2 mb-3">
                          TRÁFEGO + VENDAS + IA = RESULTADOS
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">PREGUIÇOSO</h2>
                        <h2 className="text-3xl sm:text-4xl font-black text-blue-400 font-display mb-2">PRODUTIVO</h2>
                        <p className="text-xs text-slate-300 leading-tight">
                          COMO USAR IA PARA FACILITAR SEU TRÁFEGO E MULTIPLICAR SUAS VENDAS.
                        </p>
                      </div>

                      <div className="py-4 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 mb-2">
                          <Brain className="w-8 h-8" />
                        </div>
                        <div className="w-24 h-18 rounded-xl bg-blue-600 flex items-center justify-center text-white font-mono font-black text-2xl shadow-[0_0_30px_rgba(37,99,235,0.7)]">
                          IA
                        </div>
                      </div>

                      <div className="bg-blue-600 text-white rounded-lg py-2 text-xs font-bold font-display uppercase">
                        O GUIA PRÁTICO PARA ESCALAR COM IA
                      </div>
                    </div>
                  )}

                  {variant === 'minimal' && (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-b from-[#081026] to-[#020308] text-center">
                      <div>
                        <p className="text-[11px] font-mono font-bold text-blue-400 tracking-widest border-b border-white/10 pb-2 mb-3">
                          TRÁFEGO + VENDAS + IA = RESULTADOS
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-black text-white font-display">PREGUIÇOSO</h2>
                        <h2 className="text-3xl sm:text-4xl font-black text-blue-400 font-display mb-2">PRODUTIVO</h2>
                      </div>

                      <div className="flex items-center justify-center gap-4 py-6">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
                          <Brain className="w-8 h-8" />
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-2xl shadow-xl">
                          IA
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
                          <TrendingUp className="w-8 h-8" />
                        </div>
                      </div>

                      <div className="text-xs font-mono text-blue-400 font-bold uppercase">
                        PREGUIÇOSO PRODUTIVO • EDIÇÃO 2026
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsZoomOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-all"
              >
                Fechar Visualização
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Gift,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HERO_DATA, BONUS_DATA } from '../data/content';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [copiedPix, setCopiedPix] = useState(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState('');
  const [showUrlConfig, setShowUrlConfig] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (customCheckoutUrl.trim().startsWith('http')) {
      window.open(customCheckoutUrl, '_blank');
      onClose();
      return;
    }

    setStep('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#0066ff', '#ffffff']
    });
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136preguicoso-produtivo-4700520400005303986540547.005802BR5920PREGUICOSO PRODUTIVO6009SAO PAULO62070503***6304E1F8');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const resetModal = () => {
    setStep('form');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-[#080d22] rounded-3xl border border-blue-400/40 p-6 sm:p-8 shadow-2xl shadow-blue-950/60 overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={resetModal}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 border border-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'form' ? (
            <div>
              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  CHECKOUT SEGURO • 7 DIAS DE GARANTIA
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-1">
                Ebook Preguiçoso Produtivo
              </h3>
              <p className="text-xs text-slate-300 mb-4">
                Receba seu acesso e os 3 bônus exclusivos imediatamente por e-mail:
              </p>

              {/* Order Summary Box */}
              <div className="bg-[#050814] rounded-2xl border border-blue-500/30 p-4 mb-5">
                <div className="space-y-1.5 text-xs text-slate-300 mb-3 pb-3 border-b border-white/10">
                  <div className="flex justify-between font-semibold text-white">
                    <span>1x E-book Preguiçoso Produtivo</span>
                    <span className="text-slate-400 line-through">R$ 147,00</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span className="flex items-center gap-1">
                      <Gift className="w-3 h-3" /> Bônus 1: Tráfego Pago p/ Iniciantes
                    </span>
                    <span className="font-bold text-emerald-400">GRÁTIS</span>
                  </div>
                  <div className="flex justify-between text-cyan-300">
                    <span className="flex items-center gap-1">
                      <Gift className="w-3 h-3" /> Bônus 2: Ideias de Produtos p/ Internet
                    </span>
                    <span className="font-bold text-emerald-400">GRÁTIS</span>
                  </div>
                  <div className="flex justify-between text-amber-300">
                    <span className="flex items-center gap-1">
                      <Gift className="w-3 h-3" /> Bônus 3: O Produto Secreto
                    </span>
                    <span className="font-bold text-amber-400">GRÁTIS</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span className="font-display">Total com 70% OFF:</span>
                  <span className="text-2xl font-extrabold text-cyan-300 font-mono">R$ 47,00</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-blue-600/30 border-blue-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-cyan-400" />
                  <span>PIX (Instantâneo)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-blue-600/30 border-blue-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-blue-400" />
                  <span>Cartão de Crédito</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentMethod === 'boleto'
                      ? 'bg-blue-600/30 border-blue-400 text-cyan-300 font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Boleto Bancário</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSimulatePayment} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#050814] border border-slate-700 focus:border-blue-400 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email para receber o Ebook e os 3 Bônus
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#050814] border border-slate-700 focus:border-blue-400 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all text-white font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer font-display uppercase tracking-wider"
                >
                  <Lock className="w-4 h-4" />
                  <span>LIBERAR ACESSO IMEDIATO POR R$ 47,00</span>
                </button>
              </form>

              {/* Custom Checkout URL configuration */}
              <div className="mt-3 pt-3 border-t border-slate-800 text-center">
                <button
                  type="button"
                  onClick={() => setShowUrlConfig(!showUrlConfig)}
                  className="text-[11px] text-slate-400 hover:text-cyan-300 font-mono transition-colors"
                >
                  ⚙️ Inserir link de checkout externo (Kiwify / Hotmart / Braip)
                </button>

                {showUrlConfig && (
                  <div className="mt-2 p-3 bg-[#050814] rounded-xl border border-slate-800 text-left">
                    <label className="block text-[11px] text-slate-400 mb-1 font-mono">
                      URL da sua página de pagamento:
                    </label>
                    <input
                      type="url"
                      placeholder="https://pay.kiwify.com.br/..."
                      value={customCheckoutUrl}
                      onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-cyan-300 font-mono placeholder-slate-600 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Security badges */}
              <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-cyan-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Garantia 7 Dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Acesso Imediato
                </span>
              </div>
            </div>
          ) : (
            /* Success View */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                Pedido Criado com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-sm mx-auto">
                Efetue o pagamento via PIX para liberar o download do <strong>Preguiçoso Produtivo</strong> e os <strong>3 Bônus Oficiais</strong> no email <strong>{formData.email || 'cadastrado'}</strong>.
              </p>

              {/* PIX QR code mock */}
              <div className="p-4 bg-white rounded-2xl max-w-[200px] mx-auto mb-4 shadow-lg">
                <div className="w-full aspect-square bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 relative overflow-hidden">
                  <QrCode className="w-36 h-36 text-white" />
                </div>
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  onClick={copyPixCode}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors cursor-pointer"
                >
                  {copiedPix ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPix ? 'CÓDIGO PIX COPIADO!' : 'COPIAR CÓDIGO PIX COPIA E COLA'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={resetModal}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Voltar à Página
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

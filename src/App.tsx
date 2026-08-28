import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PatternBreakSection } from './components/PatternBreakSection';
import { DifferentialSection } from './components/DifferentialSection';
import { SocialProofSection } from './components/SocialProofSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { CHECKOUT_URL } from './data/content';

export default function App() {
  const handleOpenCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200 font-sans relative overflow-hidden">
      {/* Ambient Luminous Light Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-[45%] left-[-10%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Streamlined Sales Page Flow */}
      <main id="main-content">
        {/* 1. A Isca (Hero Section com Promessa 10 min/dia, R$1.000 1º mês, Sem Plano PRO + 3D Mockup) */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 2. A Dor (A Realidade do Trabalho Manual vs A Solução da IA) */}
        <PatternBreakSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. O Produto & A Cura (Para Produto Físico, Infoproduto e Serviços) */}
        <DifferentialSection onOpenCheckout={handleOpenCheckout} />

        {/* 4. A Prova Social (Depoimentos de Resultados Reais) */}
        <SocialProofSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. Os 3 Bônus Oficiais (Tráfego Iniciantes, Ideias de Produtos, Produto Secreto) */}
        <BonusSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. A Oferta Imperdível (De R$147 por R$47 com 70% OFF) */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* 8. Perguntas Frequentes (FAQ Essencial) */}
        <FaqSection />
      </main>

      {/* Footer com avisos legais e segurança */}
      <Footer />

      {/* Sticky CTA Bar on Mobile devices */}
      <StickyMobileCta onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}

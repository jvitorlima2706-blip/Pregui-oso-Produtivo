import React from 'react';
import { ShieldCheck, Zap, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03050c] text-slate-400 text-xs py-14 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0a122c] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-extrabold text-white font-display tracking-wider uppercase text-sm">
                PREGUIÇOSO PRODUTIVO
              </span>
              <span className="text-[10px] text-slate-500 block font-mono">
                IA Aplicada a Negócios Digitais
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs">
            <a href="#diferenciais" className="hover:text-cyan-400 transition-colors">Diferenciais</a>
            <a href="#conteudo" className="hover:text-cyan-400 transition-colors">Conteúdo</a>
            <a href="#metodo" className="hover:text-cyan-400 transition-colors">Método</a>
            <a href="#autor" className="hover:text-cyan-400 transition-colors">Autor</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Dúvidas</a>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="py-8 space-y-3 text-[11px] text-slate-300 leading-relaxed border-b border-slate-800/60">
          <p>
            <strong>Aviso Legal de Responsabilidade:</strong> As estratégias, ferramentas de inteligência artificial e metodologias ensinadas no ebook Preguiçoso Produtivo têm caráter educacional e prático. A aplicação dos conceitos requer execução consistente por parte do leitor. Não garantimos faturamentos fixos ou lucros automáticos, pois os resultados dependem da dedicação, nicho de mercado e qualidade da execução de cada profissional.
          </p>
          <p>
            Este produto digital não tem qualquer vínculo institucional com OpenAI, Anthropic, Google, Meta, Facebook ou Instagram. Todas as marcas citadas pertencem aos seus respectivos proprietários.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <p>
            © {new Date().getFullYear()} Preguiçoso Produtivo — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span>Desenvolvido com foco em alta conversão</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">João Vitor</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, Search, MessageSquareCode } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Negócio', 'Ferramentas', 'Conteúdo', 'Acesso'];

  const filteredFaq = FAQ_DATA.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#070b18] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1633] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            DÚVIDAS <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FREQUENTES</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Encontre respostas rápidas e claras sobre o ebook, acesso, compatibilidade e aplicação prática.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-10 space-y-4">
          {/* Search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Digite sua dúvida (ex: ChatGPT, produto físico, garantia, acesso...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#0a1128] border border-slate-800 focus:border-cyan-500/50 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-[#050711] font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-[#0a1128] text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaq.length === 0 ? (
            <div className="text-center py-12 bg-[#090f24] rounded-2xl border border-slate-800 text-slate-400 text-sm">
              Nenhuma pergunta encontrada com o termo "{searchTerm}".
            </div>
          ) : (
            filteredFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#0c1533] border-cyan-500/40 shadow-lg shadow-cyan-950/40' 
                      : 'bg-[#080d21] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 shrink-0">
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white font-display">
                        {item.question}
                      </h3>
                    </div>
                    
                    <div className={`p-1 rounded-lg bg-slate-900 border border-slate-800 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

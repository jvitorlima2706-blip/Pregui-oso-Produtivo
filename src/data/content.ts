import { 
  DifferentialCategory, 
  EbookModule, 
  PainPoint, 
  MethodStep, 
  TestimonialPlaceholder, 
  ObjectionItem, 
  FaqItem, 
  BonusPlaceholder 
} from '../types';

export const CHECKOUT_URL = "https://pay.cakto.com.br/396uoq9";

export const HERO_DATA = {
  badge: "MÉTODO PRÁTICO COM IA 100% GRATUITA",
  headline: "Com 10 minutos por dia, lucre no mínimo R$ 1.000 no seu primeiro mês com IA.",
  subheadline: "Descubra como colocar a Inteligência Artificial para trabalhar por você — sem precisar contratar nenhuma ferramenta paga ou assinar planos PRO. Crie anúncios, copies, produtos e vendas diárias no piloto automático.",
  hookPill: "⚡ 10 min/dia • Sem Plano PRO • Mínimo R$ 1.000 no 1º mês",
  ctaText: "QUERO LUCRAR NO MÍNIMO R$ 1.000 COM IA",
  priceOriginal: 147,
  priceCurrent: 47,
  economy: 100,
  microcopy: "Sem mensalidades de ferramentas caras. Aplique hoje mesmo com IA gratuita em celulares, tablets ou computadores.",
  guaranteeBadge: "Garantia Incondicional de 7 Dias • Acesso Imediato",
  targetAudienceTag: "Produtos Físicos • Infoprodutos • Serviços",
  checkoutUrl: CHECKOUT_URL
};

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "pain-1",
    pain: "Passar horas na frente da tela sem saber o que postar ou vender",
    solution: "A IA gera dezenas de ideias de produtos, copies e ganchos magnéticos em segundos."
  },
  {
    id: "pain-2",
    pain: "Achar que precisa pagar assinaturas caras de IA (Planos PRO) para ter resultados",
    solution: "Nosso método ensina a extrair o máximo das ferramentas 100% gratuitas disponíveis hoje."
  },
  {
    id: "pain-3",
    pain: "Não ter tempo sobrando para criar campanhas, mensagens e anúncios",
    solution: "Com apenas 10 minutos por dia você programa toda a sua operação de vendas."
  },
  {
    id: "pain-4",
    pain: "Medo de queimar dinheiro em tráfego pago sem saber como começar",
    solution: "Receba o passo a passo para iniciantes e comece com anúncios que realmente convertem."
  }
];

export const DIFFERENTIAL_CATEGORIES: DifferentialCategory[] = [
  {
    id: "fisico",
    title: "PRODUTO FÍSICO & E-COMMERCE",
    badge: "🛒 Lojas, Dropshipping & Físicos",
    iconName: "ShoppingBag",
    description: "Crie anúncios irresistíveis, páginas de produtos e descrições de alta conversão em minutos.",
    accentColor: "from-blue-600 to-cyan-500",
    useCases: [
      "Anúncios prontos para Meta e Google Ads",
      "Descrições e copies que quebram objeções de frete e preço",
      "Ideias de ofertas e promoções sazonais lucrativas"
    ]
  },
  {
    id: "infoproduto",
    title: "INFOPRODUTOS & AFILIADOS",
    badge: "📚 Cursos, E-books & Afiliados",
    iconName: "BookOpenCheck",
    description: "Multiplique criativos, páginas de vendas, roteiros de vídeos e sequências de mensagens.",
    accentColor: "from-cyan-500 to-emerald-400",
    useCases: [
      "Páginas de vendas e roteiros de VSL magnéticos",
      "Variações infinitas de criativos para testes rápidos",
      "Sequências automáticas de recuperação de vendas"
    ]
  },
  {
    id: "servicos",
    title: "SERVIÇOS & PROFISSIONAIS",
    badge: "💼 Consultorias, Agências & Autônomos",
    iconName: "Briefcase",
    description: "Automatize sua prospecção de clientes e crie propostas comerciais de alto valor.",
    accentColor: "from-blue-500 to-indigo-500",
    useCases: [
      "Scripts de abordagem para WhatsApp e Instagram",
      "Propostas comerciais que fecham contratos no mesmo dia",
      "Conteúdos que atraem clientes qualificados"
    ]
  }
];

export const EBOOK_MODULES: EbookModule[] = [
  {
    id: "mod-1",
    number: "01",
    icon: "Brain",
    title: "IA Gratuita & Produtividade",
    tagline: "Como operar sem gastar 1 centavo com ferramentas",
    description: "Aprenda a configurar e instruir a IA gratuita para agir como seu melhor funcionário 24 horas por dia.",
    highlights: [
      "Engenharia de comandos sem complicação técnica",
      "Como usar ferramentas 100% gratuitas sem precisar de plano PRO",
      "A rotina de 10 minutos diários"
    ]
  },
  {
    id: "mod-2",
    number: "02",
    icon: "TrendingUp",
    title: "Máquina de Vendas Diárias",
    tagline: "Funis rápidos para lucrar R$ 1.000+ no 1º mês",
    description: "Estruture ofertas simples e diretas que começam a colocar dinheiro no seu bolso desde a primeira semana.",
    highlights: [
      "Funis de conversão rápida no WhatsApp e Instagram",
      "Scripts de fechamento que quebram qualquer objeção",
      "Como vender sem precisar aparecer se preferir"
    ]
  },
  {
    id: "mod-3",
    number: "03",
    icon: "PenTool",
    title: "Copywriting & Anúncios Lucrativos",
    tagline: "Textos que atraem, convencem e vendem",
    description: "Gere copies persuasivas, títulos magnéticos e anúncios que convertem cliques em dinheiro na sua conta.",
    highlights: [
      "Fórmulas consagradas aplicadas com IA em 3 minutos",
      "Ganchos que prendem a atenção nos primeiros 3 segundos",
      "Criativos prontos para testar e escalar"
    ]
  }
];

export const TRANSFORMATION_COMPARISON = [
  {
    before: "Horas pensando em ideias de posts e anúncios.",
    after: "Ideias e roteiros validados em 30 segundos com IA."
  },
  {
    before: "Gastar dinheiro com assinaturas caras e planos PRO.",
    after: "Faturar alto usando ferramentas 100% gratuitas."
  },
  {
    before: "Medo de anunciar e perder dinheiro.",
    after: "Campanhas estruturadas com método validado para iniciantes."
  }
];

export const TESTIMONIALS_DATA: TestimonialPlaceholder[] = [
  {
    id: "test-1",
    quote: "Eu não entendia nada de IA e achava que precisava pagar plano PRO caro. Com 10 minutos por dia apliquei no meu negócio e fiz R$ 1.480 logo no primeiro mês!",
    author: "Rafael Santos",
    role: "Empreendedor Digital",
    segment: "Afiliado & Infoproduto",
    verified: true,
    metricPlaceholder: "R$ 1.480 no 1º mês"
  },
  {
    id: "test-2",
    quote: "O método é direto ao ponto. Em vez de passar horas sofrendo para criar anúncios, usei os comandos prontos e minhas vendas de serviços dobraram.",
    author: "Camila Ribeiro",
    role: "Prestadora de Serviços",
    segment: "Serviços & Consultoria",
    verified: true,
    metricPlaceholder: "+12 novos clientes"
  },
  {
    id: "test-3",
    quote: "Os bônus de Tráfego Pago e Ideias de Produtos já valem 10x o valor do ebook. Com apenas R$47 mudei completamente a minha rotina.",
    author: "Marcos Vinicius",
    role: "E-commerce & Drop",
    segment: "Produto Físico",
    verified: true,
    metricPlaceholder: "R$ 2.350 em 3 semanas"
  }
];

export const OBJECTIONS_DATA: ObjectionItem[] = [
  {
    id: "obj-1",
    question: "Preciso pagar plano PRO ou contratar IA cara?",
    answer: "Não! Você aplica 100% com ferramentas gratuitas disponíveis para qualquer pessoa.",
    icon: "Sparkles"
  },
  {
    id: "obj-2",
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "Apenas 10 minutos diários para configurar seus comandos e direcionar as criações.",
    icon: "Clock"
  },
  {
    id: "obj-3",
    question: "Como funciona a garantia de 7 dias?",
    answer: "Se em até 7 dias você não gostar, devolvemos 100% do valor pago.",
    icon: "ShieldCheck"
  }
];

export const BONUS_DATA: BonusPlaceholder[] = [
  {
    id: "bonus-1",
    slot: "BÔNUS 01",
    title: "E-book de Tráfego Pago para Iniciantes",
    badge: "Incluso Grátis",
    description: "O guia prático definitivo para colocar seus primeiros anúncios no ar no Meta Ads e Google Ads com segurança, sem queimar orçamento e atraindo compradores reais.",
    status: "R$ 97,00 (Grátis Hoje)"
  },
  {
    id: "bonus-2",
    slot: "BÔNUS 02",
    title: "E-book de Ideias de Produtos para Vendas na Internet",
    badge: "Incluso Grátis",
    description: "Uma curadoria detalhada e validada com as melhores ideias e nichos de produtos físicos, digitais e serviços para começar a vender online imediatamente.",
    status: "R$ 67,00 (Grátis Hoje)"
  },
  {
    id: "bonus-3",
    slot: "BÔNUS 03",
    title: "O Produto Secreto",
    badge: "Acesso Exclusivo",
    description: "Um material confidencial que será revelado diretamente na sua área de membros assim que você garantir sua vaga, projetado para acelerar ainda mais seus lucros.",
    status: "Inestimável (Grátis Hoje)"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Geral",
    question: "Preciso pagar plano PRO ou contratar ferramentas pagas de IA?",
    answer: "Não! Você não precisa gastar nenhum centavo com assinaturas. O método foi desenhado para ser 100% aplicado com as ferramentas gratuitas mais poderosas do mercado (como ChatGPT gratuito, Gemini e outras)."
  },
  {
    id: "faq-2",
    category: "Resultados",
    question: "Como funciona a promessa de R$ 1.000 no primeiro mês com 10 min/dia?",
    answer: "Ao eliminar o trabalho manual e aplicar os roteiros prontos de vendas, criação de anúncios e prospecção com IA, você coloca ofertas validadas no ar todos os dias gastando apenas 10 minutos diários, o que permite gerar no mínimo R$ 1.000 de lucro logo nas primeiras semanas."
  },
  {
    id: "faq-3",
    category: "Garantia",
    question: "Como funciona a Garantia de 7 Dias?",
    answer: "Você tem 7 dias de garantia incondicional. Se você acessar o material, ler e por qualquer motivo achar que não é para você, basta enviar um único email e devolveremos 100% do seu dinheiro, sem perguntas e sem letras miúdas."
  },
  {
    id: "faq-4",
    category: "Bônus",
    question: "Quais bônus eu vou receber hoje?",
    answer: "Você recebe gratuitamente: 1) E-book de Tráfego Pago para Iniciantes; 2) E-book de Ideias de Produtos para Vendas na Internet; 3) O Produto Secreto exclusivo na sua área de membros."
  },
  {
    id: "faq-5",
    category: "Acesso",
    question: "Como e quando recebo o acesso ao material?",
    answer: "O acesso é imediato! Assim que o pagamento de R$ 47 for confirmado (no PIX é instantâneo), você receberá um email com os links para download dos e-books e acesso à área de membros com os bônus."
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    step: 1,
    label: "DIREÇÃO",
    action: "Escolha seu nicho ou produto",
    role: "human",
    description: "Você define o que deseja vender (ou usa nosso catálogo de ideias)."
  },
  {
    step: 2,
    label: "IA GRATUITA",
    action: "10 minutos de comando",
    role: "ai",
    description: "A IA cria seus anúncios, copies e roteiros de vendas instantaneamente."
  },
  {
    step: 3,
    label: "TRÁFEGO",
    action: "Coloque para rodar",
    role: "human",
    description: "Use o guia para iniciantes e alcance clientes prontos para comprar."
  },
  {
    step: 4,
    label: "LUCRO",
    action: "Mínimo R$ 1.000 no mês",
    role: "human",
    description: "Vendas caindo diariamente enquanto você mantém sua rotina livre."
  }
];

export const AUTHOR_DATA = {
  name: "João Vitor",
  role: "Especialista em Tráfego Pago, IA e Negócios Digitais",
  bio: "João Vitor atua diariamente gerenciando campanhas e estruturando processos de vendas com IA. Criou o Preguiçoso Produtivo para provar que você não precisa de ferramentas caras nem de 10 horas por dia para faturar alto na internet."
};

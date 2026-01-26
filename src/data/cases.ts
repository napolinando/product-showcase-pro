export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  metrics: string;
  context: string;
  problem: string;
  objective: string;
  role: string;
  solution: string;
  results: string[];
  tools: string[];
}

export const cases: CaseStudy[] = [
  {
    id: 'transformacao-digital-varejo',
    title: 'Transformação Digital no Varejo',
    client: 'Grande Rede Varejista',
    description: 'Liderança na modernização do sistema de vendas omnichannel, integrando canais físicos e digitais.',
    tags: ['E-commerce', 'Omnichannel', 'Salesforce', 'Scrum'],
    metrics: '+40% em vendas online',
    context: 'Uma das maiores redes de varejo do Brasil enfrentava desafios na integração entre lojas físicas e o canal digital, resultando em experiências fragmentadas para os clientes.',
    problem: 'Sistemas legados desconectados, falta de visibilidade do estoque em tempo real e processos manuais que causavam erros e atrasos nas operações omnichannel.',
    objective: 'Criar uma experiência de compra unificada que permitisse aos clientes comprar em qualquer canal e receber/retirar da forma mais conveniente.',
    role: 'Como Product Owner, liderei a definição do roadmap do produto, priorizei features com base em impacto de negócio e coordenei um time de 12 pessoas entre desenvolvedores, designers e analistas.',
    solution: 'Implementação de uma plataforma omnichannel integrada com Salesforce Commerce Cloud, incluindo gestão de estoque em tempo real, ship-from-store e click & collect.',
    results: [
      'Aumento de 40% nas vendas do canal digital em 6 meses',
      'Redução de 60% no tempo de processamento de pedidos omnichannel',
      'NPS do cliente aumentou de 45 para 72 pontos',
      'ROI do projeto alcançado em 8 meses',
    ],
    tools: ['Salesforce Commerce Cloud', 'Jira', 'Confluence', 'Miro', 'Google Analytics'],
  },
  {
    id: 'app-financeiro-b2b',
    title: 'Aplicativo Financeiro B2B',
    client: 'Fintech Scale-up',
    description: 'Desenvolvimento de aplicativo de gestão financeira para pequenas e médias empresas.',
    tags: ['Fintech', 'Mobile', 'Azure DevOps', 'Kanban'],
    metrics: '50k usuários ativos',
    context: 'Startup em rápido crescimento precisava evoluir seu MVP para uma plataforma robusta capaz de atender milhares de PMEs.',
    problem: 'O produto inicial tinha limitações técnicas e de usabilidade que impediam o crescimento escalável. Alta taxa de churn e baixo engajamento dos usuários.',
    objective: 'Redesenhar a experiência do usuário e a arquitetura do produto para suportar crescimento de 10x na base de clientes.',
    role: 'Atuei como PO principal, definindo a visão do produto, conduzindo discovery com usuários e priorizando o backlog com base em dados de uso e feedback direto.',
    solution: 'Redesign completo do app com foco em jobs-to-be-done, implementação de onboarding guiado, dashboard personalizado e integrações bancárias via Open Banking.',
    results: [
      'Crescimento de 5k para 50k usuários ativos em 12 meses',
      'Redução de 35% no churn rate',
      'Tempo médio de onboarding reduzido de 15 para 4 minutos',
      'Avaliação de 4.7 estrelas nas app stores',
    ],
    tools: ['Azure DevOps', 'Figma', 'Amplitude', 'Hotjar', 'Firebase'],
  },
  {
    id: 'plataforma-educacional',
    title: 'Plataforma Educacional',
    client: 'EdTech Nacional',
    description: 'Criação de plataforma de ensino adaptativo com gamificação para educação básica.',
    tags: ['EdTech', 'Gamificação', 'Web App', 'Scrum'],
    metrics: '+200k alunos impactados',
    context: 'Empresa de tecnologia educacional buscava criar uma solução que aumentasse o engajamento dos alunos e melhorasse os resultados de aprendizagem.',
    problem: 'Plataformas tradicionais apresentavam altas taxas de abandono e baixo engajamento. Professores tinham dificuldade em acompanhar o progresso individual dos alunos.',
    objective: 'Desenvolver uma plataforma de aprendizagem adaptativa que personalizasse a jornada de cada aluno e fornecesse insights acionáveis para educadores.',
    role: 'Liderei o produto desde a fase de discovery até o lançamento, trabalhando próximo a pedagogos, designers e desenvolvedores para criar uma experiência de aprendizado engajadora.',
    solution: 'Plataforma com algoritmo de aprendizagem adaptativa, sistema de gamificação com conquistas e rankings, e dashboard analítico para professores e gestores.',
    results: [
      'Mais de 200.000 alunos utilizando a plataforma',
      'Aumento de 65% no tempo de engajamento por sessão',
      'Melhoria de 25% nas notas de avaliações padronizadas',
      'Adoção por 500+ escolas em 2 anos',
    ],
    tools: ['Jira', 'Notion', 'Figma', 'Mixpanel', 'Google BigQuery'],
  },
  {
    id: 'automacao-processos-industria',
    title: 'Automação de Processos Industriais',
    client: 'Indústria Multinacional',
    description: 'Sistema de automação e monitoramento de processos de produção com IoT e analytics.',
    tags: ['Indústria 4.0', 'IoT', 'Analytics', 'SAFe'],
    metrics: '-30% em custos operacionais',
    context: 'Multinacional industrial buscava aumentar eficiência operacional e reduzir custos através da digitalização de processos produtivos.',
    problem: 'Processos manuais de monitoramento, falta de visibilidade em tempo real da produção e manutenções reativas que causavam paradas não planejadas.',
    objective: 'Implementar solução de Indústria 4.0 que permitisse monitoramento em tempo real, manutenção preditiva e otimização contínua dos processos.',
    role: 'Como PO em um contexto SAFe, coordenei múltiplos times, alinhou prioridades com o Product Management e garantiu a entrega incremental de valor em sprints de 2 semanas.',
    solution: 'Plataforma de IoT industrial com sensores conectados, dashboards de monitoramento em tempo real, alertas inteligentes e módulo de manutenção preditiva com ML.',
    results: [
      'Redução de 30% nos custos operacionais em 18 meses',
      'Diminuição de 70% em paradas não planejadas',
      'ROI de 3x sobre o investimento inicial',
      'Expansão para 5 plantas industriais',
    ],
    tools: ['Azure IoT Hub', 'Power BI', 'SAP', 'Azure DevOps', 'Teams'],
  },
];

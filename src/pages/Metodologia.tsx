import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { 
  RefreshCw, 
  Kanban, 
  FileText, 
  Map, 
  ClipboardList, 
  Target,
  LayoutDashboard,
  Database,
  MessageSquare,
  PenTool,
  BarChart3,
  Users
} from 'lucide-react';

const methodologies = [
  {
    icon: RefreshCw,
    name: 'Scrum',
    description: 'Framework ágil para entregas iterativas com sprints, dailies, reviews e retrospectivas.',
  },
  {
    icon: Kanban,
    name: 'Kanban',
    description: 'Gestão visual do fluxo de trabalho com foco em limitar WIP e otimizar lead time.',
  },
  {
    icon: Target,
    name: 'SAFe',
    description: 'Scaled Agile Framework para coordenação de múltiplos times em projetos enterprise.',
  },
];

const tools = [
  { icon: LayoutDashboard, name: 'Jira', category: 'Gestão' },
  { icon: Database, name: 'Azure DevOps', category: 'Gestão' },
  { icon: MessageSquare, name: 'Confluence', category: 'Documentação' },
  { icon: FileText, name: 'Notion', category: 'Documentação' },
  { icon: PenTool, name: 'Miro', category: 'Colaboração' },
  { icon: PenTool, name: 'Figma', category: 'Design' },
  { icon: BarChart3, name: 'Amplitude', category: 'Analytics' },
  { icon: Users, name: 'Salesforce', category: 'CRM' },
];

const artifacts = [
  {
    icon: Map,
    name: 'Product Roadmap',
    description: 'Visão estratégica do produto alinhada aos objetivos de negócio, com marcos e entregas planejadas.',
  },
  {
    icon: FileText,
    name: 'User Stories',
    description: 'Histórias de usuário bem escritas com critérios de aceite claros, seguindo o padrão "Como... Eu quero... Para que...".',
  },
  {
    icon: ClipboardList,
    name: 'Product Backlog',
    description: 'Lista priorizada de features, melhorias e correções, refinada continuamente com base em feedback e métricas.',
  },
  {
    icon: Target,
    name: 'OKRs de Produto',
    description: 'Objectives and Key Results que conectam a estratégia do produto aos resultados mensuráveis esperados.',
  },
  {
    icon: BarChart3,
    name: 'Métricas e KPIs',
    description: 'Definição e acompanhamento de indicadores como NPS, Churn, LTV, Time-to-Value e Feature Adoption.',
  },
  {
    icon: Users,
    name: 'Personas e Jobs-to-be-Done',
    description: 'Documentação de personas e jobs para garantir que as soluções atendam às necessidades reais dos usuários.',
  },
];

const Metodologia = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container-section">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Forma de Trabalho
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como eu trabalho
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Metodologias, ferramentas e artefatos que utilizo para garantir entregas 
              de qualidade, alinhadas à estratégia e com foco em valor para o negócio.
            </p>
          </div>

          {/* Methodologies */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Metodologias</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {methodologies.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Ferramentas</h2>
            <div className="p-8 rounded-2xl bg-secondary/30 animate-fade-in-up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover-lift"
                    style={{ animationDelay: `${0.05 * index}s` }}
                  >
                    <tool.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">{tool.name}</p>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Artifacts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Artefatos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artifacts.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Metodologia;

import { LayoutDashboard, Users, BarChart3, GitBranch, MessageSquare, Target } from 'lucide-react';

const differentials = [
  {
    icon: LayoutDashboard,
    title: 'Gestão Além do Backlog',
    description: 'Atuo na visão estratégica do produto, não apenas na gestão de tarefas. Conecto roadmap, métricas e objetivos de negócio.',
  },
  {
    icon: Users,
    title: 'Interface com Stakeholders',
    description: 'Facilito a comunicação entre times técnicos e áreas de negócio, traduzindo necessidades em requisitos claros.',
  },
  {
    icon: BarChart3,
    title: 'Foco em Métricas',
    description: 'Decisões baseadas em dados. Defino e acompanho KPIs que demonstram o valor real entregue pelo produto.',
  },
  {
    icon: GitBranch,
    title: 'Metodologias Ágeis',
    description: 'Experiência prática com Scrum, Kanban e frameworks híbridos, adaptando a metodologia ao contexto do time.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação Clara',
    description: 'User Stories bem escritas, critérios de aceite precisos e documentação que facilita o desenvolvimento.',
  },
  {
    icon: Target,
    title: 'Priorização Estratégica',
    description: 'Utilizo frameworks como RICE, MoSCoW e Kano para priorizar features com base em impacto e esforço.',
  },
];

export function StrategicPositioning() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Posicionamento Estratégico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que me diferencia como Product Owner
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma combinação de visão estratégica, habilidades técnicas e foco 
            constante em entrega de valor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

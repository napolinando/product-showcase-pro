import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Definição de visão de produto alinhada aos objetivos de negócio',
  'Priorização estratégica baseada em valor e impacto',
  'Gestão de stakeholders em múltiplos níveis',
  'Métricas e KPIs para tomada de decisão',
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experiência sólida em 
              <span className="text-primary"> gestão de produto</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com sólida experiência na definição de visão de produto, priorização estratégica 
              e entrega de soluções que geram valor real, atuo na interface entre negócio e 
              tecnologia com foco em eficiência e escalabilidade.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem combina pensamento estratégico com execução prática, garantindo 
              que cada decisão de produto esteja alinhada aos objetivos do negócio e às 
              necessidades reais dos usuários.
            </p>
            
            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
              <div className="relative w-4/5 h-4/5 rounded-xl bg-card shadow-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">N</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Fernando</p>
                  <p className="text-sm text-muted-foreground">Product Owner</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

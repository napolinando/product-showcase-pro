import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CaseCard } from '@/components/CaseCard';
import { cases } from '@/data/cases';

const Cases = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container-section">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cases de Sucesso
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma seleção de projetos onde atuei como Product Owner, demonstrando 
              como transformei desafios de negócio em soluções digitais com 
              resultados mensuráveis.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} style={{ animationDelay: `${0.1 * index}s` }}>
                <CaseCard
                  id={caseItem.id}
                  title={caseItem.title}
                  client={caseItem.client}
                  description={caseItem.description}
                  tags={caseItem.tags}
                  metrics={caseItem.metrics}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cases;

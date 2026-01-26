import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CaseCard } from '@/components/CaseCard';
import { cases } from '@/data/cases';

export function CasesPreview() {
  const previewCases = cases.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container-section">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Cases de Sucesso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projetos que geraram impacto
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/cases">
              Ver todos os cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {previewCases.map((caseItem, index) => (
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
    </section>
  );
}

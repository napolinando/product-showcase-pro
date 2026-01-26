import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Wrench } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cases } from '@/data/cases';

const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = cases.find((c) => c.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 md:pt-32 pb-20">
          <div className="container-section text-center">
            <h1 className="text-2xl font-bold mb-4">Case não encontrado</h1>
            <Button asChild>
              <Link to="/cases">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Cases
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container-section">
          {/* Back Link */}
          <Link
            to="/cases"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Cases
          </Link>

          {/* Header */}
          <div className="max-w-4xl mb-12">
            <p className="text-primary font-semibold mb-3">{caseStudy.client}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {caseStudy.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Context */}
              <section className="animate-fade-in-up">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contexto</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.context}
                </p>
              </section>

              {/* Problem */}
              <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-xl font-semibold text-foreground mb-4">Problema</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.problem}
                </p>
              </section>

              {/* Objective */}
              <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl font-semibold text-foreground mb-4">Objetivo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.objective}
                </p>
              </section>

              {/* Role */}
              <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl font-semibold text-foreground mb-4">Minha Atuação como PO</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.role}
                </p>
              </section>

              {/* Solution */}
              <section className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl font-semibold text-foreground mb-4">Solução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.solution}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold mb-4">Resultados</h3>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
                      <span className="text-sm leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="p-6 rounded-2xl bg-card border border-border animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Ferramentas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseDetail;

import { Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container-section">
        <div className="callout-card max-w-4xl mx-auto text-center animate-scale-in">
          <Lightbulb className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            "Transformo necessidades de negócio em soluções digitais claras, priorizadas e executáveis."
          </blockquote>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Minha missão é traduzir a complexidade do negócio em produtos que entregam 
            valor mensurável e experiências excepcionais para os usuários.
          </p>
          <Link 
            to="/cases" 
            className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors"
          >
            Veja como aplico isso na prática
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

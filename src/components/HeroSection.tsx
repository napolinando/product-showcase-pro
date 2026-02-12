import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Target className="h-4 w-4 text-white/80" />
            <span className="text-sm font-medium text-white/90">
              Disponível para novos projetos
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Product Owner
            <span className="block text-white/80 mt-2">Estratégia e Entrega de Valor

            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Atuação estratégica na interface entre negócio e tecnologia, com foco em 
            impacto mensurável e tomada de decisão orientada a dados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
              <Link to="/cases">
                Ver Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 font-semibold px-8 bg-primary-foreground">
              <Link to="/contato">
                Entrar em Contato
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-white/60" />
                <span className="text-3xl md:text-4xl font-bold text-white">8+</span>
              </div>
              <p className="text-sm text-white/60">Anos de Experiência</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Target className="h-5 w-5 text-white/60" />
                <span className="text-3xl md:text-4xl font-bold text-white">50+</span>
              </div>
              <p className="text-sm text-white/60">Projetos Entregues</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Users className="h-5 w-5 text-white/60" />
                <span className="text-3xl md:text-4xl font-bold text-white">15+</span>
              </div>
              <p className="text-sm text-white/60">Clientes Atendidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>);

}
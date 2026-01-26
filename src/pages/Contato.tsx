import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos conversar?
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Estou sempre aberto a conversas sobre produtos, estratégia e 
              desafios de negócio. Se você tem um projeto interessante ou quer 
              trocar ideias, entre em contato!
            </p>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-card border border-border hover-lift text-left animate-fade-in-up"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">
                  Conecte-se comigo para acompanhar conteúdos sobre produto e 
                  gestão, e para networking profissional.
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@fernandopo.com"
                className="group p-8 rounded-2xl bg-card border border-border hover-lift text-left animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">E-mail</h3>
                <p className="text-muted-foreground text-sm">
                  Para propostas, parcerias ou conversas mais detalhadas, 
                  envie um e-mail diretamente.
                </p>
              </a>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl gradient-hero text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <MessageSquare className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                Aberto a novos desafios
              </h3>
              <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
                Se você está buscando um Product Owner para impulsionar seu 
                produto ou projeto, vamos conversar sobre como posso ajudar.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a href="mailto:contato@fernandopo.com">
                  Enviar Mensagem
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;

import { Linkedin, Mail, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Fernando (Nando)</p>
            <p className="text-primary-foreground/70 text-sm">
              Product Owner | Estratégia & Entrega de Valor
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contato@email.com"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Fernando. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

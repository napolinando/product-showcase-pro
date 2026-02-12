import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
{ name: 'Home', href: '/' },
{ name: 'Cases', href: '/cases' },
{ name: 'Forma de Trabalho', href: '/metodologia' },
{ name: 'Contato', href: '/contato' }];


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-card/95 backdrop-blur-md shadow-md' :
      'bg-transparent'}`
      }>

      <div className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-muted-foreground">
              
              Fernando Napoli 
             
            </span>
            <span className="text-sm text-muted-foreground font-medium hidden sm:inline">
              Product Owner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => <Link key={item.name}
            to={item.href}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
            location.pathname === item.href ?
            'bg-primary text-primary-foreground' :
            'text-muted-foreground hover:text-foreground hover:bg-secondary'}`
            }>

                {item.name}
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ?
            <X className="h-5 w-5" /> :

            <Menu className="h-5 w-5" />
            }
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              location.pathname === item.href ?
              'bg-primary text-primary-foreground' :
              'text-muted-foreground hover:text-foreground hover:bg-secondary'}`
              }>

                  {item.name}
                </Link>
            )}
            </div>
          </nav>
        }
      </div>
    </header>);

}
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ValueProposition } from '@/components/ValueProposition';
import { StrategicPositioning } from '@/components/StrategicPositioning';
import { CasesPreview } from '@/components/CasesPreview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValueProposition />
        <StrategicPositioning />
        <CasesPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

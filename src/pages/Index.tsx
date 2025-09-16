
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BackgroundAnimations } from "@/components/BackgroundAnimations";
import { LiveProjectsSection } from "@/components/sections/LiveProjectsSection";
import { DevProjectsSection } from "@/components/sections/DevProjectsSection";
import { ConceptProjectsSection } from "@/components/sections/ConceptProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background Animations */}
      <BackgroundAnimations />

      {/* Global Background Elements (token-based, subtle) */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_50%_-100px,hsl(var(--primary)/0.06),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_600px_at_100%_100%,hsl(var(--accent)/0.05),transparent)]"></div>
      </div>

      <Header />
      <Hero />
      
      <main className="relative">
        <LiveProjectsSection />
        <DevProjectsSection />
        <ConceptProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

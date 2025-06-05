
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BackgroundAnimations } from "@/components/BackgroundAnimations";
import { LiveProjectsSection } from "@/components/sections/LiveProjectsSection";
import { DevProjectsSection } from "@/components/sections/DevProjectsSection";
import { ConceptProjectsSection } from "@/components/sections/ConceptProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Animations */}
      <BackgroundAnimations />

      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_1200px_800px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_1000px_600px_at_100%_100%,rgba(139,92,246,0.1),transparent)]"></div>
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

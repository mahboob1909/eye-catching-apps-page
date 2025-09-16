
import { AppShowcase } from "@/components/AppShowcase";
import { liveApps } from "@/data/projectsData";

export function LiveProjectsSection() {
  return (
    <section id="live-projects" className="py-32 px-6 relative bg-background overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-muted/10 to-accent/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            Live &
            <span className="block text-gradient">Deployed Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Fully deployed applications serving real users with cutting-edge technology and exceptional user experiences.
          </p>
          
          <div className="flex items-center justify-center mt-12">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-64"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent w-64"></div>
          </div>
        </div>
        
        <div className="space-y-32">
          {liveApps.map((app, index) => (
            <AppShowcase 
              key={app.id} 
              app={app} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

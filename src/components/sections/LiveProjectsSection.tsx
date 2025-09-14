
import { AppShowcase } from "@/components/AppShowcase";
import { liveApps } from "@/data/projectsData";

export function LiveProjectsSection() {
  return (
    <section id="live-projects" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent"></div>
      
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

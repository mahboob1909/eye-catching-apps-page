
import { AppShowcase } from "@/components/AppShowcase";
import { liveApps } from "@/data/projectsData";

export function LiveProjectsSection() {
  return (
    <section id="live-projects" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-muted/20 to-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-to-r from-primary/25 to-secondary/25 rounded-full blur-xl animate-float" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-10 left-1/3 w-20 h-20 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70"></div>
        
        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_20%_100px,hsl(var(--primary)/0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_90%_300px,hsl(var(--accent)/0.1),transparent)]"></div>
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

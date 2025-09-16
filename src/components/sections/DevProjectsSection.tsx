
import { ProjectCard } from "@/components/ProjectCard";
import { devProjects } from "@/data/projectsData";

export function DevProjectsSection() {
  return (
    <section id="dev-projects" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Enhanced Background Animations */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute top-20 right-10 w-36 h-36 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-60 left-20 w-32 h-32 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-muted/30 to-accent/30 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-10 w-30 h-30 bg-gradient-to-r from-primary/35 to-secondary/35 rounded-full blur-xl animate-float" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute top-10 right-1/3 w-22 h-22 bg-gradient-to-r from-accent/35 to-primary/35 rounded-full blur-lg animate-float" style={{ animationDelay: '2.8s' }}></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-80"></div>
        
        {/* Enhanced Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_30%_100px,hsl(var(--primary)/0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_300px,hsl(var(--accent)/0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_10%_60%,hsl(var(--secondary)/0.1),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            In Development
            <span className="block text-gradient">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Current projects in active development with progress tracking and expected delivery timelines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {devProjects.map((project, index) => (
            <div 
              key={project.title}
              className="h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { ProjectCard } from "@/components/ProjectCard";
import { devProjects } from "@/data/projectsData";

export function DevProjectsSection() {
  return (
    <section id="dev-projects" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background Animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 left-20 w-24 h-24 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-muted/20 to-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_30%_100px,hsl(var(--primary)/0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_80%_300px,hsl(var(--accent)/0.08),transparent)]"></div>
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

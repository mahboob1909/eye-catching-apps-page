
import { ProjectCard } from "@/components/ProjectCard";
import { devProjects } from "@/data/projectsData";

export function DevProjectsSection() {
  return (
    <section id="dev-projects" className="py-32 px-6 relative" style={{ backgroundColor: '#050505' }}>
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

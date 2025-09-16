import { ConceptCard } from "@/components/ConceptCard";
import { conceptProjects } from "@/data/projectsData";
export function ConceptProjectsSection() {
  return <section id="concept-projects" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background Animations */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-32 left-16 w-36 h-36 bg-gradient-to-r from-primary/25 to-secondary/25 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-32 w-28 h-28 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full blur-xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-24 h-24 bg-gradient-to-r from-accent/25 to-primary/25 rounded-full blur-xl animate-float" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-gradient-to-r from-muted/15 to-accent/15 rounded-full blur-lg animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3.8s' }}></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.025)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.025)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Multiple Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_150px,hsl(var(--primary)/0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_90%_400px,hsl(var(--accent)/0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_80%,hsl(var(--secondary)/0.08),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            Proposed &
            <span className="block text-gradient">Concept Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Innovative project concepts and ideas waiting to be brought to life with the right opportunities and resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {conceptProjects.map((project, index) => <div key={project.title} className="h-full" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <ConceptCard {...project} />
            </div>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <div className="bg-gradient-to-r from-card to-muted rounded-3xl p-12 border border-border">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in my deployed solutions, want to follow development progress, or have ideas for new concepts, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary text-background px-12 py-5 rounded-2xl font-semibold text-lg hover-lift shadow-xl hover:shadow-2xl">
                Start a Project
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
}
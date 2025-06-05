
import { ConceptCard } from "@/components/ConceptCard";
import { conceptProjects } from "@/data/projectsData";

export function ConceptProjectsSection() {
  return (
    <section id="concept-projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
            Proposed &
            <span className="block text-gradient">Concept Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Innovative project concepts and ideas waiting to be brought to life with the right opportunities and resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conceptProjects.map((project, index) => (
            <div 
              key={project.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ConceptCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in my deployed solutions, want to follow development progress, or have ideas for new concepts, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift shadow-xl hover:shadow-2xl">
                Start a Project
              </button>
              <button className="glass-effect text-gray-700 px-12 py-5 rounded-2xl font-semibold text-lg hover-lift border-2 border-gray-200 hover:border-gray-300">
                View All Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

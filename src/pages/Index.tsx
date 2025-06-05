
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AppShowcase } from "@/components/AppShowcase";
import { ProjectCard } from "@/components/ProjectCard";
import { ConceptCard } from "@/components/ConceptCard";
import { Footer } from "@/components/Footer";
import { BackgroundAnimations } from "@/components/BackgroundAnimations";

// Live & Deployed Projects Data
const liveApps = [
  {
    id: "task-manager",
    title: "TaskFlow Pro",
    description: "A revolutionary task management platform featuring AI-powered prioritization, real-time collaboration, and intuitive drag-and-drop workflows. Designed for teams who demand excellence and efficiency in their daily operations.",
    url: "https://taskflow-pro.example.com",
    gradient: "from-blue-600 to-purple-600",
    icon: "📋"
  },
  {
    id: "analytics-dashboard",
    title: "DataViz Analytics",
    description: "Transform complex data into compelling visual stories with advanced analytics, machine learning insights, and real-time monitoring capabilities. Your data deserves beautiful, actionable dashboards.",
    url: "https://dataviz-analytics.example.com",
    gradient: "from-emerald-500 to-teal-600",
    icon: "📊"
  }
];

// In Development Projects Data
const devProjects = [
  {
    title: "E-Commerce Platform",
    description: "Next-generation e-commerce solution with AI-driven personalization, advanced inventory management, and seamless payment processing.",
    progress: 75,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    gradient: "from-orange-500 to-red-600",
    icon: "🛒",
    status: "Beta Testing",
    expectedCompletion: "Q2 2024"
  },
  {
    title: "Social Network Platform",
    description: "Privacy-first social platform with end-to-end encryption, decentralized architecture, and innovative content discovery algorithms.",
    progress: 45,
    technologies: ["Next.js", "GraphQL", "MongoDB", "WebRTC", "Docker"],
    gradient: "from-pink-500 to-rose-600",
    icon: "🌐",
    status: "Development",
    expectedCompletion: "Q3 2024"
  },
  {
    title: "AI Writing Assistant",
    description: "Intelligent writing companion powered by advanced language models, real-time collaboration, and industry-specific templates.",
    progress: 30,
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis", "GCP"],
    gradient: "from-indigo-500 to-purple-600",
    icon: "✍️",
    status: "Prototyping",
    expectedCompletion: "Q4 2024"
  },
  {
    title: "IoT Dashboard",
    description: "Comprehensive IoT device management platform with real-time monitoring, predictive analytics, and automated workflows.",
    progress: 60,
    technologies: ["Angular", "Express", "InfluxDB", "MQTT", "Kubernetes"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "📡",
    status: "Alpha Testing",
    expectedCompletion: "Q2 2024"
  }
];

// Concept Projects Data
const conceptProjects = [
  {
    title: "AR Learning Platform",
    description: "Immersive augmented reality education platform that transforms traditional learning into interactive 3D experiences for students.",
    targetAudience: "Educational Institutions",
    keyFeatures: ["3D Object Visualization", "Interactive Simulations", "Progress Tracking", "Multi-language Support"],
    difficulty: "High" as const,
    timeEstimate: "12-18 months",
    gradient: "from-purple-600 to-pink-600",
    icon: "🥽",
    priority: "High" as const
  },
  {
    title: "Sustainable City Planner",
    description: "AI-powered urban planning tool that helps city planners design more sustainable and efficient urban environments.",
    targetAudience: "Urban Planners & Government",
    keyFeatures: ["Environmental Impact Analysis", "Traffic Flow Optimization", "Resource Management", "Community Input Integration"],
    difficulty: "High" as const,
    timeEstimate: "15-20 months",
    gradient: "from-green-600 to-emerald-600",
    icon: "🏙️",
    priority: "Medium" as const
  },
  {
    title: "Wellness Companion App",
    description: "Personalized wellness platform that combines mental health support, fitness tracking, and nutrition guidance in one seamless experience.",
    targetAudience: "Health-conscious Individuals",
    keyFeatures: ["Mood Tracking", "Personalized Workouts", "Nutrition Planning", "Meditation Sessions"],
    difficulty: "Medium" as const,
    timeEstimate: "8-12 months",
    gradient: "from-teal-500 to-cyan-600",
    icon: "💪",
    priority: "High" as const
  },
  {
    title: "Blockchain Voting System",
    description: "Secure, transparent, and accessible digital voting platform built on blockchain technology for democratic processes.",
    targetAudience: "Government Organizations",
    keyFeatures: ["Cryptographic Security", "Transparency Ledger", "Identity Verification", "Real-time Results"],
    difficulty: "High" as const,
    timeEstimate: "18-24 months",
    gradient: "from-blue-600 to-indigo-600",
    icon: "🗳️",
    priority: "Low" as const
  },
  {
    title: "Smart Home Hub",
    description: "Unified smart home management system with AI-powered automation, energy optimization, and seamless device integration.",
    targetAudience: "Homeowners & Tech Enthusiasts",
    keyFeatures: ["Device Integration", "Energy Monitoring", "Automated Routines", "Voice Control"],
    difficulty: "Medium" as const,
    timeEstimate: "10-14 months",
    gradient: "from-yellow-500 to-orange-600",
    icon: "🏠",
    priority: "Medium" as const
  },
  {
    title: "Music Collaboration Platform",
    description: "Cloud-based platform enabling musicians worldwide to collaborate on projects with real-time audio sharing and mixing capabilities.",
    targetAudience: "Musicians & Producers",
    keyFeatures: ["Real-time Audio Sync", "Version Control", "Virtual Instruments", "Copyright Management"],
    difficulty: "Medium" as const,
    timeEstimate: "6-10 months",
    gradient: "from-violet-500 to-purple-600",
    icon: "🎵",
    priority: "Low" as const
  }
];

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
        {/* Section 1: Live & Deployed Projects */}
        <section id="live-projects" className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
                Live &
                <span className="block text-gradient">Deployed Projects</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Fully deployed applications serving real users with cutting-edge technology and exceptional user experiences.
              </p>
              
              <div className="flex items-center justify-center mt-12">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-64"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-64"></div>
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

        {/* Section 2: In Development Projects */}
        <section id="dev-projects" className="py-32 px-6 relative bg-gradient-to-b from-white/30 to-gray-50/50">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
                In Development
                <span className="block text-gradient">Projects</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Current projects in active development with progress tracking and expected delivery timelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devProjects.map((project, index) => (
                <div 
                  key={project.title}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Proposed/Concept Projects */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

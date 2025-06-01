
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AppShowcase } from "@/components/AppShowcase";
import { Footer } from "@/components/Footer";

const apps = [
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
  },
  {
    id: "ecommerce-platform",
    title: "ShopSphere",
    description: "Next-generation e-commerce excellence with AI-driven personalization, lightning-fast performance, and seamless payment integration. Built for businesses ready to dominate the digital marketplace.",
    url: "https://shopsphere.example.com",
    gradient: "from-orange-500 to-red-600",
    icon: "🛒"
  },
  {
    id: "social-network",
    title: "ConnectHub",
    description: "Redefining social connections through privacy-first architecture, meaningful engagement algorithms, and authentic community building. Where genuine relationships flourish in the digital age.",
    url: "https://connecthub.example.com",
    gradient: "from-pink-500 to-rose-600",
    icon: "🌐"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_1200px_800px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_1000px_600px_at_100%_100%,rgba(139,92,246,0.1),transparent)]"></div>
      </div>

      <Header />
      <Hero />
      
      <main className="relative">
        {/* Apps Section */}
        <section id="apps" className="py-32 px-6 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
                Featured
                <span className="block text-gradient">Applications</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Explore a curated collection of cutting-edge web applications, each meticulously crafted to solve real-world challenges with innovative technology and exceptional user experiences.
              </p>
              
              {/* Decorative Line */}
              <div className="flex items-center justify-center mt-12">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-64"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-4"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-64"></div>
              </div>
            </div>
            
            {/* Applications Grid */}
            <div className="space-y-32">
              {apps.map((app, index) => (
                <AppShowcase 
                  key={app.id} 
                  app={app} 
                  index={index}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-32">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to create your next breakthrough application with modern technologies and exceptional design.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover-lift shadow-xl hover:shadow-2xl">
                  Start Your Project
                </button>
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


import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AppShowcase } from "@/components/AppShowcase";
import { Footer } from "@/components/Footer";

const apps = [
  {
    id: "task-manager",
    title: "TaskFlow Pro",
    description: "A comprehensive task management application with real-time collaboration, advanced filtering, and intuitive drag-and-drop functionality. Perfect for teams and individuals looking to boost productivity.",
    url: "https://taskflow-pro.example.com",
    gradient: "from-blue-600 to-purple-600",
    icon: "📋"
  },
  {
    id: "analytics-dashboard",
    title: "DataViz Analytics",
    description: "Transform your data into actionable insights with beautiful, interactive dashboards. Features real-time updates, custom charts, and powerful filtering capabilities.",
    url: "https://dataviz-analytics.example.com",
    gradient: "from-green-500 to-teal-600",
    icon: "📊"
  },
  {
    id: "ecommerce-platform",
    title: "ShopSphere",
    description: "Next-generation e-commerce platform with AI-powered recommendations, seamless checkout experience, and comprehensive inventory management for modern businesses.",
    url: "https://shopsphere.example.com",
    gradient: "from-orange-500 to-red-600",
    icon: "🛒"
  },
  {
    id: "social-network",
    title: "ConnectHub",
    description: "A privacy-focused social networking platform that brings people together through shared interests, meaningful conversations, and authentic connections.",
    url: "https://connecthub.example.com",
    gradient: "from-pink-500 to-rose-600",
    icon: "🌐"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      
      <main className="relative">
        {/* Apps Section */}
        <section id="apps" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover a collection of cutting-edge web applications designed to solve real-world problems and enhance digital experiences.
              </p>
            </div>
            
            <div className="grid gap-8 md:gap-12">
              {apps.map((app, index) => (
                <AppShowcase 
                  key={app.id} 
                  app={app} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

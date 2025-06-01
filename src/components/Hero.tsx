
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToApps = () => {
    const element = document.getElementById("apps");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
            <span className={`inline-block transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              Crafting
            </span>
            <br />
            <span 
              className={`inline-block text-gradient transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Digital Magic
            </span>
          </h1>
          
          {/* Subtitle with Enhanced Typography */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            Experience a curated collection of{" "}
            <span className="font-semibold text-gradient">innovative web applications</span>{" "}
            designed with cutting-edge technologies and exceptional user experiences.
          </p>
          
          {/* CTA Buttons with Hover Effects */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <button 
              onClick={scrollToApps}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Applications
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="group glass-effect text-gray-700 px-10 py-5 rounded-2xl text-lg font-semibold hover-lift border-2 border-transparent hover:border-blue-200 transition-all duration-300">
              <span className="flex items-center gap-3">
                View Source Code
                <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm font-medium mb-3">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

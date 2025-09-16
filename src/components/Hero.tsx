import { useState, useEffect } from "react";
import echoVerseLogo from "@/assets/echo-verse-logo.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const scrollToProjects = () => {
    const element = document.getElementById("live-projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-xl animate-float" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-muted/20 to-accent/20 rounded-full blur-lg animate-float" style={{
        animationDelay: '1s'
      }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Logo and Company Name */}
          <div className={`flex items-center justify-center mb-8 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <img 
              src={echoVerseLogo} 
              alt="Echo Verse DB LLC Logo" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-4 filter brightness-125 contrast-125"
              style={{
                filter: 'hue-rotate(20deg) brightness(1.2) contrast(1.3) saturate(1.1)'
              }}
            />
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">Echo Verse DB LLC</h2>
              <p className="text-sm md:text-base text-muted-foreground">Digital Innovation Studio</p>
            </div>
          </div>
          
          {/* Main Heading with Staggered Animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-foreground mb-8 leading-tight tracking-tight">
            <span className={`inline-block transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              Crafting
            </span>
            <br />
            <span className={`inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-1 transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{
            animationDelay: '0.2s'
          }}>
              Digital Magic
            </span>
          </h1>
          
          {/* Subtitle with Enhanced Typography */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{
          animationDelay: '0.4s'
        }}>
            Experience a curated collection of{" "}
            <span className="font-semibold text-gradient">innovative web applications</span>{" "}
            designed with cutting-edge technologies and exceptional user experiences.
          </p>
          
          {/* CTA Buttons with Hover Effects */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{
          animationDelay: '0.6s'
        }}>
            <button onClick={scrollToProjects} className="group relative bg-gradient-to-r from-primary via-secondary to-accent text-background px-10 py-5 rounded-2xl text-lg font-semibold hover-lift overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
        animationDelay: '1s'
      }}>
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm font-medium mb-3">Scroll to explore</span>
            
          </div>
        </div>
      </div>
    </section>;
}
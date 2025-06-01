
import { useState, useEffect, useRef } from "react";

interface App {
  id: string;
  title: string;
  description: string;
  url: string;
  gradient: string;
  icon: string;
}

interface AppShowcaseProps {
  app: App;
  index: number;
}

export function AppShowcase({ app, index }: AppShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Side */}
      <div className={`flex-1 space-y-8 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
        {/* Header with Icon and Title */}
        <div className="flex items-start space-x-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${app.gradient} rounded-3xl flex items-center justify-center text-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-3xl`}>
            <span className="filter drop-shadow-lg">{app.icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-3">
              {app.title}
            </h3>
            <div className={`h-1.5 w-32 bg-gradient-to-r ${app.gradient} rounded-full`}></div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
          {app.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r ${app.gradient} text-white rounded-2xl font-semibold text-lg hover-lift shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
          >
            <span className="relative z-10 flex items-center gap-3">
              Launch Application
              <svg className="w-6 h-6 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
            <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <button className="group inline-flex items-center justify-center px-10 py-5 glass-effect text-gray-700 rounded-2xl font-semibold text-lg hover-lift border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
            <span className="flex items-center gap-3">
              Learn More
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-3 pt-2">
          {['Modern Design', 'Responsive', 'Fast Performance'].map((tag, tagIndex) => (
            <span 
              key={tag}
              className={`px-4 py-2 bg-gradient-to-r ${app.gradient} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:scale-105 transition-transform duration-200`}
              style={{ animationDelay: `${tagIndex * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Visual Side */}
      <div className="flex-1 relative">
        <div 
          className={`relative transition-all duration-700 transform ${
            isHovered ? 'scale-105 rotate-2' : 'scale-100 rotate-0'
          }`}
        >
          {/* Main Card with Enhanced Visual */}
          <div className={`relative w-full h-96 bg-gradient-to-br ${app.gradient} rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500`}>
            {/* Browser Chrome */}
            <div className="bg-black/20 h-12 flex items-center px-6 space-x-3">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-sm"></div>
              </div>
              <div className="flex-1 bg-white/20 rounded-lg px-4 py-1 mx-4">
                <div className="h-2 bg-white/40 rounded w-3/4"></div>
              </div>
            </div>
            
            {/* Content Area with Mock Interface */}
            <div className="p-8 text-white space-y-6">
              {/* Header Section */}
              <div className="space-y-3">
                <div className="h-6 bg-white/40 rounded-lg w-2/3 shimmer-effect"></div>
                <div className="h-4 bg-white/30 rounded-lg w-1/2"></div>
              </div>
              
              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="h-16 bg-white/20 rounded-xl transform hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              
              {/* Bottom Action */}
              <div className="flex justify-between items-center pt-4">
                <div className="h-4 bg-white/30 rounded w-1/3"></div>
                <div className="h-10 bg-white/40 rounded-full w-24"></div>
              </div>
            </div>
            
            {/* Floating App Icon */}
            <div className="absolute top-6 right-6 text-5xl opacity-30 animate-float">
              {app.icon}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 -left-1 w-4 h-4 bg-white/20 rounded-full"></div>
          </div>
          
          {/* Shadow Elements */}
          <div className={`absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br ${app.gradient} rounded-3xl opacity-20 -z-10 transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}></div>
          <div className={`absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br ${app.gradient} rounded-3xl opacity-10 -z-20`}></div>
        </div>
      </div>
    </div>
  );
}

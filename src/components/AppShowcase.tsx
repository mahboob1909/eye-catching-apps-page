
import { useState } from "react";

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
  
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center text-2xl`}>
            {app.icon}
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              {app.title}
            </h3>
            <div className={`h-1 w-20 bg-gradient-to-r ${app.gradient} rounded-full mt-2`}></div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {app.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${app.gradient} text-white rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105`}
          >
            Launch Application
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Visual Side */}
      <div className="flex-1 relative">
        <div 
          className={`relative transition-all duration-500 transform ${
            isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
          }`}
        >
          {/* Main Card */}
          <div className={`w-full h-80 bg-gradient-to-br ${app.gradient} rounded-3xl shadow-2xl relative overflow-hidden`}>
            {/* Mock Browser Window */}
            <div className="bg-white/20 h-8 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            {/* Content Area */}
            <div className="p-8 text-white">
              <div className="space-y-4">
                <div className="h-4 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-4 bg-white/20 rounded w-2/3"></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="h-20 bg-white/20 rounded-lg"></div>
                  <div className="h-20 bg-white/20 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Icon */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">
              {app.icon}
            </div>
          </div>
          
          {/* Shadow Elements */}
          <div className={`absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br ${app.gradient} rounded-3xl opacity-20 -z-10`}></div>
        </div>
      </div>
    </div>
  );
}

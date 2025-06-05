
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ConceptCardProps {
  title: string;
  description: string;
  targetAudience: string;
  keyFeatures: string[];
  difficulty: 'Low' | 'Medium' | 'High';
  timeEstimate: string;
  gradient: string;
  icon: string;
  priority: 'Low' | 'Medium' | 'High';
}

export function ConceptCard({ 
  title, 
  description, 
  targetAudience, 
  keyFeatures, 
  difficulty, 
  timeEstimate, 
  gradient, 
  icon, 
  priority 
}: ConceptCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const difficultyColors = {
    Low: 'from-green-500 to-emerald-600',
    Medium: 'from-yellow-500 to-orange-600',
    High: 'from-red-500 to-pink-600'
  };

  const priorityColors = {
    Low: 'bg-gray-100 text-gray-700',
    Medium: 'bg-blue-100 text-blue-700',
    High: 'bg-purple-100 text-purple-700'
  };

  return (
    <Card 
      ref={ref}
      className={`group relative overflow-hidden glass-effect border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 hover-lift ${
        isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`w-full h-full bg-gradient-to-br ${gradient}`}></div>
      </div>
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">Target: {targetAudience}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[priority]}`}>
              {priority} Priority
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        {/* Project Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-700">Difficulty</span>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${difficultyColors[difficulty]} text-white`}>
              {difficulty}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-700">Est. Time</span>
            <p className="text-sm text-gray-600">{timeEstimate}</p>
          </div>
        </div>

        {/* Key Features - Expandable */}
        <div className="space-y-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Key Features
            <svg 
              className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isExpanded && (
            <div className="space-y-1 animate-fade-in">
              {keyFeatures.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button className={`flex-1 px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-lg font-medium text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
            Start Planning
          </button>
          <button className="px-4 py-2 glass-effect text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

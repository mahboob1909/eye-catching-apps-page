
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  technologies: string[];
  gradient: string;
  icon: string;
  status: string;
  expectedCompletion?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  progress, 
  technologies, 
  gradient, 
  icon, 
  status, 
  expectedCompletion 
}: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <Card 
      ref={ref}
      className={`group relative overflow-hidden transition-all duration-500 hover-lift bg-card h-full flex flex-col ${
        isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-xl text-background transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary to-secondary text-background">
                  {status}
                </span>
                {expectedCompletion && (
                  <span className="text-sm text-muted-foreground">ETA: {expectedCompletion}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4 flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <span className="text-sm font-medium text-foreground">Technologies</span>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-background rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          View Development Progress
        </button>
      </CardContent>
    </Card>
  );
}

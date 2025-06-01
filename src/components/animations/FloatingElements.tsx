
import { useState, useEffect } from 'react';

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const elements = [
    { 
      id: 1, 
      size: 'w-12 h-12', 
      position: { top: '20%', left: '15%' }, 
      delay: 0,
      shape: 'rounded-full',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      id: 2, 
      size: 'w-8 h-8', 
      position: { top: '40%', right: '20%' }, 
      delay: 2,
      shape: 'rounded-lg rotate-45',
      gradient: 'from-purple-400 to-purple-600'
    },
    { 
      id: 3, 
      size: 'w-16 h-16', 
      position: { bottom: '30%', left: '10%' }, 
      delay: 4,
      shape: 'rounded-full',
      gradient: 'from-pink-400 to-pink-600'
    },
    { 
      id: 4, 
      size: 'w-6 h-6', 
      position: { top: '70%', right: '15%' }, 
      delay: 1,
      shape: 'rounded-sm rotate-12',
      gradient: 'from-green-400 to-green-600'
    },
    { 
      id: 5, 
      size: 'w-10 h-10', 
      position: { top: '10%', right: '30%' }, 
      delay: 3,
      shape: 'rounded-full',
      gradient: 'from-indigo-400 to-indigo-600'
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} bg-gradient-to-br ${element.gradient} ${element.shape} opacity-20 animate-float blur-sm`}
          style={{
            ...element.position,
            transform: `
              translateY(${scrollY * 0.1 * (element.id % 2 === 0 ? -1 : 1)}px) 
              translateX(${(mousePosition.x - window.innerWidth / 2) * 0.01 * element.id}px)
              rotate(${scrollY * 0.05 * element.id}deg)
            `,
            animationDelay: `${element.delay}s`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
          </linearGradient>
        </defs>
        
        {[...Array(3)].map((_, i) => (
          <line
            key={i}
            x1={`${20 + i * 30}%`}
            y1="0%"
            x2={`${30 + i * 25}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity="0.3"
            style={{
              transform: `translateX(${scrollY * 0.02 * (i + 1)}px)`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

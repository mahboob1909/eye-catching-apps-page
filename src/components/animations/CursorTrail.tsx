
import { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef<TrailPoint[]>([]);

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      trailRef.current = [...trailRef.current, newPoint].slice(-15);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updateTrail = () => {
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 1000);
      setTrail([...trailRef.current]);
      animationFrame = requestAnimationFrame(updateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrame = requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.1, 1 - age / 800);
        
        return (
          <div
            key={`${point.timestamp}-${index}`}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            style={{
              left: point.x - 6,
              top: point.y - 6,
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            }}
          />
        );
      })}
      
      <svg className="absolute inset-0 w-full h-full">
        <path
          d={trail.length > 1 ? `M ${trail.map(point => `${point.x},${point.y}`).join(' L ')}` : ''}
          stroke="url(#trailGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          style={{
            filter: 'blur(1px)',
          }}
        />
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

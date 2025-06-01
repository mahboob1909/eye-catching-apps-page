
import { useState, useEffect } from 'react';

export function OrganicShapes() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Morphing blob 1 */}
      <div 
        className="absolute w-96 h-96 opacity-10"
        style={{
          top: '10%',
          left: '5%',
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-[morph_8s_ease-in-out_infinite] blur-xl" />
      </div>

      {/* Morphing blob 2 */}
      <div 
        className="absolute w-80 h-80 opacity-15"
        style={{
          top: '60%',
          right: '10%',
          transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-[morph_6s_ease-in-out_infinite_reverse] blur-2xl" />
      </div>

      {/* Flowing gradients */}
      <div 
        className="absolute w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at ${20 + scrollY * 0.01}% ${30 + scrollY * 0.005}%, rgba(59, 130, 246, 0.05), transparent),
            radial-gradient(ellipse 600px 800px at ${80 - scrollY * 0.01}% ${70 - scrollY * 0.008}%, rgba(139, 92, 246, 0.05), transparent)
          `,
        }}
      />

      {/* Animated mesh gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            conic-gradient(from ${scrollY * 0.5}deg at 50% 50%, 
              transparent 0deg, 
              rgba(59, 130, 246, 0.1) 45deg, 
              transparent 90deg, 
              rgba(139, 92, 246, 0.1) 135deg, 
              transparent 180deg, 
              rgba(236, 72, 153, 0.1) 225deg, 
              transparent 270deg, 
              rgba(59, 130, 246, 0.1) 315deg, 
              transparent 360deg
            )
          `,
        }}
      />
    </div>
  );
}

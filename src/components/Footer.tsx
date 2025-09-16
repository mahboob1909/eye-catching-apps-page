
import { useState } from "react";
import echoVerseDbLogo from "@/assets/echo-verse-db-logo.png";

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-card via-muted to-background text-foreground py-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Logo and Company Info */}
        <div className="flex items-center justify-center mb-12">
          <img 
            src={echoVerseDbLogo} 
            alt="Echo Verse DB LLC Logo" 
            className="w-12 h-12 md:w-16 md:h-16 mr-4 filter brightness-125 contrast-125"
            style={{
              filter: 'hue-rotate(20deg) brightness(1.2) contrast(1.3) saturate(1.1)'
            }}
          />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gradient">Echo Verse DB LLC</h3>
            <p className="text-sm text-muted-foreground">Digital Innovation Studio</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Let's Create Something
                <span className="block text-gradient">Extraordinary</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Ready to transform your ideas into remarkable digital experiences? 
                Let's collaborate and bring your vision to life with cutting-edge technology and innovative design.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-gradient-to-r from-primary to-secondary text-background px-10 py-5 rounded-2xl font-semibold text-lg hover-lift shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start a Project
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="group glass-effect border border-border text-muted-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover-lift hover:border-primary/50 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Download Resume
                  <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Social Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-gradient">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#hero" },
                  { name: "Applications", href: "#apps" },
                  { name: "About", href: "#contact" },
                  { name: "Blog", href: "#" },
                  { name: "Services", href: "#" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 text-lg group relative inline-block"
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${hoveredLink === link.name ? 'w-full' : 'w-0'}`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-8 text-gradient">Connect</h4>
              <ul className="space-y-4">
                {[
                  { name: "GitHub", href: "#", icon: "💻" },
                  { name: "LinkedIn", href: "#", icon: "💼" },
                  { name: "Twitter", href: "#", icon: "🐦" },
                  { name: "Email", href: "#", icon: "📧" },
                  { name: "Discord", href: "#", icon: "🎮" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 text-lg group flex items-center gap-3 hover:translate-x-2"
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="relative">
                        {link.name}
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${hoveredLink === link.name ? 'w-full' : 'w-0'}`}></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <img 
                src={echoVerseDbLogo} 
                alt="Echo Verse DB LLC Logo" 
                className="w-10 h-10 filter brightness-125 contrast-125"
                style={{
                  filter: 'hue-rotate(20deg) brightness(1.2) contrast(1.3) saturate(1.1)'
                }}
              />
              <p className="text-muted-foreground">
                &copy; 2025 Echo Verse DB LLC. Crafted with passion and modern technologies.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
}

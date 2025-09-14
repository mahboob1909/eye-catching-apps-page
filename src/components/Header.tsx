
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Animation */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-background font-bold text-xl font-display">W</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-20 group-hover:animate-ping"></div>
            </div>
            <span className="text-2xl font-display font-bold text-foreground group-hover:text-gradient transition-all duration-300">
              WebPortfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium text-lg group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("apps")}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium text-lg group"
            >
              Applications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary text-background px-8 py-3 rounded-full hover-lift font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 mt-6' : 'max-h-0'}`}>
          <div className="space-y-4 pb-6">
            <button 
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("apps")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Applications
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full bg-gradient-to-r from-primary to-secondary text-background px-6 py-3 rounded-full font-semibold text-lg mt-4"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

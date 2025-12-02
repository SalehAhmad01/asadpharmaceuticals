import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">ASAD Pharmaceuticals</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("prd")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              PR&D
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("prd")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              PR&D
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

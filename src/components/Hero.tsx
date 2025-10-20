import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Microscope, Heart } from "lucide-react";
import heroImage from "@/assets/hero-pharma.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern pharmaceutical laboratory with advanced research equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Pioneering Healthcare Innovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Advancing pharmaceutical excellence through cutting-edge research and unwavering commitment to patient wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-white text-primary hover:bg-white/90 shadow-medium text-lg px-8"
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Get in Touch
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Shield className="text-white" size={20} />
              <span className="text-white font-medium">FDA Approved</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Microscope className="text-white" size={20} />
              <span className="text-white font-medium">Research-Driven</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Heart className="text-white" size={20} />
              <span className="text-white font-medium">Patient-Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

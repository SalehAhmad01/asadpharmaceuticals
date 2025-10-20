import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Microscope, FlaskConical, Dna, BookOpen, ArrowRight } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Dna,
      title: "Genetic Therapies",
      description: "Pioneering gene therapy research to treat inherited disorders at their molecular source.",
      status: "Phase III Trials",
    },
    {
      icon: FlaskConical,
      title: "Drug Discovery",
      description: "Advanced computational modeling and AI-driven approaches to accelerate new drug development.",
      status: "Active Research",
    },
    {
      icon: Microscope,
      title: "Clinical Studies",
      description: "Conducting rigorous clinical trials to ensure safety and efficacy of new treatments.",
      status: "15+ Ongoing Studies",
    },
  ];

  return (
    <section id="research" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research & Development
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our state-of-the-art R&D facilities drive pharmaceutical innovation. 
            We invest heavily in research to develop breakthrough therapies that address unmet medical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {researchAreas.map((area, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <area.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{area.description}</p>
              <div className="inline-block px-4 py-2 bg-accent rounded-full">
                <span className="text-sm font-medium text-accent-foreground">{area.status}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="p-8 lg:p-12 bg-gradient-primary text-white border-0 shadow-medium">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <BookOpen size={32} />
                <h3 className="text-3xl font-bold">Collaborate With Us</h3>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                Partner with ASAD Pharmaceuticals for research collaborations, clinical trials, 
                or to explore our latest findings and publications.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-soft text-lg px-8 whitespace-nowrap"
            >
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { value: "$250M+", label: "R&D Investment" },
            { value: "300+", label: "Research Scientists" },
            { value: "50+", label: "Patents Filed" },
            { value: "8", label: "Research Centers" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

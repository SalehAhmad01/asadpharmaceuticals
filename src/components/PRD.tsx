import { Card } from "@/components/ui/card";
import { Factory, Shield, Award, Truck, CheckCircle } from "lucide-react";

const PRD = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Facilities",
      description: "WHO-GMP certified manufacturing plants with cutting-edge equipment and automation.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage, ensuring compliance with international standards.",
    },
    {
      icon: Award,
      title: "Regulatory Excellence",
      description: "FDA, EMA, and global regulatory approvals with comprehensive documentation.",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Efficient logistics and cold-chain management for timely global distribution.",
    },
  ];

  const certifications = [
    "WHO-GMP Certified",
    "ISO 9001:2015",
    "FDA Approved",
    "EMA Compliant",
    "ISO 14001",
    "OHSAS 18001",
  ];

  return (
    <section id="prd" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Production & Development
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            World-class manufacturing capabilities combined with stringent quality controls 
            ensure every product meets the highest standards of safety and efficacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-background hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-5">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { value: "5", label: "Manufacturing Plants" },
            { value: "500M+", label: "Units Annually" },
            { value: "99.9%", label: "Quality Rate" },
            { value: "40+", label: "Countries Served" },
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

export default PRD;

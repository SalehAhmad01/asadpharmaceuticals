import { Card } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to delivering life-changing pharmaceutical solutions that improve global health outcomes.",
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Every decision we make prioritizes patient safety, efficacy, and accessibility to essential medications.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in quality, compliance, and ethical pharmaceutical practices.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Investing in breakthrough research to develop next-generation treatments and therapies.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ASAD Pharmaceuticals
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over two decades, ASAD Pharmaceuticals has been at the forefront of pharmaceutical innovation. 
            Our team of dedicated scientists and healthcare professionals work tirelessly to develop 
            safe, effective medications that transform lives worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Products Developed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

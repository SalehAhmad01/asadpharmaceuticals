import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pill, HeartPulse, Brain, Bone, Stethoscope, Shield } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: HeartPulse,
      name: "Cardiovascular",
      description: "Advanced treatments for heart health and blood pressure management.",
      badge: "25+ Products",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Innovative solutions for neurological conditions and mental health.",
      badge: "18+ Products",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Pill,
      name: "Oncology",
      description: "Cutting-edge cancer treatments and supportive care medications.",
      badge: "32+ Products",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Comprehensive solutions for bone, joint, and musculoskeletal health.",
      badge: "15+ Products",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Stethoscope,
      name: "Primary Care",
      description: "Essential medications for everyday health and wellness management.",
      badge: "40+ Products",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      name: "Immunology",
      description: "Breakthrough therapies for immune system disorders and allergies.",
      badge: "20+ Products",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive range of pharmaceutical solutions across multiple therapeutic areas, 
            each developed with rigorous research and unwavering quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={category.color} size={32} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {category.badge}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">{category.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All products are manufactured under strict GMP guidelines and meet international quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">FDA Approved</Badge>
            <Badge variant="outline" className="px-4 py-2">WHO Certified</Badge>
            <Badge variant="outline" className="px-4 py-2">ISO 9001:2015</Badge>
            <Badge variant="outline" className="px-4 py-2">GMP Compliant</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

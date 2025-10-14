import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Factory, Hammer } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Architectural Design",
      description: "Innovative and culturally-inspired designs that blend modern aesthetics with African heritage.",
      features: ["Custom Floor Plans", "3D Visualization", "Interior Design", "Landscape Planning"]
    },
    {
      icon: Building2,
      title: "Construction Management",
      description: "End-to-end project management ensuring quality, timeline, and budget compliance.",
      features: ["Project Planning", "Quality Control", "Budget Management", "Site Supervision"]
    },
    {
      icon: Factory,
      title: "Sustainable Building",
      description: "Eco-friendly construction solutions using locally-sourced materials and green technologies.",
      features: ["Solar Integration", "Rainwater Harvesting", "Natural Ventilation", "Local Materials"]
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing structures into beautiful, functional spaces with expert craftsmanship.",
      features: ["Kitchen Upgrades", "Bathroom Remodeling", "Space Optimization", "Modern Finishes"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design and construction services tailored to bring your dream home to life across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-accent/10 p-4 rounded-lg w-fit">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
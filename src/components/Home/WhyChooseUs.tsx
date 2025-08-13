import { Card, CardContent } from "@/components/ui/card";
import { Shield, Trophy, Clock, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols and certified professionals ensure every project meets the highest safety standards."
    },
    {
      icon: Trophy,
      title: "Award-Winning Quality",
      description: "Our commitment to excellence has earned us multiple industry awards and recognition from clients."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Project management expertise ensures your construction project is completed on schedule and within budget."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with thousands of successful projects and happy clients over 20+ years."
    }
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose BuildCraft?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over two decades of experience, we combine traditional craftsmanship with modern innovation to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-full w-fit mx-auto group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss your construction needs and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
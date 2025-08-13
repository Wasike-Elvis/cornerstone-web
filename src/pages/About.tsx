import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "Every project prioritizes the safety of our workers and clients through rigorous protocols and training."
    },
    {
      icon: Target,
      title: "Quality",
      description: "We deliver exceptional craftsmanship that stands the test of time, exceeding industry standards."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest communication, transparent pricing, and ethical business practices in every interaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous improvement and innovation drive us to exceed expectations on every project."
    }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      position: "CEO & Founder",
      experience: "25+ years",
      description: "Leading BuildCraft with vision and expertise in large-scale construction management."
    },
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      experience: "15+ years",
      description: "Ensuring projects run smoothly from conception to completion with meticulous attention to detail."
    },
    {
      name: "David Chen",
      position: "Head of Operations",
      experience: "20+ years",
      description: "Overseeing daily operations and maintaining our high standards of quality and safety."
    },
    {
      name: "Lisa Thompson",
      position: "Chief Architect",
      experience: "18+ years",
      description: "Designing innovative spaces that combine functionality with aesthetic excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About BuildCraft</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Two decades of construction excellence, building trust one project at a time.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2004, BuildCraft Construction Company began as a small family business with a simple mission: 
                  to deliver exceptional construction services with unwavering commitment to quality and customer satisfaction.
                </p>
                <p>
                  Over the past two decades, we've grown from a local contractor to a regional leader in construction, 
                  completing over 500 projects ranging from custom homes to large commercial developments.
                </p>
                <p>
                  Our success is built on strong relationships, skilled craftsmanship, and a dedication to safety that 
                  has earned us the trust of clients throughout the region.
                </p>
              </div>
            </div>
            <div className="bg-secondary/30 p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-8">Company Milestones</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    2004
                  </div>
                  <div>
                    <h4 className="font-semibold">Company Founded</h4>
                    <p className="text-sm text-muted-foreground">Started with 5 employees and a vision</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    2010
                  </div>
                  <div>
                    <h4 className="font-semibold">100th Project</h4>
                    <p className="text-sm text-muted-foreground">Milestone achievement in residential construction</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    2018
                  </div>
                  <div>
                    <h4 className="font-semibold">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">Awarded "Builder of the Year"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h4 className="font-semibold">500+ Projects</h4>
                    <p className="text-sm text-muted-foreground">Celebrating 20 years of excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-6 rounded-full w-fit mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your construction vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-primary/80 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-sm text-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
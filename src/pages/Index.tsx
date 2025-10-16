import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import warehouse3DRender from "@/assets/warehouse-3d-render.jpg";
import houseFaisalVideo from "@/assets/house-faisal-walkthrough.mp4";
import stAnnesVideo from "@/assets/st-annes-walkthrough.mp4";
import senajiVideo from "@/assets/senaji-flythrough.mp4";
import hyraxVideo from "@/assets/hyrax-family-meeting.mp4";
import makokhaVideo from "@/assets/house-makokha-walkthrough.mp4";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      description: "A state-of-the-art residential development featuring sustainable building practices.",
      type: "Residential",
      location: "Nairobi, Kenya",
      completedYear: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Office Tower",
      description: "15-story commercial building with modern amenities and green technology.",
      type: "Commercial",
      location: "Nairobi, Kenya",
      completedYear: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Industrial Warehouse Complex",
      description: "Large-scale warehouse and distribution center with automated systems.",
      type: "Industrial",
      location: "Nairobi, Kenya",
      completedYear: "2023",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=500&h=300&fit=crop",
      video3D: "/src/assets/warehouse-3d-render.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our portfolio of successful construction projects across Kenya.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential complexes to commercial towers, see how we've transformed visions into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{project.completedYear}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="text-sm text-foreground">
                    <span className="font-semibold">Location:</span> {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Videos Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Project Showcase Videos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our construction process and see the quality of our work in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Latest Project Video */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative bg-primary/10 h-64">
                <video 
                  src={houseFaisalVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23003366' width='100' height='100'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">House Faisal Walkthrough</h3>
                <p className="text-muted-foreground">Professional walkthrough of our latest residential construction project.</p>
              </CardContent>
            </Card>

            {/* St Annes Sisters House Video */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative bg-primary/10 h-64">
                <video 
                  src={stAnnesVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23003366' width='100' height='100'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">St Annes Sisters House Walkthrough</h3>
                <p className="text-muted-foreground">Professional walkthrough showcasing our residential construction expertise.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative bg-primary/10 h-64">
                <video 
                  src={senajiVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23003366' width='100' height='100'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Senaji Commercial Flythrough</h3>
                <p className="text-muted-foreground">Professional flythrough showcasing our commercial construction expertise.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative bg-primary/10 h-64">
                <video 
                  src={hyraxVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23003366' width='100' height='100'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Hyrax Family Meeting Joint</h3>
                <p className="text-muted-foreground">Professional showcase of our residential project construction quality.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative bg-primary/10 h-64">
                <video 
                  src={makokhaVideo}
                  controls
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23003366' width='100' height='100'/%3E%3C/svg%3E"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">House Makokha Walkthrough</h3>
                <p className="text-muted-foreground">Professional walkthrough showcasing our residential construction quality.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3D Warehouse Rendering Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">3D Architectural Rendering</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industrial Warehouse Complex - Professional 3D architectural visualization
            </p>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src={warehouse3DRender} 
                alt="3D Architectural Rendering of Industrial Warehouse Complex"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Industrial Warehouse Complex</h3>
                  <p className="text-sm opacity-90">3D Architectural Visualization</p>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Project Details</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><span className="font-semibold text-foreground">Type:</span> Industrial Warehouse</li>
                    <li><span className="font-semibold text-foreground">Location:</span> Nairobi, Kenya</li>
                    <li><span className="font-semibold text-foreground">Year:</span> 2023</li>
                    <li><span className="font-semibold text-foreground">Size:</span> 50,000 sq ft</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Loading docks and distribution areas</li>
                    <li>• Modern office spaces</li>
                    <li>• Automated storage systems</li>
                    <li>• Energy-efficient design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

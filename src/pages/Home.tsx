import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Layers, Map, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Layers,
      title: "Personal Systems",
      description: "Curated frameworks and processes for maximum efficiency",
      href: "/systems",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Map,
      title: "Learning Roadmaps", 
      description: "Structured paths for skill development and growth",
      href: "/roadmaps",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: User,
      title: "Technical Skills",
      description: "Comprehensive overview of expertise and experience",
      href: "/skills", 
      color: "from-pink-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Knowledge Blog",
      description: "Insights, tutorials, and thoughts on development",
      href: "/blog",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Developer</span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A curated collection of frameworks, processes, and knowledge I use to organize 
              my work and life for maximum efficiency and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-bounce glow-effect">
                <Link to="/systems" className="flex items-center space-x-2">
                  <span>Explore Systems</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10 transition-smooth">
                <Link to="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What You'll Find Here</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into the different aspects of my professional journey and personal growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-6 group cursor-pointer"
                  onClick={() => window.location.href = feature.href}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="card-gradient p-12 text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to collaborate or just want to chat about technology? 
              I'm always excited to connect with fellow developers.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-bounce glow-effect">
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get In Touch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
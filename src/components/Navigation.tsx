import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Home, BookOpen, Layers, Map, User, MessageSquare, Calendar } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/systems", label: "Systems", icon: Layers },
    { path: "/roadmaps", label: "Roadmaps", icon: Map },
    { path: "/skills", label: "Skills", icon: User },
    { path: "/routines", label: "Routines", icon: Calendar },
    { path: "/contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-primary p-2">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Home</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={`transition-smooth ${
                    isActive 
                      ? "bg-gradient-primary text-white glow-effect" 
                      : "hover:bg-secondary"
                  }`}
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
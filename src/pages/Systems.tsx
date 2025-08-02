import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive } from "lucide-react";

const Systems = () => {
  const navigate = useNavigate();

  const handleSystemClick = (systemName: string) => {
    const systemPath = systemName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/systems/${systemPath}`);
  };

  const systemCategories = [
    {
      title: "Productivity & Work Systems",
      icon: CheckSquare,
      color: "from-blue-500 to-cyan-500",
      systems: [
        { name: "Task Management System", icon: CheckSquare },
        { name: "Time Management System", icon: Clock },
        { name: "Project Management", icon: Zap },
        { name: "Execution", icon: Zap },
        { name: "GTD", icon: CheckSquare },
        { name: "Work - Workplace System", icon: Building },
        { name: "Delegation", icon: Users2 },
        { name: "Onboarding", icon: Users2 },
        { name: "Skill Acquiring", icon: Lightbulb },
        { name: "Practicing", icon: Zap },
        { name: "Decision Making System", icon: Lightbulb },
        { name: "Systems Improvement", icon: Zap }
      ]
    },
    {
      title: "Information & Knowledge Management",
      icon: FileText,
      color: "from-green-500 to-emerald-500", 
      systems: [
        { name: "Note-Taking & Knowledge Base", icon: FileText },
        { name: "File Management System", icon: Archive },
        { name: "Digital Files / Digital Minimalism", icon: FileText },
        { name: "A system to archive my skills", icon: Archive },
        { name: "A home for each ideas, thoughts...", icon: Lightbulb }
      ]
    },
    {
      title: "Communication",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      systems: [
        { name: "Messaging / Communication System", icon: MessageSquare },
        { name: "System to keep my inbox clear", icon: MessageSquare }
      ]
    },
    {
      title: "Personal Life Areas", 
      icon: Heart,
      color: "from-pink-500 to-purple-500",
      systems: [
        { name: "Health", icon: Heart },
        { name: "Nutrition", icon: Heart },
        { name: "Relationships", icon: Users2 },
        { name: "Payments, Finance system", icon: Building },
        { name: "Commute, Travel", icon: Zap },
        { name: "Dealing with ADHD", icon: Lightbulb },
        { name: "Important Concepts Reminder", icon: Lightbulb }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Personal Systems</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection of the frameworks and processes I use to organize my work, 
            knowledge, and life for maximum efficiency and clarity.
          </p>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="container mx-auto px-4 space-y-12">
        {systemCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <CategoryIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.systems.map((system, systemIndex) => {
                  const SystemIcon = system.icon;
                  return (
                    <Card 
                      key={systemIndex} 
                      className="card-gradient p-6 group cursor-pointer"
                      onClick={() => handleSystemClick(system.name)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                          <SystemIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {system.name}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Systems;
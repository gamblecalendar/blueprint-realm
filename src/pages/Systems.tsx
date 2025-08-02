import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive } from "lucide-react";
import { getSystemsData, SystemData } from "@/lib/data";

const Systems = () => {
  const navigate = useNavigate();
  const [systemsData, setSystemsData] = useState<Record<string, SystemData>>({});

  useEffect(() => {
    setSystemsData(getSystemsData());
  }, []);

  const iconMap: Record<string, any> = {
    CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive
  };

  const handleSystemClick = (systemName: string) => {
    const systemPath = systemName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/systems/${systemPath}`);
  };

  // Group systems by category
  const groupedSystems = Object.entries(systemsData).reduce((acc, [key, system]) => {
    if (!acc[system.category]) {
      acc[system.category] = [];
    }
    acc[system.category].push({ key, ...system });
    return acc;
  }, {} as Record<string, Array<SystemData & { key: string }>>);

  const categoryColors = {
    "Productivity & Work Systems": "from-blue-500 to-cyan-500",
    "Information & Knowledge Management": "from-green-500 to-emerald-500",
    "Communication": "from-orange-500 to-red-500",
    "Personal Life Areas": "from-pink-500 to-purple-500"
  };

  const categoryIcons = {
    "Productivity & Work Systems": CheckSquare,
    "Information & Knowledge Management": FileText,
    "Communication": MessageSquare,
    "Personal Life Areas": Heart
  };
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
        {Object.entries(groupedSystems).map(([categoryName, systems]) => {
          const CategoryIcon = categoryIcons[categoryName as keyof typeof categoryIcons] || FileText;
          const categoryColor = categoryColors[categoryName as keyof typeof categoryColors] || "from-gray-500 to-gray-600";
          
          return (
            <div key={categoryName}>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${categoryColor} flex items-center justify-center mr-4`}>
                  <CategoryIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {categoryName}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {systems.map((system) => {
                  const SystemIcon = iconMap[system.icon] || FileText;
                  return (
                    <Card 
                      key={system.key} 
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
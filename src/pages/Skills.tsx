import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const stats = [
    { label: "Total Skills", value: "18", color: "from-blue-500 to-cyan-500" },
    { label: "Projects Completed", value: "284", color: "from-purple-500 to-pink-500" },
    { label: "Years Experience", value: "4+", color: "from-green-500 to-emerald-500" },
    { label: "Expert Level", value: "6", color: "from-orange-500 to-red-500" }
  ];

  const skillCategories = [
    { name: "All Skills", active: true, icon: Star },
    { name: "Frontend", active: false, icon: Code },
    { name: "Backend", active: false, icon: Database },
    { name: "Cloud & DevOps", active: false, icon: Cloud },
    { name: "Tools & Others", active: false, icon: Wrench }
  ];

  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      level: "Expert",
      proficiency: 95,
      experience: "3+ years",
      projects: 15,
      description: "Advanced React development with hooks, context, and modern patterns",
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️"
    },
    {
      name: "TypeScript", 
      category: "Frontend",
      level: "Expert",
      proficiency: 90,
      experience: "2+ years", 
      projects: 12,
      description: "Type-safe JavaScript development with advanced TypeScript features",
      color: "from-blue-600 to-blue-800",
      icon: "📘"
    },
    {
      name: "Next.js",
      category: "Frontend", 
      level: "Advanced",
      proficiency: 85,
      experience: "2+ years",
      projects: 8,
      description: "Full-stack React framework with SSR, SSG, and API routes",
      color: "from-gray-700 to-gray-900",
      icon: "▲"
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Expert", 
      proficiency: 95,
      experience: "3+ years",
      projects: 20,
      description: "Utility-first CSS framework for rapid UI development",
      color: "from-cyan-500 to-teal-500",
      icon: "🎨"
    },
    {
      name: "Vue.js",
      category: "Frontend",
      level: "Intermediate",
      proficiency: 70,
      experience: "1+ years",
      projects: 5,
      description: "Progressive JavaScript framework for building user interfaces", 
      color: "from-green-500 to-green-700",
      icon: "🟢"
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Advanced",
      proficiency: 80,
      experience: "2+ years", 
      projects: 10,
      description: "JavaScript runtime for building scalable backend applications",
      color: "from-green-600 to-green-800",
      icon: "🟩"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Advanced": 
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, experience levels, and the 
            technologies I work with daily.
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="card-gradient p-6 text-center">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Skill Categories */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={`flex items-center space-x-2 ${
                  category.active 
                    ? "bg-gradient-primary glow-effect" 
                    : "hover:bg-secondary"
                } transition-smooth`}
              >
                <CategoryIcon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="card-gradient p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {skill.name}
                    </h3>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {skill.description}
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-semibold">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>🕒 Experience: {skill.experience}</span>
                  <span>📂 Projects: {skill.projects}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
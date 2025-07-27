import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Star, Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const stats = [
    { label: "Skill Categories", value: "6", color: "from-blue-500 to-cyan-500" },
    { label: "Total Skills", value: "65+", color: "from-purple-500 to-pink-500" },
    { label: "Years Developing", value: "10+", color: "from-green-500 to-emerald-500" },
    { label: "Core Strengths", value: "15", color: "from-orange-500 to-red-500" }
  ];

  const skillCategories = [
    { name: "All Skills", active: true, icon: Star },
    { name: "Social & Interpersonal", active: false, icon: Code },
    { name: "Communication & Influence", active: false, icon: Database },
    { name: "Leadership & Empowerment", active: false, icon: Cloud },
    { name: "Cognitive & Strategic", active: false, icon: Wrench },
    { name: "Personal Effectiveness", active: false, icon: Star },
    { name: "Professional & Technical", active: false, icon: Code }
  ];

  const skills = [
    // Social & Interpersonal Mastery
    {
      name: "Building Rapport & Relationships",
      category: "Social & Interpersonal",
      level: "Expert",
      proficiency: 95,
      experience: "10+ years",
      projects: 50,
      description: "Creating meaningful connections and fostering long-term relationships across diverse contexts",
      color: "from-blue-500 to-cyan-500",
      icon: "🤝"
    },
    {
      name: "Empathy & Compassion",
      category: "Social & Interpersonal",
      level: "Expert",
      proficiency: 90,
      experience: "10+ years",
      projects: 40,
      description: "Understanding and sharing feelings with others while providing emotional support",
      color: "from-pink-500 to-rose-500",
      icon: "❤️"
    },
    {
      name: "Teamwork & Consensus Building",
      category: "Social & Interpersonal",
      level: "Advanced",
      proficiency: 85,
      experience: "8+ years",
      projects: 35,
      description: "Collaborating effectively and building agreement among diverse team members",
      color: "from-green-500 to-emerald-500",
      icon: "👥"
    },
    {
      name: "Social Awareness & Perceptiveness",
      category: "Social & Interpersonal",
      level: "Advanced",
      proficiency: 80,
      experience: "8+ years",
      projects: 30,
      description: "Reading social cues and understanding group dynamics and individual motivations",
      color: "from-purple-500 to-violet-500",
      icon: "👁️"
    },
    
    // Communication & Influence
    {
      name: "Active Listening",
      category: "Communication & Influence",
      level: "Expert",
      proficiency: 95,
      experience: "10+ years",
      projects: 45,
      description: "Listening to understand without judgment, creating space for authentic dialogue",
      color: "from-indigo-500 to-blue-500",
      icon: "👂"
    },
    {
      name: "Effective Communication",
      category: "Communication & Influence",
      level: "Expert",
      proficiency: 90,
      experience: "10+ years",
      projects: 50,
      description: "Clear, open, and impactful communication across various mediums and audiences",
      color: "from-cyan-500 to-teal-500",
      icon: "💬"
    },
    {
      name: "Public Speaking",
      category: "Communication & Influence",
      level: "Advanced",
      proficiency: 85,
      experience: "6+ years",
      projects: 25,
      description: "Engaging and inspiring audiences through confident and compelling presentations",
      color: "from-orange-500 to-red-500",
      icon: "🎤"
    },
    {
      name: "Storytelling",
      category: "Communication & Influence",
      level: "Advanced",
      proficiency: 80,
      experience: "8+ years",
      projects: 30,
      description: "Crafting compelling narratives that resonate and inspire action",
      color: "from-yellow-500 to-orange-500",
      icon: "📚"
    },

    // Leadership & Empowerment
    {
      name: "Leadership",
      category: "Leadership & Empowerment",
      level: "Expert",
      proficiency: 90,
      experience: "8+ years",
      projects: 20,
      description: "Guiding and inspiring others toward shared vision and goals",
      color: "from-purple-500 to-pink-500",
      icon: "👑"
    },
    {
      name: "Coaching & Mentoring",
      category: "Leadership & Empowerment",
      level: "Advanced",
      proficiency: 85,
      experience: "6+ years",
      projects: 15,
      description: "Developing others' potential through guidance, support, and skill development",
      color: "from-green-500 to-blue-500",
      icon: "🎯"
    },
    {
      name: "Building Trust",
      category: "Leadership & Empowerment",
      level: "Expert",
      proficiency: 95,
      experience: "10+ years",
      projects: 40,
      description: "Establishing reliability and credibility through consistent actions and transparency",
      color: "from-blue-500 to-purple-500",
      icon: "🛡️"
    },
    {
      name: "Enabling Others",
      category: "Leadership & Empowerment",
      level: "Advanced",
      proficiency: 80,
      experience: "6+ years",
      projects: 25,
      description: "Empowering others to achieve their best by removing barriers and providing support",
      color: "from-teal-500 to-green-500",
      icon: "🚀"
    },

    // Cognitive & Strategic Abilities
    {
      name: "Critical Thinking",
      category: "Cognitive & Strategic",
      level: "Expert",
      proficiency: 95,
      experience: "10+ years",
      projects: 50,
      description: "Analyzing information objectively and making reasoned judgments",
      color: "from-gray-600 to-gray-800",
      icon: "🧠"
    },
    {
      name: "Problem Solving",
      category: "Cognitive & Strategic",
      level: "Expert",
      proficiency: 90,
      experience: "10+ years",
      projects: 45,
      description: "Identifying issues and developing effective, innovative solutions",
      color: "from-red-500 to-orange-500",
      icon: "🔧"
    },
    {
      name: "Creativity & Creative Problem-Solving",
      category: "Cognitive & Strategic",
      level: "Advanced",
      proficiency: 85,
      experience: "8+ years",
      projects: 35,
      description: "Generating innovative ideas and approaching challenges from unique angles",
      color: "from-violet-500 to-purple-500",
      icon: "🎨"
    },
    {
      name: "Goal Setting & Planning",
      category: "Cognitive & Strategic",
      level: "Advanced",
      proficiency: 80,
      experience: "8+ years",
      projects: 30,
      description: "Establishing clear objectives and developing strategic roadmaps for achievement",
      color: "from-emerald-500 to-teal-500",
      icon: "📋"
    },

    // Personal Effectiveness & Resilience
    {
      name: "Self-Awareness & Self-Reflection",
      category: "Personal Effectiveness",
      level: "Expert",
      proficiency: 95,
      experience: "10+ years",
      projects: 40,
      description: "Understanding personal strengths, weaknesses, and impact on others",
      color: "from-amber-500 to-yellow-500",
      icon: "🪞"
    },
    {
      name: "Resilience",
      category: "Personal Effectiveness",
      level: "Expert",
      proficiency: 90,
      experience: "10+ years",
      projects: 35,
      description: "Bouncing back from setbacks and maintaining effectiveness under pressure",
      color: "from-stone-500 to-gray-600",
      icon: "💪"
    },
    {
      name: "Time Management & Personal Workflow",
      category: "Personal Effectiveness",
      level: "Advanced",
      proficiency: 85,
      experience: "8+ years",
      projects: 40,
      description: "Optimizing productivity and managing priorities effectively",
      color: "from-blue-600 to-indigo-600",
      icon: "⏰"
    },
    {
      name: "Emotional Regulation & Expression",
      category: "Personal Effectiveness",
      level: "Advanced",
      proficiency: 80,
      experience: "6+ years",
      projects: 25,
      description: "Managing emotions effectively while expressing them appropriately",
      color: "from-rose-500 to-pink-500",
      icon: "🎭"
    },

    // Professional & Technical Skills
    {
      name: "Project & Task Management",
      category: "Professional & Technical",
      level: "Expert",
      proficiency: 95,
      experience: "8+ years",
      projects: 30,
      description: "Planning, executing, and delivering projects on time and within scope",
      color: "from-slate-600 to-slate-800",
      icon: "📊"
    },
    {
      name: "Design & Visual Communication",
      category: "Professional & Technical",
      level: "Advanced",
      proficiency: 85,
      experience: "6+ years",
      projects: 25,
      description: "Creating compelling visual content that communicates ideas effectively",
      color: "from-pink-500 to-purple-500",
      icon: "🎨"
    },
    {
      name: "Data Analysis & Data Manipulation",
      category: "Professional & Technical",
      level: "Advanced",
      proficiency: 80,
      experience: "5+ years",
      projects: 20,
      description: "Extracting insights from data and presenting findings clearly",
      color: "from-green-600 to-emerald-600",
      icon: "📈"
    },
    {
      name: "Automation & Optimization",
      category: "Professional & Technical",
      level: "Intermediate",
      proficiency: 75,
      experience: "4+ years",
      projects: 15,
      description: "Streamlining processes and improving efficiency through systematic improvements",
      color: "from-cyan-600 to-blue-600",
      icon: "⚙️"
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
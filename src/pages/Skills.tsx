import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const stats = [
    { label: "Skill Categories", value: "2", color: "from-blue-500 to-cyan-500" },
    { label: "Total Skills", value: "65+", color: "from-purple-500 to-pink-500" },
    { label: "Personal Skills", value: "40+", color: "from-green-500 to-emerald-500" },
    { label: "Professional Skills", value: "25+", color: "from-orange-500 to-red-500" }
  ];

  const skillCategories = [
    { name: "All Skills", active: true, icon: Star },
    { name: "Personal", active: false, icon: Code },
    { name: "Professional", active: false, icon: Database }
  ];

  const skills = [
    // Personal Skills - Social & Interpersonal
    {
      name: "Building Rapport & Relationships",
      category: "Personal",
      level: "Expert",
      description: "Creating meaningful connections and fostering long-term relationships across diverse contexts",
      color: "from-blue-500 to-cyan-500",
      icon: "🤝"
    },
    {
      name: "Empathy & Compassion",
      category: "Personal",
      level: "Expert",
      description: "Understanding and sharing feelings with others while providing emotional support",
      color: "from-pink-500 to-rose-500",
      icon: "❤️"
    },
    {
      name: "Inclusivity & Cultural Competence",
      category: "Personal",
      level: "Advanced",
      description: "Embracing diversity and working effectively across cultures",
      color: "from-green-500 to-emerald-500",
      icon: "🌍"
    },
    {
      name: "Respectfulness & Manners",
      category: "Personal",
      level: "Expert",
      description: "Demonstrating courtesy and proper etiquette in all interactions",
      color: "from-purple-500 to-violet-500",
      icon: "🎩"
    },
    {
      name: "Small Talk & Approachability",
      category: "Personal",
      level: "Advanced",
      description: "Engaging in casual conversation and being accessible to others",
      color: "from-yellow-500 to-orange-500",
      icon: "💭"
    },
    {
      name: "Social Awareness & Perceptiveness",
      category: "Personal",
      level: "Advanced",
      description: "Reading social cues and understanding group dynamics",
      color: "from-indigo-500 to-purple-500",
      icon: "👁️"
    },
    {
      name: "Understanding Boundaries",
      category: "Personal",
      level: "Advanced",
      description: "Recognizing and respecting personal and professional limits",
      color: "from-rose-500 to-pink-500",
      icon: "🚧"
    },
    
    // Personal Skills - Communication (Personal aspects)
    {
      name: "Active Listening",
      category: "Personal",
      level: "Expert",
      description: "Listening to understand without judgment, creating space for authentic dialogue",
      color: "from-indigo-500 to-blue-500",
      icon: "👂"
    },
    {
      name: "Charisma",
      category: "Personal",
      level: "Advanced",
      description: "Inspiring and attracting others through personal magnetism",
      color: "from-amber-500 to-yellow-500",
      icon: "✨"
    },
    {
      name: "Diplomacy & Tactfulness",
      category: "Personal",
      level: "Expert",
      description: "Handling sensitive situations with skill and consideration",
      color: "from-green-500 to-teal-500",
      icon: "🤝"
    },
    {
      name: "Effective Communication",
      category: "Personal",
      level: "Expert",
      description: "Clear, open, and impactful communication across various mediums",
      color: "from-cyan-500 to-teal-500",
      icon: "💬"
    },
    {
      name: "Feedback Giving & Receiving",
      category: "Personal",
      level: "Advanced",
      description: "Providing constructive feedback and receiving input gracefully",
      color: "from-purple-500 to-pink-500",
      icon: "🔄"
    },
    {
      name: "Storytelling",
      category: "Personal",
      level: "Expert",
      description: "Crafting compelling narratives that resonate and inspire",
      color: "from-violet-500 to-purple-500",
      icon: "📚"
    },

    // Personal Skills - Cognitive & Personal Growth
    {
      name: "Active Learning & Curiosity",
      category: "Personal",
      level: "Expert",
      description: "Continuously seeking knowledge and embracing new challenges",
      color: "from-blue-500 to-cyan-500",
      icon: "🧠"
    },
    {
      name: "Adaptability & Flexibility",
      category: "Personal",
      level: "Expert",
      description: "Adjusting approach and mindset to changing circumstances",
      color: "from-green-500 to-emerald-500",
      icon: "🔄"
    },
    {
      name: "Critical Thinking",
      category: "Personal",
      level: "Expert",
      description: "Analyzing information objectively and making reasoned judgments",
      color: "from-gray-600 to-slate-700",
      icon: "🤔"
    },
    {
      name: "Creativity & Creative Problem-Solving",
      category: "Personal",
      level: "Expert",
      description: "Generating innovative ideas and approaching challenges uniquely",
      color: "from-pink-500 to-purple-500",
      icon: "🎨"
    },
    {
      name: "Intuition",
      category: "Personal",
      level: "Advanced",
      description: "Using instinct and gut feelings to guide decisions",
      color: "from-violet-500 to-purple-500",
      icon: "💫"
    },
    {
      name: "Problem Solving",
      category: "Personal",
      level: "Expert",
      description: "Identifying issues and developing effective solutions",
      color: "from-orange-500 to-red-500",
      icon: "🔧"
    },
    {
      name: "Resourcefulness",
      category: "Personal",
      level: "Expert",
      description: "Finding creative ways to overcome obstacles with available means",
      color: "from-yellow-500 to-orange-500",
      icon: "🛠️"
    },

    // Personal Skills - Personal Effectiveness & Resilience
    {
      name: "Authenticity & Honesty",
      category: "Personal",
      level: "Expert",
      description: "Being genuine and truthful in all interactions",
      color: "from-blue-500 to-indigo-500",
      icon: "💎"
    },
    {
      name: "Confidence & Social Confidence",
      category: "Personal",
      level: "Advanced",
      description: "Believing in yourself and feeling comfortable in social situations",
      color: "from-purple-500 to-pink-500",
      icon: "🌟"
    },
    {
      name: "Emotional Regulation & Expression",
      category: "Personal",
      level: "Advanced",
      description: "Managing emotions effectively while expressing them appropriately",
      color: "from-rose-500 to-pink-500",
      icon: "🎭"
    },
    {
      name: "Enthusiasm & Positivity",
      category: "Personal",
      level: "Expert",
      description: "Maintaining an optimistic outlook and energetic approach",
      color: "from-yellow-500 to-orange-500",
      icon: "☀️"
    },
    {
      name: "Generosity & Graciousness",
      category: "Personal",
      level: "Expert",
      description: "Being giving with time, resources, and kindness",
      color: "from-green-500 to-emerald-500",
      icon: "🎁"
    },
    {
      name: "Gratitude & Humility",
      category: "Personal",
      level: "Expert",
      description: "Appreciating what you have and staying humble about achievements",
      color: "from-amber-500 to-yellow-500",
      icon: "🙏"
    },
    {
      name: "Mindfulness & Reflective Practice",
      category: "Personal",
      level: "Advanced",
      description: "Being present and regularly examining thoughts and actions",
      color: "from-teal-500 to-cyan-500",
      icon: "🧘"
    },
    {
      name: "Mindset of Abundance",
      category: "Personal",
      level: "Advanced",
      description: "Believing there are enough opportunities and resources for everyone",
      color: "from-emerald-500 to-green-500",
      icon: "🌱"
    },
    {
      name: "Patience",
      category: "Personal",
      level: "Advanced",
      description: "Remaining calm and composed when facing delays or difficulties",
      color: "from-blue-500 to-teal-500",
      icon: "⏳"
    },
    {
      name: "Resilience",
      category: "Personal",
      level: "Expert",
      description: "Bouncing back from setbacks and maintaining effectiveness under pressure",
      color: "from-stone-500 to-gray-600",
      icon: "💪"
    },
    {
      name: "Self-Awareness & Self-Reflection",
      category: "Personal",
      level: "Expert",
      description: "Understanding personal strengths, weaknesses, and impact on others",
      color: "from-violet-500 to-purple-500",
      icon: "🪞"
    },
    {
      name: "Self-Discipline",
      category: "Personal",
      level: "Advanced",
      description: "Controlling impulses and staying focused on long-term goals",
      color: "from-red-500 to-orange-500",
      icon: "🎯"
    },
    {
      name: "Sense of Humor",
      category: "Personal",
      level: "Advanced",
      description: "Using humor appropriately to lighten mood and build connections",
      color: "from-pink-500 to-rose-500",
      icon: "😄"
    },
    {
      name: "Time Management & Personal Workflow",
      category: "Personal",
      level: "Expert",
      description: "Optimizing productivity and managing priorities effectively",
      color: "from-indigo-500 to-blue-500",
      icon: "⏰"
    },
    {
      name: "Trustworthiness & Dependability",
      category: "Personal",
      level: "Expert",
      description: "Being reliable and consistent in words and actions",
      color: "from-slate-600 to-gray-700",
      icon: "🤝"
    },

    // Professional Skills - Leadership & Management
    {
      name: "Assertiveness",
      category: "Professional",
      level: "Advanced",
      description: "Standing up for yourself and others while respecting boundaries",
      color: "from-red-500 to-pink-500",
      icon: "💪"
    },
    {
      name: "Building Trust",
      category: "Professional",
      level: "Expert",
      description: "Establishing reliability and credibility through consistent actions",
      color: "from-blue-500 to-purple-500",
      icon: "🛡️"
    },
    {
      name: "Coaching & Mentoring",
      category: "Professional",
      level: "Expert",
      description: "Developing others' potential through guidance and support",
      color: "from-green-500 to-blue-500",
      icon: "🎯"
    },
    {
      name: "Delegation",
      category: "Professional",
      level: "Advanced",
      description: "Assigning responsibilities effectively while maintaining accountability",
      color: "from-purple-500 to-indigo-500",
      icon: "📋"
    },
    {
      name: "Enabling Others",
      category: "Professional",
      level: "Expert",
      description: "Empowering others to achieve their best by removing barriers",
      color: "from-teal-500 to-green-500",
      icon: "🚀"
    },
    {
      name: "Leadership",
      category: "Professional",
      level: "Expert",
      description: "Guiding and inspiring others toward shared vision and goals",
      color: "from-amber-500 to-orange-500",
      icon: "👑"
    },
    {
      name: "Management",
      category: "Professional",
      level: "Advanced",
      description: "Organizing resources and people to achieve objectives",
      color: "from-slate-600 to-gray-700",
      icon: "⚙️"
    },
    {
      name: "Nurturing & Emotional Support",
      category: "Professional",
      level: "Expert",
      description: "Providing care and emotional guidance to help others grow",
      color: "from-pink-500 to-rose-500",
      icon: "🤗"
    },

    // Professional Skills - Business Communication & Influence
    {
      name: "Influence & Persuasion",
      category: "Professional",
      level: "Advanced",
      description: "Convincing others and driving positive change",
      color: "from-red-500 to-orange-500",
      icon: "🎯"
    },
    {
      name: "Negotiation",
      category: "Professional",
      level: "Intermediate",
      description: "Finding mutually beneficial solutions through discussion",
      color: "from-slate-500 to-gray-600",
      icon: "⚖️"
    },
    {
      name: "Public Speaking",
      category: "Professional",
      level: "Advanced",
      description: "Engaging and inspiring audiences through presentations",
      color: "from-orange-500 to-red-500",
      icon: "🎤"
    },
    {
      name: "Writing",
      category: "Professional",
      level: "Advanced",
      description: "Expressing ideas clearly and persuasively in written form",
      color: "from-emerald-500 to-teal-500",
      icon: "✍️"
    },
    {
      name: "Networking",
      category: "Professional",
      level: "Advanced",
      description: "Building and maintaining professional relationships and connections",
      color: "from-blue-500 to-purple-500",
      icon: "🔗"
    },
    {
      name: "Teamwork & Consensus Building",
      category: "Professional",
      level: "Expert",
      description: "Collaborating effectively and building agreement among team members",
      color: "from-teal-500 to-green-500",
      icon: "👥"
    },

    // Professional Skills - Strategic & Analytical
    {
      name: "Attention to Detail",
      category: "Professional",
      level: "Advanced",
      description: "Maintaining accuracy and thoroughness in work and observations",
      color: "from-purple-500 to-violet-500",
      icon: "🔍"
    },
    {
      name: "Data Analysis & Data Manipulation",
      category: "Professional",
      level: "Advanced",
      description: "Extracting insights from data and presenting findings clearly",
      color: "from-emerald-500 to-teal-500",
      icon: "📊"
    },
    {
      name: "Decisiveness",
      category: "Professional",
      level: "Advanced",
      description: "Making timely decisions with available information",
      color: "from-red-500 to-orange-500",
      icon: "⚡"
    },
    {
      name: "Goal Setting & Planning",
      category: "Professional",
      level: "Expert",
      description: "Establishing clear objectives and developing strategic roadmaps",
      color: "from-indigo-500 to-blue-500",
      icon: "🎯"
    },
    {
      name: "Research Skills",
      category: "Professional",
      level: "Advanced",
      description: "Finding, evaluating, and synthesizing information effectively",
      color: "from-cyan-500 to-blue-500",
      icon: "🔬"
    },

    // Professional Skills - Technical & Operational
    {
      name: "Automation & Optimization",
      category: "Professional",
      level: "Advanced",
      description: "Streamlining processes and improving efficiency through systematic improvements",
      color: "from-cyan-500 to-blue-500",
      icon: "⚙️"
    },
    {
      name: "Cleaning & Organizing",
      category: "Professional",
      level: "Advanced",
      description: "Maintaining order and cleanliness in physical and digital spaces",
      color: "from-green-500 to-emerald-500",
      icon: "🧹"
    },
    {
      name: "Copywriting",
      category: "Professional",
      level: "Intermediate",
      description: "Writing persuasive content for marketing and communication",
      color: "from-purple-500 to-violet-500",
      icon: "📝"
    },
    {
      name: "CRM (Customer Relationship Management)",
      category: "Professional",
      level: "Intermediate",
      description: "Managing customer interactions and relationships systematically",
      color: "from-blue-500 to-indigo-500",
      icon: "👥"
    },
    {
      name: "Design & Visual Communication",
      category: "Professional",
      level: "Advanced",
      description: "Creating compelling visual content that communicates ideas effectively",
      color: "from-pink-500 to-purple-500",
      icon: "🎨"
    },
    {
      name: "Hands-on Approach Skills",
      category: "Professional",
      level: "Expert",
      description: "Taking direct action and getting personally involved in tasks",
      color: "from-orange-500 to-red-500",
      icon: "🔨"
    },
    {
      name: "Infographic / Data Visualization",
      category: "Professional",
      level: "Advanced",
      description: "Presenting complex information through clear visual formats",
      color: "from-emerald-500 to-teal-500",
      icon: "📊"
    },
    {
      name: "Lead Generation",
      category: "Professional",
      level: "Intermediate",
      description: "Identifying and attracting potential customers or clients",
      color: "from-yellow-500 to-orange-500",
      icon: "🎯"
    },
    {
      name: "Marketing",
      category: "Professional",
      level: "Advanced",
      description: "Promoting products, services, or ideas to target audiences",
      color: "from-red-500 to-pink-500",
      icon: "📢"
    },
    {
      name: "Onboarding / Training",
      category: "Professional",
      level: "Expert",
      description: "Helping new team members or users get started effectively",
      color: "from-teal-500 to-cyan-500",
      icon: "🎓"
    },
    {
      name: "Project & Task Management",
      category: "Professional",
      level: "Expert",
      description: "Planning, executing, and delivering projects on time and within scope",
      color: "from-slate-600 to-gray-700",
      icon: "📋"
    },
    {
      name: "Sales",
      category: "Professional",
      level: "Intermediate",
      description: "Converting prospects into customers through persuasive communication",
      color: "from-green-600 to-emerald-600",
      icon: "💰"
    },
    {
      name: "Spreadsheets",
      category: "Professional",
      level: "Advanced",
      description: "Using spreadsheet software for data analysis and organization",
      color: "from-blue-600 to-indigo-600",
      icon: "📈"
    },
    {
      name: "Subject Expert (SME)",
      category: "Professional",
      level: "Expert",
      description: "Deep knowledge and expertise in specific domains or topics",
      color: "from-violet-600 to-purple-600",
      icon: "🎓"
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

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
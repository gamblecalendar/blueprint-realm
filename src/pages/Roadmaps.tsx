import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Target, Users, Presentation, TrendingUp } from "lucide-react";

const Roadmaps = () => {
  const roadmapTabs = [
    { 
      id: "skills", 
      name: "Core Skills", 
      icon: Target,
      active: true 
    },
    { 
      id: "career", 
      name: "Career Goals", 
      icon: TrendingUp,
      active: false 
    },
    { 
      id: "company", 
      name: "Company Growth", 
      icon: Users,
      active: false 
    }
  ];

  const skillsRoadmap = {
    title: "Professional Development Roadmap",
    description: "Strategic development plan for sales and technical mastery",
    sections: [
      {
        title: "Core Skills Development",
        completed: 0,
        total: 3,
        status: "not-started",
        topics: [
          { name: "Product Mastery", completed: false },
          { name: "Presentation Skills", completed: false },
          { name: "Negotiation", completed: false }
        ]
      },
      {
        title: "Career Goal: Technical Sales Expert",
        completed: 0,
        total: 3,
        status: "not-started",
        topics: [
          { name: "Technical Proficiency", completed: false },
          { name: "Product Knowledge Mastery", completed: false },
          { name: "Sales Excellence", completed: false }
        ]
      },
      {
        title: "3-Month Sprint Goals",
        completed: 0,
        total: 5,
        status: "not-started",
        topics: [
          { name: "Improve company work processes using AI", completed: false },
          { name: "Merge company data and implement Airtable", completed: false },
          { name: "Deliver presentation on ITAsoft's offerings", completed: false },
          { name: "Learn data engineering fundamentals", completed: false },
          { name: "Define clear learning objectives", completed: false }
        ]
      },
      {
        title: "Presentation Mastery",
        completed: 0,
        total: 4,
        status: "not-started",
        topics: [
          { name: "Identify audience needs and information gaps", completed: false },
          { name: "Develop presentation creation tools and frameworks", completed: false },
          { name: "Master note-taking for effective communication", completed: false },
          { name: "Learn to leverage AI resources for content creation", completed: false }
        ]
      },
      {
        title: "Company Integration & Leadership",
        completed: 0,
        total: 4,
        status: "not-started",
        topics: [
          { name: "Get clear role definition in company", completed: false },
          { name: "Pass technical team assessment", completed: false },
          { name: "Pass sales team assessment", completed: false },
          { name: "Present company analysis and improvement plan", completed: false }
        ]
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "in-progress":
        return "text-yellow-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Roadmap</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic development plan for becoming a technical sales expert and driving company growth.
          </p>
        </div>
      </div>

      {/* Roadmap Tabs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center space-x-4 mb-8">
          {roadmapTabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={tab.active ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  tab.active 
                    ? "bg-gradient-primary glow-effect" 
                    : "hover:bg-secondary"
                } transition-smooth`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{tab.name}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Active Roadmap Content */}
      <div className="container mx-auto px-4">
        <Card className="card-gradient p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              {skillsRoadmap.title}
            </h2>
            <p className="text-muted-foreground">
              {skillsRoadmap.description}
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {skillsRoadmap.sections.slice(0, 3).map((section, index) => (
              <Card key={index} className="bg-secondary/50 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-semibold ${getStatusColor(section.status)}`}>
                    {section.title}
                  </h3>
                  {section.status === "completed" && (
                    <div className="text-green-500 text-xs bg-green-500/20 px-2 py-1 rounded">
                      COMPLETED
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <Progress 
                    value={(section.completed / section.total) * 100} 
                    className="h-2"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {section.completed} of {section.total} completed
                </p>
              </Card>
            ))}
          </div>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-6">
          {skillsRoadmap.sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="card-gradient p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {section.status === "completed" ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                {section.status === "completed" && (
                  <div className="text-green-500 text-sm bg-green-500/20 px-3 py-1 rounded-full">
                    COMPLETED
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.topics.map((topic, topicIndex) => (
                  <div 
                    key={topicIndex} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30"
                  >
                    {topic.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={topic.completed ? "text-foreground" : "text-muted-foreground"}>
                      {topic.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
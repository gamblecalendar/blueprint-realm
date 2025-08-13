import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Palette, Server, Layers } from "lucide-react";

const Roadmaps = () => {
  const roadmapTabs = [
    { 
      id: "account-manager", 
      name: "Account Manager", 
      icon: Palette, 
      active: true 
    }
  ];

  const roadmapData = {
    title: "Account Manager Career Path",
    description: "Complete roadmap to become a successful Account Manager",
    sections: [
      {
        title: "Skills to Acquire",
        status: "in-progress",
        completed: 3,
        total: 12,
        topics: [
          { name: "Active Listening & Empathetic Communication", completed: true },
          { name: "Organization & Time Management", completed: true },
          { name: "Problem-Solving", completed: true },
          { name: "Interviewing & Storytelling", completed: false },
          { name: "Building Relationships (with clients and internal teams)", completed: false },
          { name: "Meticulous Note-Taking", completed: false },
          { name: "Asking Insightful, Strategic Questions", completed: false },
          { name: "Meeting Facilitation & Basic Presentation Skills", completed: false },
          { name: "Negotiation and Persuasion", completed: false },
          { name: "Strategic Thinking", completed: false },
          { name: "Adaptability", completed: false },
          { name: "Leadership", completed: false }
        ]
      },
      {
        title: "Knowledge to Gain",
        status: "not-started",
        completed: 0,
        total: 11,
        topics: [
          { name: "Key Business Metrics (Churn, NRR, ARR, CLV)", completed: false },
          { name: "Role Definitions (AM vs AE vs CSM)", completed: false },
          { name: "CRM Fundamentals (Salesforce, HubSpot)", completed: false },
          { name: "Target Industry Knowledge (SaaS, Adtech, Fintech)", completed: false },
          { name: "Deep Product Knowledge", completed: false },
          { name: "Internal Company Processes", completed: false },
          { name: "Your Client Portfolio Understanding", completed: false },
          { name: "Opportunity Signals Recognition", completed: false },
          { name: "Microsoft Office Suite (Excel, PowerPoint)", completed: false },
          { name: "Sales and Marketing Principles", completed: false },
          { name: "Data Analysis", completed: false }
        ]
      },
      {
        title: "Experience to Build",
        status: "not-started",
        completed: 0,
        total: 11,
        topics: [
          { name: "Complete free online CRM certification", completed: false },
          { name: "Conduct informational interviews with Account Managers", completed: false },
          { name: "Rewrite resume to highlight customer-facing skills", completed: false },
          { name: "Secure entry-level job (Coordinator, SDR, CSA)", completed: false },
          { name: "Complete company onboarding and training program", completed: false },
          { name: "Shadow senior team members on client calls", completed: false },
          { name: "Handle and resolve inbound client requests", completed: false },
          { name: "Achieve a 'small win' with positive client feedback", completed: false },
          { name: "Lead a simple client check-in call independently", completed: false },
          { name: "Assist in preparing for a Quarterly Business Review (QBR)", completed: false },
          { name: "Identify a potential upsell or growth opportunity", completed: false }
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
            <span className="gradient-text">Roadmaps</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths and development roadmaps to guide your journey from 
            beginner to expert.
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
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              {roadmapData.title}
            </h2>
            <p className="text-muted-foreground">
              {roadmapData.description}
            </p>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {roadmapData.sections.map((section, index) => (
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
          {roadmapData.sections.map((section, sectionIndex) => (
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
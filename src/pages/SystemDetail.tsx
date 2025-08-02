import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive } from "lucide-react";

const SystemDetail = () => {
  const { systemName } = useParams();
  const navigate = useNavigate();

  // System data mapping
  const systemsData = {
    "task-management-system": {
      name: "Task Management System",
      icon: CheckSquare,
      category: "Productivity & Work Systems",
      description: "A comprehensive approach to organizing, prioritizing, and tracking tasks for maximum productivity.",
      content: [
        "Capture all tasks in a trusted system",
        "Categorize by priority and context",
        "Regular review and processing",
        "Clear completion criteria"
      ]
    },
    "time-management-system": {
      name: "Time Management System", 
      icon: Clock,
      category: "Productivity & Work Systems",
      description: "Strategic time allocation and scheduling methods to optimize daily productivity.",
      content: [
        "Time blocking for focused work",
        "Energy-based scheduling",
        "Buffer time for unexpected tasks",
        "Regular time audits and optimization"
      ]
    },
    "project-management": {
      name: "Project Management",
      icon: Zap,
      category: "Productivity & Work Systems", 
      description: "Frameworks for planning, executing, and delivering projects successfully.",
      content: [
        "Clear project scope and objectives",
        "Milestone-based planning",
        "Risk assessment and mitigation",
        "Regular progress tracking and reporting"
      ]
    },
    "note-taking-knowledge-base": {
      name: "Note-Taking & Knowledge Base",
      icon: FileText,
      category: "Information & Knowledge Management",
      description: "Systems for capturing, organizing, and retrieving information effectively.",
      content: [
        "Consistent note-taking methodology",
        "Searchable and linked knowledge base",
        "Regular review and synthesis",
        "Cross-referencing and tagging system"
      ]
    },
    "messaging-communication-system": {
      name: "Messaging / Communication System",
      icon: MessageSquare,
      category: "Communication",
      description: "Structured approach to managing digital communication and messaging.",
      content: [
        "Inbox zero methodology",
        "Response time standards",
        "Communication channel protocols",
        "Message prioritization system"
      ]
    },
    "health": {
      name: "Health",
      icon: Heart,
      category: "Personal Life Areas",
      description: "Holistic approach to maintaining physical and mental well-being.",
      content: [
        "Regular exercise routine",
        "Preventive healthcare scheduling",
        "Stress management techniques",
        "Sleep optimization strategies"
      ]
    }
  };

  const systemKey = systemName?.toLowerCase().replace(/\s+/g, '-') || '';
  const systemData = systemsData[systemKey as keyof typeof systemsData];

  if (!systemData) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate('/systems')}
            variant="outline" 
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Systems
          </Button>
          <Card className="card-gradient p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">System Not Found</h1>
            <p className="text-muted-foreground">This system page is under construction.</p>
          </Card>
        </div>
      </div>
    );
  }

  const SystemIcon = systemData.icon;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Button 
          onClick={() => navigate('/systems')}
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Systems
        </Button>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                  <SystemIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl mb-2">{systemData.name}</CardTitle>
                  <p className="text-muted-foreground">{systemData.category}</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {systemData.description}
              </p>
            </CardHeader>

            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Key Components</h3>
              <div className="grid gap-3">
                {systemData.content.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold mb-2">Implementation Status</h4>
                <p className="text-muted-foreground text-sm">
                  This system is currently under development. More detailed content and implementation guides will be added soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SystemDetail;
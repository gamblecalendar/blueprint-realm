import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, ArrowLeft, BookOpen, Trophy, Target } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const RoadmapSection = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams<{ sectionId: string }>();

  // Mock data for different sections - in a real app this would come from a data store
  const sectionData: Record<string, any> = {
    "skills-to-acquire": {
      title: "Skills to Acquire",
      description: "Essential skills for becoming a successful Account Manager",
      icon: Target,
      status: "in-progress",
      completed: 3,
      total: 12,
      topics: [
        { 
          name: "Active Listening & Empathetic Communication", 
          completed: true,
          description: "Master the art of truly hearing and understanding clients' needs, concerns, and emotions.",
          resources: [
            "Practice active listening techniques in daily conversations",
            "Read 'Never Eat Alone' by Keith Ferrazzi",
            "Complete Coursera course on Emotional Intelligence"
          ]
        },
        { 
          name: "Organization & Time Management", 
          completed: true,
          description: "Develop systems to manage multiple clients, priorities, and deadlines effectively.",
          resources: [
            "Implement GTD (Getting Things Done) methodology",
            "Use CRM tools for client management",
            "Learn calendar blocking techniques"
          ]
        },
        { 
          name: "Problem-Solving", 
          completed: true,
          description: "Develop analytical thinking to identify root causes and create effective solutions.",
          resources: [
            "Study case studies of successful client interventions",
            "Practice structured problem-solving frameworks",
            "Join problem-solving workshops or courses"
          ]
        },
        { 
          name: "Interviewing & Storytelling", 
          completed: false,
          description: "Learn to ask the right questions and present information compellingly.",
          resources: [
            "Practice STAR method for storytelling",
            "Read 'Made to Stick' by Chip and Dan Heath",
            "Record and review your presentation skills"
          ]
        },
        { 
          name: "Building Relationships (with clients and internal teams)", 
          completed: false,
          description: "Cultivate trust and rapport with stakeholders across all levels.",
          resources: [
            "Attend networking events in your industry",
            "Practice relationship mapping techniques",
            "Study successful account manager case studies"
          ]
        },
        { 
          name: "Meticulous Note-Taking", 
          completed: false,
          description: "Develop systems for capturing, organizing, and retrieving important information.",
          resources: [
            "Learn Cornell note-taking method",
            "Use digital tools like Notion or Obsidian",
            "Practice structured meeting documentation"
          ]
        },
        { 
          name: "Asking Insightful, Strategic Questions", 
          completed: false,
          description: "Master the art of inquiry to uncover opportunities and challenges.",
          resources: [
            "Study the SPIN selling methodology",
            "Practice question frameworks like 5 Whys",
            "Role-play challenging client scenarios"
          ]
        },
        { 
          name: "Meeting Facilitation & Basic Presentation Skills", 
          completed: false,
          description: "Lead productive meetings and present ideas clearly and persuasively.",
          resources: [
            "Join Toastmasters for presentation practice",
            "Learn meeting facilitation techniques",
            "Practice with PowerPoint and presentation tools"
          ]
        },
        { 
          name: "Negotiation and Persuasion", 
          completed: false,
          description: "Develop win-win negotiation skills and influence techniques.",
          resources: [
            "Read 'Getting to Yes' by Roger Fisher",
            "Take a negotiation course",
            "Practice with mock negotiation scenarios"
          ]
        },
        { 
          name: "Strategic Thinking", 
          completed: false,
          description: "Think beyond immediate tasks to long-term business impact and planning.",
          resources: [
            "Study business strategy frameworks",
            "Read Harvard Business Review articles",
            "Practice strategic planning exercises"
          ]
        },
        { 
          name: "Adaptability", 
          completed: false,
          description: "Develop flexibility to handle changing client needs and market conditions.",
          resources: [
            "Practice change management techniques",
            "Study agile methodologies",
            "Reflect on past experiences with change"
          ]
        },
        { 
          name: "Leadership", 
          completed: false,
          description: "Build skills to influence without authority and guide project teams.",
          resources: [
            "Read leadership books like 'The 7 Habits'",
            "Volunteer for leadership roles",
            "Seek mentorship from experienced leaders"
          ]
        }
      ]
    },
    "knowledge-to-gain": {
      title: "Knowledge to Gain",
      description: "Essential knowledge areas for Account Management success",
      icon: BookOpen,
      status: "not-started",
      completed: 0,
      total: 11,
      topics: [
        { 
          name: "Key Business Metrics (Churn, NRR, ARR, CLV)", 
          completed: false,
          description: "Understand the financial metrics that drive SaaS business decisions.",
          resources: [
            "Study SaaS metrics fundamentals",
            "Learn to calculate and interpret CLV",
            "Understand revenue recognition principles"
          ]
        },
        { 
          name: "Role Definitions (AM vs AE vs CSM)", 
          completed: false,
          description: "Clear understanding of different sales and success roles and their boundaries.",
          resources: [
            "Interview professionals in each role",
            "Study role-specific responsibilities",
            "Understand handoff processes between roles"
          ]
        }
        // Add more topics as needed
      ]
    },
    "experience-to-build": {
      title: "Experience to Build",
      description: "Practical experiences to develop your Account Management capabilities",
      icon: Trophy,
      status: "not-started",
      completed: 0,
      total: 11,
      topics: [
        { 
          name: "Complete free online CRM certification", 
          completed: false,
          description: "Get hands-on experience with customer relationship management tools.",
          resources: [
            "Complete Salesforce Trailhead modules",
            "Try HubSpot Academy courses",
            "Practice with CRM sandbox environments"
          ]
        },
        { 
          name: "Conduct informational interviews with Account Managers", 
          completed: false,
          description: "Learn from experienced professionals about the real-world aspects of the role.",
          resources: [
            "Reach out to AMs on LinkedIn",
            "Prepare thoughtful interview questions",
            "Document insights and best practices"
          ]
        }
        // Add more topics as needed
      ]
    }
  };

  const section = sectionData[sectionId || ""];

  if (!section) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Section Not Found</h1>
            <p className="text-muted-foreground mb-6">The requested roadmap section could not be found.</p>
            <Button onClick={() => navigate('/roadmaps')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Roadmaps
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const SectionIcon = section.icon;

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/roadmaps')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Roadmaps
        </Button>
        
        <Card className="card-gradient p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <SectionIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {section.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {section.description}
            </p>
            
            {/* Progress */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{section.completed} of {section.total} completed</span>
              </div>
              <Progress 
                value={(section.completed / section.total) * 100} 
                className="h-3"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Topics */}
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {section.topics.map((topic: any, index: number) => (
            <Card key={index} className="card-gradient p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {topic.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    topic.completed ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {topic.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {topic.description}
                  </p>
                  
                  {topic.resources && (
                    <div>
                      <h4 className="font-medium mb-2 text-sm text-foreground">
                        Resources & Action Steps:
                      </h4>
                      <ul className="space-y-1">
                        {topic.resources.map((resource: string, resourceIndex: number) => (
                          <li key={resourceIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
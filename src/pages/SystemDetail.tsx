import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive } from "lucide-react";
import { getSystemsData, saveSystemsData, SystemData } from "@/lib/data";
import { EditableText, EditableList } from "@/components/EditableText";

const SystemDetail = () => {
  const { systemName } = useParams();
  const navigate = useNavigate();
  const [systemsData, setSystemsData] = useState<Record<string, SystemData>>({});

  useEffect(() => {
    setSystemsData(getSystemsData());
  }, []);

  const iconMap: Record<string, any> = {
    CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive
  };

  const systemKey = systemName?.toLowerCase().replace(/\s+/g, '-') || '';
  const systemData = systemsData[systemKey];

  const updateSystemData = (key: string, updates: Partial<SystemData>) => {
    const updatedSystems = {
      ...systemsData,
      [key]: { ...systemsData[key], ...updates }
    };
    setSystemsData(updatedSystems);
    saveSystemsData(updatedSystems);
  };

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
            <p className="text-muted-foreground">This system doesn't exist yet. Create it by adding it to your systems list.</p>
          </Card>
        </div>
      </div>
    );
  }

  const SystemIcon = iconMap[systemData.icon] || FileText;

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
                <div className="flex-1">
                  <EditableText
                    value={systemData.name}
                    onSave={(value) => updateSystemData(systemKey, { name: value })}
                    className="text-3xl font-bold mb-2"
                  />
                  <EditableText
                    value={systemData.category}
                    onSave={(value) => updateSystemData(systemKey, { category: value })}
                    className="text-muted-foreground"
                  />
                </div>
              </div>
              <EditableText
                value={systemData.description}
                onSave={(value) => updateSystemData(systemKey, { description: value })}
                multiline
                className="text-lg text-muted-foreground leading-relaxed"
              />
            </CardHeader>

            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Key Components</h3>
              <EditableList
                items={systemData.content}
                onSave={(items) => updateSystemData(systemKey, { content: items })}
              />

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
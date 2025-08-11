import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditableList } from "@/components/EditableText";

const About = () => {
  const [values, setValues] = useState<string[]>([]);
  const [roleModels, setRoleModels] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">About Me</h1>
            <p className="text-muted-foreground text-lg">
              Getting to know myself better through reflection
            </p>
          </div>

          {/* Values Section */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>My Values</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EditableList
                items={values}
                onSave={setValues}
                className="space-y-2"
              />
              {values.length === 0 && (
                <p className="text-muted-foreground italic">
                  Click to add your core values...
                </p>
              )}
            </CardContent>
          </Card>

          {/* Role Models Section */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Role Models</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EditableList
                items={roleModels}
                onSave={setRoleModels}
                className="space-y-2"
              />
              {roleModels.length === 0 && (
                <p className="text-muted-foreground italic">
                  Click to add people who inspire you...
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
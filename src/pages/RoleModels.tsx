import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableList } from "@/components/EditableText";
import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleModels = () => {
  const navigate = useNavigate();
  const [roleModels, setRoleModels] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/about")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to About</span>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Role Models</h1>
            <p className="text-muted-foreground text-lg">
              People who inspire and influence my journey
            </p>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>My Inspirations</span>
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

export default RoleModels;
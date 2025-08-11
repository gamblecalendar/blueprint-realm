import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableList } from "@/components/EditableText";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Values = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<string[]>([]);

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
            <h1 className="text-4xl font-bold gradient-text mb-4">My Values</h1>
            <p className="text-muted-foreground text-lg">
              The principles that guide my decisions and actions
            </p>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Core Values</span>
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
        </div>
      </div>
    </div>
  );
};

export default Values;
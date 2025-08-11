import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, BookOpen, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

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

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Values Preview */}
            <Card className="glass-card cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/values")}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>My Values</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The principles that guide my decisions and actions
                </p>
              </CardContent>
            </Card>

            {/* Role Models Preview */}
            <Card className="glass-card cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/role-models")}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Role Models</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People who inspire and influence my journey
                </p>
              </CardContent>
            </Card>

            {/* Routines Preview */}
            <Card className="glass-card cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/routines")}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span>My Routines</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Daily and weekly habits that keep me on track
                </p>
              </CardContent>
            </Card>

            {/* Journal Preview */}
            <Card className="glass-card cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/journal-history")}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Weekly Journal</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A collection of my weekly reflections and memories
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
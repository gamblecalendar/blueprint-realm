import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Routines = () => {
  // Daily protein tracking
  const [currentProtein, setCurrentProtein] = useState(0);
  const proteinGoal = 120;

  // Weekly routine checkboxes
  const [weeklyTasks, setWeeklyTasks] = useState({
    gym1: false,
    gym2: false,
    gym3: false,
    running: false,
    flexibility: false,
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProtein = localStorage.getItem('dailyProtein');
    const savedTasks = localStorage.getItem('weeklyTasks');
    
    if (savedProtein) {
      setCurrentProtein(Number(savedProtein));
    }
    
    if (savedTasks) {
      setWeeklyTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save protein to localStorage
  useEffect(() => {
    localStorage.setItem('dailyProtein', currentProtein.toString());
  }, [currentProtein]);

  // Save weekly tasks to localStorage
  useEffect(() => {
    localStorage.setItem('weeklyTasks', JSON.stringify(weeklyTasks));
  }, [weeklyTasks]);

  const handleTaskChange = (taskKey: keyof typeof weeklyTasks) => {
    setWeeklyTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const resetWeekly = () => {
    setWeeklyTasks({
      gym1: false,
      gym2: false,
      gym3: false,
      running: false,
      flexibility: false,
    });
  };

  const proteinProgress = Math.min((currentProtein / proteinGoal) * 100, 100);
  const completedTasks = Object.values(weeklyTasks).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Routines</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your daily nutrition and weekly fitness goals
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Daily Routine - Protein Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🥗 Daily Routine
              </CardTitle>
              <CardDescription>
                Track your daily protein intake goal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="protein-input">Current Protein Intake (g)</Label>
                <div className="flex gap-4 items-center">
                  <Input
                    id="protein-input"
                    type="number"
                    value={currentProtein}
                    onChange={(e) => setCurrentProtein(Number(e.target.value))}
                    placeholder="0"
                    className="max-w-32"
                    min="0"
                    max="300"
                  />
                  <span className="text-sm text-muted-foreground">
                    / {proteinGoal}g goal
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(proteinProgress)}%</span>
                </div>
                <Progress value={proteinProgress} className="h-3" />
              </div>

              <Button
                onClick={() => setCurrentProtein(0)}
                variant="outline"
                size="sm"
              >
                Reset Daily
              </Button>
            </CardContent>
          </Card>

          {/* Weekly Routine - Exercise Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💪 Weekly Routine
              </CardTitle>
              <CardDescription>
                Complete your weekly fitness goals ({completedTasks}/5 completed)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="gym1"
                    checked={weeklyTasks.gym1}
                    onCheckedChange={() => handleTaskChange('gym1')}
                  />
                  <Label htmlFor="gym1" className="cursor-pointer">
                    🏋️ Gym Session #1
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="gym2"
                    checked={weeklyTasks.gym2}
                    onCheckedChange={() => handleTaskChange('gym2')}
                  />
                  <Label htmlFor="gym2" className="cursor-pointer">
                    🏋️ Gym Session #2
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="gym3"
                    checked={weeklyTasks.gym3}
                    onCheckedChange={() => handleTaskChange('gym3')}
                  />
                  <Label htmlFor="gym3" className="cursor-pointer">
                    🏋️ Gym Session #3
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="running"
                    checked={weeklyTasks.running}
                    onCheckedChange={() => handleTaskChange('running')}
                  />
                  <Label htmlFor="running" className="cursor-pointer">
                    🏃 Running Session
                  </Label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="flexibility"
                    checked={weeklyTasks.flexibility}
                    onCheckedChange={() => handleTaskChange('flexibility')}
                  />
                  <Label htmlFor="flexibility" className="cursor-pointer">
                    🧘 Flexibility/Stretching
                  </Label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={resetWeekly}
                  variant="outline"
                  size="sm"
                >
                  Reset Week
                </Button>
                {completedTasks === 5 && (
                  <div className="text-sm text-green-600 font-medium flex items-center">
                    🎉 Week completed!
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Routines;
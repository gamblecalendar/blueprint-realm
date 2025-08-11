import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Target, Activity, Dumbbell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Routines = () => {
  const navigate = useNavigate();
  
  // Routines state
  const [currentProtein, setCurrentProtein] = useState(0);
  const [weeklyTasks, setWeeklyTasks] = useState({
    gym1: false,
    gym2: false,
    gym3: false,
    running: false,
    flexibility: false,
  });

  // Load data from localStorage
  useEffect(() => {
    const savedProtein = localStorage.getItem('currentProtein');
    if (savedProtein) {
      setCurrentProtein(parseInt(savedProtein));
    }

    const savedTasks = localStorage.getItem('weeklyTasks');
    if (savedTasks) {
      setWeeklyTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save protein to localStorage
  useEffect(() => {
    localStorage.setItem('currentProtein', currentProtein.toString());
  }, [currentProtein]);

  // Save tasks to localStorage
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

  const completedTasks = Object.values(weeklyTasks).filter(Boolean).length;
  const totalTasks = Object.keys(weeklyTasks).length;
  const weeklyProgress = (completedTasks / totalTasks) * 100;
  const proteinProgress = Math.min((currentProtein / 120) * 100, 100);

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
            <h1 className="text-4xl font-bold gradient-text mb-4">My Routines</h1>
            <p className="text-muted-foreground text-lg">
              Daily and weekly habits that keep me on track
            </p>
          </div>

          {/* Daily Routines Section */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Daily Routine</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Protein Goal</label>
                  <span className="text-sm text-muted-foreground">{currentProtein}g / 120g</span>
                </div>
                <Input
                  type="number"
                  placeholder="Enter protein amount"
                  value={currentProtein}
                  onChange={(e) => setCurrentProtein(Number(e.target.value))}
                  className="w-full"
                />
                <Progress value={proteinProgress} className="w-full" />
                <Button 
                  onClick={() => setCurrentProtein(0)} 
                  variant="outline" 
                  size="sm"
                >
                  Reset Daily
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Routines Section */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Weekly Routine</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-muted-foreground">{completedTasks}/{totalTasks} completed</span>
                </div>
                <Progress value={weeklyProgress} className="w-full mb-4" />
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={weeklyTasks.gym1}
                      onChange={() => handleTaskChange('gym1')}
                      className="rounded"
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 1</span>
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={weeklyTasks.gym2}
                      onChange={() => handleTaskChange('gym2')}
                      className="rounded"
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 2</span>
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={weeklyTasks.gym3}
                      onChange={() => handleTaskChange('gym3')}
                      className="rounded"
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 3</span>
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={weeklyTasks.running}
                      onChange={() => handleTaskChange('running')}
                      className="rounded"
                    />
                    <span>Running Session</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={weeklyTasks.flexibility}
                      onChange={() => handleTaskChange('flexibility')}
                      className="rounded"
                    />
                    <span>Flexibility/Stretching</span>
                  </label>
                </div>

                {completedTasks === totalTasks && (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      🎉 Great job! You've completed all your weekly routines!
                    </p>
                  </div>
                )}

                <Button onClick={resetWeekly} variant="outline" size="sm">
                  Reset Weekly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Routines;
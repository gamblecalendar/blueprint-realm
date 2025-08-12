import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Target, Activity, Dumbbell, Heart, Brain, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Routines = () => {
  const navigate = useNavigate();
  
  // Routines state
  const [dailyTasks, setDailyTasks] = useState({
    protein1: false,
    protein2: false,
    protein3: false,
    protein4: false,
    protein5: false,
    fiber1: false,
    fiber2: false,
    fiber3: false,
    meditation: false,
    computerOff: false,
  });
  const [weeklyTasks, setWeeklyTasks] = useState({
    gym1: false,
    gym2: false,
    gym3: false,
    running: false,
    calisthenics: false,
    flexibility: false,
  });

  // Load data from localStorage
  useEffect(() => {
    const savedDaily = localStorage.getItem('dailyTasks');
    if (savedDaily) {
      setDailyTasks(JSON.parse(savedDaily));
    }

    const savedWeekly = localStorage.getItem('weeklyTasks');
    if (savedWeekly) {
      setWeeklyTasks(JSON.parse(savedWeekly));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('dailyTasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  useEffect(() => {
    localStorage.setItem('weeklyTasks', JSON.stringify(weeklyTasks));
  }, [weeklyTasks]);

  const handleDailyTaskChange = (taskKey: keyof typeof dailyTasks) => {
    setDailyTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const handleWeeklyTaskChange = (taskKey: keyof typeof weeklyTasks) => {
    setWeeklyTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const resetDaily = () => {
    setDailyTasks({
      protein1: false,
      protein2: false,
      protein3: false,
      protein4: false,
      protein5: false,
      fiber1: false,
      fiber2: false,
      fiber3: false,
      meditation: false,
      computerOff: false,
    });
  };

  const resetWeekly = () => {
    setWeeklyTasks({
      gym1: false,
      gym2: false,
      gym3: false,
      running: false,
      calisthenics: false,
      flexibility: false,
    });
  };

  const completedDaily = Object.values(dailyTasks).filter(Boolean).length;
  const totalDaily = Object.keys(dailyTasks).length;
  const dailyProgress = (completedDaily / totalDaily) * 100;

  const completedWeekly = Object.values(weeklyTasks).filter(Boolean).length;
  const totalWeekly = Object.keys(weeklyTasks).length;
  const weeklyProgress = (completedWeekly / totalWeekly) * 100;

  const proteinCompleted = Object.values(dailyTasks).slice(0, 5).filter(Boolean).length;
  const fiberCompleted = Object.values(dailyTasks).slice(5, 8).filter(Boolean).length;

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
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{completedDaily}/{totalDaily} completed</span>
              </div>
              <Progress value={dailyProgress} className="w-full mb-6" />
              
              {/* Protein Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Protein Goal</span>
                  </label>
                  <span className="text-sm text-muted-foreground">{proteinCompleted * 25}g / 125g</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox
                        checked={dailyTasks[`protein${num}` as keyof typeof dailyTasks]}
                        onCheckedChange={() => handleDailyTaskChange(`protein${num}` as keyof typeof dailyTasks)}
                      />
                      <span className="text-sm">25g</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fiber Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-green-500" />
                    <span>Fiber Intake</span>
                  </label>
                  <span className="text-sm text-muted-foreground">{fiberCompleted * 4}g / 12g</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox
                        checked={dailyTasks[`fiber${num}` as keyof typeof dailyTasks]}
                        onCheckedChange={() => handleDailyTaskChange(`fiber${num}` as keyof typeof dailyTasks)}
                      />
                      <span className="text-sm">4g</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Daily Tasks */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={dailyTasks.meditation}
                    onCheckedChange={() => handleDailyTaskChange('meditation')}
                  />
                  <span className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <span>5 Minute Meditation</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={dailyTasks.computerOff}
                    onCheckedChange={() => handleDailyTaskChange('computerOff')}
                  />
                  <span className="flex items-center space-x-2">
                    <Monitor className="h-4 w-4 text-blue-500" />
                    <span>Turn off computer before 10:30 PM</span>
                  </span>
                </div>
              </div>

              {completedDaily === totalDaily && (
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    🎉 Perfect day! You've completed all your daily routines!
                  </p>
                </div>
              )}

              <Button onClick={resetDaily} variant="outline" size="sm">
                Reset Daily
              </Button>
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
                  <span className="text-sm text-muted-foreground">{completedWeekly}/{totalWeekly} completed</span>
                </div>
                <Progress value={weeklyProgress} className="w-full mb-4" />
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.gym1}
                      onCheckedChange={() => handleWeeklyTaskChange('gym1')}
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 1</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.gym2}
                      onCheckedChange={() => handleWeeklyTaskChange('gym2')}
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 2</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.gym3}
                      onCheckedChange={() => handleWeeklyTaskChange('gym3')}
                    />
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4" />
                      <span>Gym Session 3</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.running}
                      onCheckedChange={() => handleWeeklyTaskChange('running')}
                    />
                    <span>Running Session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.calisthenics}
                      onCheckedChange={() => handleWeeklyTaskChange('calisthenics')}
                    />
                    <span>Calisthenics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={weeklyTasks.flexibility}
                      onCheckedChange={() => handleWeeklyTaskChange('flexibility')}
                    />
                    <span>Flexibility/Stretching</span>
                  </div>
                </div>

                {completedWeekly === totalWeekly && (
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      🎉 Amazing week! You've completed all your weekly routines!
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

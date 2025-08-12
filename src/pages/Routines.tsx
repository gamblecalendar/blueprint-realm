import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
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
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className={`w-12 h-12 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs font-medium ${
                        dailyTasks[`protein${num}` as keyof typeof dailyTasks]
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'bg-background border-muted-foreground/20 hover:border-primary/50'
                      }`}
                      onClick={() => handleDailyTaskChange(`protein${num}` as keyof typeof dailyTasks)}
                    >
                      25g
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
                <div className="flex gap-1">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`w-16 h-12 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs font-medium ${
                        dailyTasks[`fiber${num}` as keyof typeof dailyTasks]
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-background border-muted-foreground/20 hover:border-green-500/50'
                      }`}
                      onClick={() => handleDailyTaskChange(`fiber${num}` as keyof typeof dailyTasks)}
                    >
                      4g
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Daily Tasks */}
              <div className="space-y-3">
                <div 
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    dailyTasks.meditation
                      ? 'bg-purple-500/10 border-purple-500 text-purple-700 dark:text-purple-300'
                      : 'bg-background border-muted-foreground/20 hover:border-purple-500/50'
                  }`}
                  onClick={() => handleDailyTaskChange('meditation')}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    dailyTasks.meditation ? 'bg-purple-500 border-purple-500' : 'border-muted-foreground/20'
                  }`}>
                    {dailyTasks.meditation && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <span className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <span>5 Minute Meditation</span>
                  </span>
                </div>
                <div 
                  className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    dailyTasks.computerOff
                      ? 'bg-blue-500/10 border-blue-500 text-blue-700 dark:text-blue-300'
                      : 'bg-background border-muted-foreground/20 hover:border-blue-500/50'
                  }`}
                  onClick={() => handleDailyTaskChange('computerOff')}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    dailyTasks.computerOff ? 'bg-blue-500 border-blue-500' : 'border-muted-foreground/20'
                  }`}>
                    {dailyTasks.computerOff && <Check className="h-4 w-4 text-white" />}
                  </div>
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
                
              {/* Gym Sessions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center space-x-2">
                    <Dumbbell className="h-4 w-4 text-orange-500" />
                    <span>Gym Sessions</span>
                  </label>
                  <span className="text-sm text-muted-foreground">
                    {[weeklyTasks.gym1, weeklyTasks.gym2, weeklyTasks.gym3].filter(Boolean).length}/3 completed
                  </span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`flex-1 h-12 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs font-medium ${
                        weeklyTasks[`gym${num}` as keyof typeof weeklyTasks]
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'bg-background border-muted-foreground/20 hover:border-orange-500/50'
                      }`}
                      onClick={() => handleWeeklyTaskChange(`gym${num}` as keyof typeof weeklyTasks)}
                    >
                      Gym {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Activities */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  <div 
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      weeklyTasks.running
                        ? 'bg-blue-500/10 border-blue-500 text-blue-700 dark:text-blue-300'
                        : 'bg-background border-muted-foreground/20 hover:border-blue-500/50'
                    }`}
                    onClick={() => handleWeeklyTaskChange('running')}
                  >
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      weeklyTasks.running ? 'bg-blue-500 border-blue-500' : 'border-muted-foreground/20'
                    }`}>
                      {weeklyTasks.running && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <span className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      <span>Running Session</span>
                    </span>
                  </div>
                  
                  <div 
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      weeklyTasks.calisthenics
                        ? 'bg-green-500/10 border-green-500 text-green-700 dark:text-green-300'
                        : 'bg-background border-muted-foreground/20 hover:border-green-500/50'
                    }`}
                    onClick={() => handleWeeklyTaskChange('calisthenics')}
                  >
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      weeklyTasks.calisthenics ? 'bg-green-500 border-green-500' : 'border-muted-foreground/20'
                    }`}>
                      {weeklyTasks.calisthenics && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <span className="flex items-center space-x-2">
                      <Dumbbell className="h-4 w-4 text-green-500" />
                      <span>Calisthenics</span>
                    </span>
                  </div>
                  
                  <div 
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      weeklyTasks.flexibility
                        ? 'bg-purple-500/10 border-purple-500 text-purple-700 dark:text-purple-300'
                        : 'bg-background border-muted-foreground/20 hover:border-purple-500/50'
                    }`}
                    onClick={() => handleWeeklyTaskChange('flexibility')}
                  >
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                      weeklyTasks.flexibility ? 'bg-purple-500 border-purple-500' : 'border-muted-foreground/20'
                    }`}>
                      {weeklyTasks.flexibility && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <span className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-purple-500" />
                      <span>Flexibility/Stretching</span>
                    </span>
                  </div>
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

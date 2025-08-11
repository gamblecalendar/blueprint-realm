import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableList, EditableText } from "@/components/EditableText";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Calendar, Camera, Heart, Music, Users, Briefcase, Target, Dumbbell, Activity } from "lucide-react";

const About = () => {
  const [values, setValues] = useState<string[]>([]);
  const [roleModels, setRoleModels] = useState<string[]>([]);
  
  // Routines state
  const [currentProtein, setCurrentProtein] = useState(0);
  const [weeklyTasks, setWeeklyTasks] = useState({
    gym1: false,
    gym2: false,
    gym3: false,
    running: false,
    flexibility: false,
  });

  // Journal state
  const [weekTitle, setWeekTitle] = useState("Week Title");
  const [quarter, setQuarter] = useState("Quarter");
  const [month, setMonth] = useState("Month");
  const [workNotes, setWorkNotes] = useState("");
  const [personalNotes, setPersonalNotes] = useState("");
  const [peopleNotes, setPeopleNotes] = useState("");
  const [skyNotes, setSkyNotes] = useState("");
  const [musicNotes, setMusicNotes] = useState("");
  const [mood, setMood] = useState("");
  const [quote, setQuote] = useState("");

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

  const resetTemplate = () => {
    setWeekTitle("Week Title");
    setQuarter("Quarter");
    setMonth("Month");
    setWorkNotes("");
    setPersonalNotes("");
    setPeopleNotes("");
    setSkyNotes("");
    setMusicNotes("");
    setMood("");
    setQuote("");
  };

  const completedTasks = Object.values(weeklyTasks).filter(Boolean).length;
  const totalTasks = Object.keys(weeklyTasks).length;
  const weeklyProgress = (completedTasks / totalTasks) * 100;
  const proteinProgress = Math.min((currentProtein / 120) * 100, 100);

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

          {/* Weekly Journal Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold gradient-text mb-4">Weekly Journal</h2>
              <Button onClick={resetTemplate} variant="outline" size="sm">
                New Week Template
              </Button>
            </div>

            {/* Week Header */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <EditableText 
                      value={weekTitle} 
                      onSave={setWeekTitle}
                      className="text-2xl font-bold"
                    />
                  </div>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <EditableText value={quarter} onSave={setQuarter} />
                    <span>•</span>
                    <EditableText value={month} onSave={setMonth} />
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Work Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>Work</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center text-muted-foreground">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <p>Photo</p>
                  </div>
                  <Textarea
                    placeholder="Reflect on your work week..."
                    value={workNotes}
                    onChange={(e) => setWorkNotes(e.target.value)}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              {/* Personal Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Personal</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center text-muted-foreground">
                    <Camera className="h-8 w-8 mx-auto mb-2" />
                    <p>Photo</p>
                  </div>
                  <Textarea
                    placeholder="Personal highlights and reflections..."
                    value={personalNotes}
                    onChange={(e) => setPersonalNotes(e.target.value)}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              {/* People Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>People</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="People you connected with this week..."
                    value={peopleNotes}
                    onChange={(e) => setPeopleNotes(e.target.value)}
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>

              {/* Sky & Music Section */}
              <Card className="glass-card">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Sky</label>
                    <Textarea
                      placeholder="Weather, nature observations..."
                      value={skyNotes}
                      onChange={(e) => setSkyNotes(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Music className="h-4 w-4 text-primary" />
                      <label className="text-sm font-medium text-muted-foreground">Music</label>
                    </div>
                    <Textarea
                      placeholder="Songs, artists, concerts..."
                      value={musicNotes}
                      onChange={(e) => setMusicNotes(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mood & Quote Section */}
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Mood</label>
                    <Textarea
                      placeholder="How did you feel this week?"
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Quote</label>
                    <Textarea
                      placeholder="A quote that resonated with you..."
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
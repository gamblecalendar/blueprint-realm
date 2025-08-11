import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditableText } from "@/components/EditableText";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Camera, Heart, Music, Users, Briefcase } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const JournalEntry = () => {
  const navigate = useNavigate();
  const { weekId } = useParams();
  
  // Journal state
  const [weekTitle, setWeekTitle] = useState(`Week ${weekId}`);
  const [quarter, setQuarter] = useState("Quarter");
  const [month, setMonth] = useState("Month");
  const [workNotes, setWorkNotes] = useState("");
  const [personalNotes, setPersonalNotes] = useState("");
  const [peopleNotes, setPeopleNotes] = useState("");
  const [skyNotes, setSkyNotes] = useState("");
  const [musicNotes, setMusicNotes] = useState("");
  const [mood, setMood] = useState("");
  const [quote, setQuote] = useState("");

  const resetTemplate = () => {
    setWeekTitle(`Week ${weekId}`);
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

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/journal-history")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Journal History</span>
            </Button>
            
            <Button onClick={resetTemplate} variant="outline" size="sm">
              Reset Template
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
  );
};

export default JournalEntry;
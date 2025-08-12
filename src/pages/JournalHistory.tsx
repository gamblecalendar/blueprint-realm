import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Plus, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface JournalEntry {
  id: string;
  week: string;
  year: number;
  weekNumber: number;
  title: string;
  createdAt: Date;
}

const JournalHistory = () => {
  const navigate = useNavigate();
  const [journals] = useState<JournalEntry[]>([
    // Sample data - replace with actual data from storage
    {
      id: "1",
      week: "2025w03",
      year: 2025,
      weekNumber: 3,
      title: "Finding My Rhythm",
      createdAt: new Date("2025-01-20")
    },
    {
      id: "2",
      week: "2025w02",
      year: 2025,
      weekNumber: 2,
      title: "Building Momentum",
      createdAt: new Date("2025-01-13")
    },
    {
      id: "3",
      week: "2025w01",
      year: 2025,
      weekNumber: 1,
      title: "New Year Reflections",
      createdAt: new Date("2025-01-06")
    },
    {
      id: "4", 
      week: "2024w52",
      year: 2024,
      weekNumber: 52,
      title: "Year End Review",
      createdAt: new Date("2024-12-30")
    },
    {
      id: "5", 
      week: "2024w51",
      year: 2024,
      weekNumber: 51,
      title: "Holiday Preparations",
      createdAt: new Date("2024-12-23")
    },
    {
      id: "6", 
      week: "2024w50",
      year: 2024,
      weekNumber: 50,
      title: "Winter Reflections",
      createdAt: new Date("2024-12-16")
    },
    {
      id: "7", 
      week: "2024w49",
      year: 2024,
      weekNumber: 49,
      title: "December Goals",
      createdAt: new Date("2024-12-09")
    },
    {
      id: "8", 
      week: "2024w48",
      year: 2024,
      weekNumber: 48,
      title: "Thanksgiving Week",
      createdAt: new Date("2024-12-02")
    }
  ]);

  const groupedJournals = journals.reduce((acc, journal) => {
    if (!acc[journal.year]) {
      acc[journal.year] = [];
    }
    acc[journal.year].push(journal);
    return acc;
  }, {} as Record<number, JournalEntry[]>);

  const sortedYears = Object.keys(groupedJournals)
    .map(Number)
    .sort((a, b) => b - a);

  const createNewJournal = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const week = getWeekNumber(currentDate);
    navigate(`/journal/${year}w${week.toString().padStart(2, '0')}`);
  };

  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/about")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to About</span>
            </Button>
            
            <Button
              onClick={createNewJournal}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>New Journal Entry</span>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Journal History</h1>
            <p className="text-muted-foreground text-lg">
              A collection of my weekly reflections and memories
            </p>
          </div>

          {sortedYears.map(year => (
            <Card key={year} className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{year}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedJournals[year]
                    .sort((a, b) => b.weekNumber - a.weekNumber)
                    .map(journal => (
                    <Card 
                      key={journal.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => navigate(`/journal/${journal.week}`)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="font-medium">{journal.week}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{journal.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {journal.createdAt.toLocaleDateString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {groupedJournals[year].length === 0 && (
                  <p className="text-muted-foreground italic text-center py-8">
                    No journal entries for {year}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}

          {sortedYears.length === 0 && (
            <Card className="glass-card">
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No journal entries yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start your journey by creating your first weekly journal entry
                </p>
                <Button onClick={createNewJournal}>
                  Create First Entry
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalHistory;
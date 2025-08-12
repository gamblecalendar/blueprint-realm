import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TimeBreakdown = () => {
  const navigate = useNavigate();

  const timeData = {
    daily: {
      sleep: 8,
      work: 8,
      exercise: 1,
      meals: 2,
      personal: 3,
      commute: 1,
      other: 1
    },
    weekly: {
      work: 40,
      exercise: 7,
      personal: 21,
      household: 8,
      social: 10,
      learning: 6,
      rest: 68
    },
    monthly: {
      work: 160,
      exercise: 30,
      personal: 84,
      household: 32,
      social: 40,
      learning: 24,
      travel: 10,
      rest: 272
    },
    quarterly: {
      q1: { focus: "Planning & Goal Setting", hours: 2208 },
      q2: { focus: "Skill Development", hours: 2208 },
      q3: { focus: "Project Execution", hours: 2208 },
      q4: { focus: "Review & Preparation", hours: 2208 }
    },
    yearly: {
      work: 1920,
      exercise: 365,
      personal: 1008,
      household: 384,
      social: 480,
      learning: 288,
      travel: 120,
      rest: 4095
    }
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))', 'hsl(var(--destructive))', 'hsl(var(--warning))', 'hsl(var(--success))'];

  const renderTimeCard = (title: string, data: any, icon: React.ReactNode, period: string) => {
    if (period === "quarterly") {
      return (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {icon}
              <span>{title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(data).map(([quarter, info]: [string, any]) => (
                <div key={quarter} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <div>
                    <span className="font-medium uppercase">{quarter}</span>
                    <p className="text-sm text-muted-foreground">{info.focus}</p>
                  </div>
                  <span className="text-lg font-semibold">{info.hours}h</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    }

    const chartData = Object.entries(data).map(([activity, hours]) => ({
      name: activity.replace(/([A-Z])/g, ' $1').trim(),
      value: hours as number,
      hours: `${hours}h`
    }));

    return (
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}h`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}h`, 'Hours']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
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
            <h1 className="text-4xl font-bold gradient-text mb-4">Time Breakdown</h1>
            <p className="text-muted-foreground text-lg">
              How I allocate my time across different periods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {renderTimeCard(
              "Daily (24 hours)", 
              timeData.daily, 
              <Clock className="h-5 w-5 text-primary" />, 
              "daily"
            )}
            
            {renderTimeCard(
              "Weekly (168 hours)", 
              timeData.weekly, 
              <Calendar className="h-5 w-5 text-primary" />, 
              "weekly"
            )}
            
            {renderTimeCard(
              "Monthly (~720 hours)", 
              timeData.monthly, 
              <BarChart3 className="h-5 w-5 text-primary" />, 
              "monthly"
            )}
            
            {renderTimeCard(
              "Quarterly Focus Areas", 
              timeData.quarterly, 
              <Calendar className="h-5 w-5 text-primary" />, 
              "quarterly"
            )}
          </div>

          <div className="w-full">
            {renderTimeCard(
              "Yearly (8760 hours)", 
              timeData.yearly, 
              <BarChart3 className="h-5 w-5 text-primary" />, 
              "yearly"
            )}
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Time Allocation Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  This breakdown helps me understand where my time goes and ensures I'm allocating 
                  it intentionally across the areas that matter most to me. The quarterly focus 
                  areas help me theme each season of the year with specific goals and priorities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TimeBreakdown;
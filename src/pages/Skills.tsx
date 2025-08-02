import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive, Plus } from "lucide-react";
import { getSkillsData, saveSkillsData, SkillData } from "@/lib/data";
import { EditableText } from "@/components/EditableText";

const Skills = () => {
  const [skillsData, setSkillsData] = useState<Record<string, SkillData>>({});
  const [activeTab, setActiveTab] = useState("Personal");

  useEffect(() => {
    setSkillsData(getSkillsData());
  }, []);

  const iconMap: Record<string, any> = {
    CheckSquare, Clock, Zap, Users2, FileText, Building, Heart, Lightbulb, MessageSquare, Archive
  };

  const updateSkillData = (key: string, updates: Partial<SkillData>) => {
    const updatedSkills = {
      ...skillsData,
      [key]: { ...skillsData[key], ...updates }
    };
    setSkillsData(updatedSkills);
    saveSkillsData(updatedSkills);
  };

  const addNewSkill = (category: 'Personal' | 'Professional') => {
    const newKey = `new-skill-${Date.now()}`;
    const newSkill: SkillData = {
      name: "New Skill",
      icon: "Lightbulb",
      proficiency: "Beginner",
      category,
      isCustom: true
    };
    updateSkillData(newKey, newSkill);
  };

  const deleteSkill = (key: string) => {
    const updatedSkills = { ...skillsData };
    delete updatedSkills[key];
    setSkillsData(updatedSkills);
    saveSkillsData(updatedSkills);
  };

  // Group skills by category
  const personalSkills = Object.entries(skillsData).filter(([_, skill]) => skill.category === "Personal");
  const professionalSkills = Object.entries(skillsData).filter(([_, skill]) => skill.category === "Professional");

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert": return "bg-purple-500";
      case "Advanced": return "bg-blue-500"; 
      case "Intermediate": return "bg-green-500";
      case "Basic": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const proficiencyLevels = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

  const renderSkillsGrid = (skills: [string, SkillData][]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map(([key, skill]) => {
        const SkillIcon = iconMap[skill.icon] || Lightbulb;
        return (
          <Card key={key} className="card-gradient group">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <SkillIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <EditableText
                      value={skill.name}
                      onSave={(value) => updateSkillData(key, { name: value })}
                      className="font-semibold text-foreground"
                    />
                  </div>
                </div>
                {skill.isCustom && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteSkill(key)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700"
                  >
                    ×
                  </Button>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <select
                  value={skill.proficiency}
                  onChange={(e) => updateSkillData(key, { proficiency: e.target.value as any })}
                  className="bg-transparent border border-border rounded px-2 py-1 text-sm"
                >
                  {proficiencyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <div className={`w-3 h-3 rounded-full ${getProficiencyColor(skill.proficiency)}`} />
              </div>
            </CardContent>
          </Card>
        );
      })}
      
      <Card className="card-gradient border-dashed border-2 cursor-pointer group hover:border-primary/50 transition-colors">
        <CardContent 
          className="p-6 flex items-center justify-center h-full"
          onClick={() => addNewSkill(activeTab as 'Personal' | 'Professional')}
        >
          <div className="text-center">
            <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors mx-auto mb-2" />
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Add New Skill</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my personal and professional competencies, 
            from interpersonal abilities to technical expertise.
          </p>
        </div>
      </div>

      {/* Skills Content */}
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="Personal">Personal ({personalSkills.length})</TabsTrigger>
              <TabsTrigger value="Professional">Professional ({professionalSkills.length})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Personal" className="space-y-8">
            {renderSkillsGrid(personalSkills)}
          </TabsContent>

          <TabsContent value="Professional" className="space-y-8">
            {renderSkillsGrid(professionalSkills)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
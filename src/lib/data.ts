// Data structure for all systems and skills
export interface SystemData {
  name: string;
  icon: string;
  category: string;
  description: string;
  content: string[];
  isCustom?: boolean;
}

export interface SkillData {
  name: string;
  icon: string;
  proficiency: 'Beginner' | 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Personal' | 'Professional';
  isCustom?: boolean;
}

// Default systems data (start with empty data)
export const defaultSystemsData: Record<string, SystemData> = {};

// Default skills data (start with empty data)
export const defaultSkillsData: Record<string, SkillData> = {};

// Storage functions
export const getSystemsData = (): Record<string, SystemData> => {
  const stored = localStorage.getItem('systemsData');
  return stored ? JSON.parse(stored) : defaultSystemsData;
};

export const saveSystemsData = (data: Record<string, SystemData>) => {
  localStorage.setItem('systemsData', JSON.stringify(data));
};

export const getSkillsData = (): Record<string, SkillData> => {
  const stored = localStorage.getItem('skillsData');
  return stored ? JSON.parse(stored) : defaultSkillsData;
};

export const saveSkillsData = (data: Record<string, SkillData>) => {
  localStorage.setItem('skillsData', JSON.stringify(data));
};
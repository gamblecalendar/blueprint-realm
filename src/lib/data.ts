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

// Default systems data
export const defaultSystemsData: Record<string, SystemData> = {
  "task-management-system": {
    name: "Task Management System",
    icon: "CheckSquare",
    category: "Productivity & Work Systems",
    description: "A comprehensive approach to organizing, prioritizing, and tracking tasks for maximum productivity.",
    content: [
      "Capture all tasks in a trusted system",
      "Categorize by priority and context", 
      "Regular review and processing",
      "Clear completion criteria"
    ]
  },
  "time-management-system": {
    name: "Time Management System",
    icon: "Clock", 
    category: "Productivity & Work Systems",
    description: "Strategic time allocation and scheduling methods to optimize daily productivity.",
    content: [
      "Time blocking for focused work",
      "Energy-based scheduling",
      "Buffer time for unexpected tasks",
      "Regular time audits and optimization"
    ]
  },
  "project-management": {
    name: "Project Management",
    icon: "Zap",
    category: "Productivity & Work Systems",
    description: "Frameworks for planning, executing, and delivering projects successfully.",
    content: [
      "Clear project scope and objectives",
      "Milestone-based planning", 
      "Risk assessment and mitigation",
      "Regular progress tracking and reporting"
    ]
  },
  "execution": {
    name: "Execution",
    icon: "Zap",
    category: "Productivity & Work Systems", 
    description: "Systematic approach to turning plans into action and achieving results.",
    content: [
      "Break down goals into actionable steps",
      "Set clear deadlines and milestones",
      "Monitor progress regularly",
      "Adjust strategies based on feedback"
    ]
  },
  "gtd": {
    name: "GTD",
    icon: "CheckSquare",
    category: "Productivity & Work Systems",
    description: "Getting Things Done methodology for stress-free productivity.",
    content: [
      "Capture everything in external systems",
      "Clarify what each item means",
      "Organize by context and priority",
      "Review regularly to stay current",
      "Engage with confidence in your choices"
    ]
  },
  "work-workplace-system": {
    name: "Work - Workplace System",
    icon: "Building",
    category: "Productivity & Work Systems",
    description: "Structured approach to workplace efficiency and professional development.",
    content: [
      "Optimize workspace for productivity",
      "Establish clear work boundaries",
      "Build professional relationships",
      "Continuous skill development"
    ]
  },
  "delegation": {
    name: "Delegation",
    icon: "Users2",
    category: "Productivity & Work Systems",
    description: "Effective techniques for assigning tasks and empowering others.",
    content: [
      "Identify tasks suitable for delegation",
      "Select the right person for each task",
      "Provide clear instructions and expectations",
      "Follow up and provide support"
    ]
  },
  "onboarding": {
    name: "Onboarding", 
    icon: "Users2",
    category: "Productivity & Work Systems",
    description: "Systematic approach to integrating new team members effectively.",
    content: [
      "Prepare comprehensive orientation materials",
      "Assign mentors or buddies",
      "Set clear expectations and goals",
      "Regular check-ins and feedback sessions"
    ]
  },
  "skill-acquiring": {
    name: "Skill Acquiring",
    icon: "Lightbulb",
    category: "Productivity & Work Systems",
    description: "Methodical approach to learning and developing new capabilities.",
    content: [
      "Identify skill gaps and priorities",
      "Create structured learning plans",
      "Practice with real-world applications",
      "Seek feedback and mentorship"
    ]
  },
  "practicing": {
    name: "Practicing",
    icon: "Zap", 
    category: "Productivity & Work Systems",
    description: "Deliberate practice techniques for skill mastery and improvement.",
    content: [
      "Focus on specific weaknesses",
      "Use deliberate practice principles", 
      "Get immediate feedback",
      "Gradually increase difficulty"
    ]
  },
  "decision-making-system": {
    name: "Decision Making System",
    icon: "Lightbulb",
    category: "Productivity & Work Systems",
    description: "Structured framework for making effective decisions consistently.",
    content: [
      "Define the decision clearly",
      "Gather relevant information",
      "Consider multiple options",
      "Evaluate consequences and make the choice"
    ]
  },
  "systems-improvement": {
    name: "Systems Improvement", 
    icon: "Zap",
    category: "Productivity & Work Systems",
    description: "Continuous refinement and optimization of personal and professional systems.",
    content: [
      "Regular system audits and reviews",
      "Identify bottlenecks and inefficiencies",
      "Test improvements systematically",
      "Measure and track performance"
    ]
  },
  "note-taking-knowledge-base": {
    name: "Note-Taking & Knowledge Base",
    icon: "FileText",
    category: "Information & Knowledge Management",
    description: "Systems for capturing, organizing, and retrieving information effectively.",
    content: [
      "Consistent note-taking methodology",
      "Searchable and linked knowledge base",
      "Regular review and synthesis", 
      "Cross-referencing and tagging system"
    ]
  },
  "file-management-system": {
    name: "File Management System",
    icon: "Archive",
    category: "Information & Knowledge Management",
    description: "Organized approach to digital file storage and retrieval.",
    content: [
      "Consistent naming conventions",
      "Logical folder structures",
      "Regular cleanup and archiving",
      "Backup and version control"
    ]
  },
  "digital-files-digital-minimalism": {
    name: "Digital Files / Digital Minimalism",
    icon: "FileText",
    category: "Information & Knowledge Management", 
    description: "Minimalist approach to digital file management and organization.",
    content: [
      "Regular digital decluttering",
      "Keep only essential files",
      "Use cloud storage strategically",
      "Automate organization where possible"
    ]
  },
  "a-system-to-archive-my-skills": {
    name: "A system to archive my skills",
    icon: "Archive",
    category: "Information & Knowledge Management",
    description: "Comprehensive tracking and documentation of personal skills and competencies.",
    content: [
      "Catalog all current skills",
      "Track skill development progress",
      "Document learning resources",
      "Regular skill assessments"
    ]
  },
  "a-home-for-each-ideas-thoughts": {
    name: "A home for each ideas, thoughts...",
    icon: "Lightbulb",
    category: "Information & Knowledge Management",
    description: "Systematic capture and organization of ideas and thoughts.",
    content: [
      "Immediate idea capture system",
      "Categorize by themes and projects",
      "Regular idea review sessions",
      "Connect related concepts"
    ]
  },
  "messaging-communication-system": {
    name: "Messaging / Communication System", 
    icon: "MessageSquare",
    category: "Communication",
    description: "Structured approach to managing digital communication and messaging.",
    content: [
      "Inbox zero methodology",
      "Response time standards",
      "Communication channel protocols",
      "Message prioritization system"
    ]
  },
  "system-to-keep-my-inbox-clear": {
    name: "System to keep my inbox clear",
    icon: "MessageSquare",
    category: "Communication",
    description: "Effective strategies for maintaining a clean and organized inbox.",
    content: [
      "Process emails immediately",
      "Use filters and rules",
      "Unsubscribe from unnecessary lists",
      "Schedule dedicated email time"
    ]
  },
  "health": {
    name: "Health",
    icon: "Heart",
    category: "Personal Life Areas",
    description: "Holistic approach to maintaining physical and mental well-being.",
    content: [
      "Regular exercise routine",
      "Preventive healthcare scheduling",
      "Stress management techniques", 
      "Sleep optimization strategies"
    ]
  },
  "nutrition": {
    name: "Nutrition",
    icon: "Heart",
    category: "Personal Life Areas",
    description: "Systematic approach to healthy eating and nutrition management.",
    content: [
      "Meal planning and preparation",
      "Balanced macronutrient intake",
      "Regular nutrition tracking",
      "Mindful eating practices"
    ]
  },
  "relationships": {
    name: "Relationships",
    icon: "Users2",
    category: "Personal Life Areas",
    description: "Framework for building and maintaining meaningful personal relationships.",
    content: [
      "Regular relationship maintenance",
      "Active listening and communication",
      "Quality time scheduling",
      "Conflict resolution strategies"
    ]
  },
  "payments-finance-system": {
    name: "Payments, Finance system",
    icon: "Building",
    category: "Personal Life Areas",
    description: "Comprehensive personal finance management and planning system.",
    content: [
      "Budget tracking and planning",
      "Automated bill payments",
      "Investment portfolio management",
      "Financial goal setting"
    ]
  },
  "commute-travel": {
    name: "Commute, Travel",
    icon: "Zap",
    category: "Personal Life Areas",
    description: "Efficient planning and execution of travel and daily commuting.",
    content: [
      "Optimize daily commute routes",
      "Travel planning and preparation",
      "Packing systems and checklists",
      "Time management during travel"
    ]
  },
  "dealing-with-adhd": {
    name: "Dealing with ADHD",
    icon: "Lightbulb", 
    category: "Personal Life Areas",
    description: "Strategies and systems for managing ADHD symptoms effectively.",
    content: [
      "Structured daily routines",
      "External reminder systems",
      "Break tasks into smaller chunks",
      "Minimize distractions"
    ]
  },
  "important-concepts-reminder": {
    name: "Important Concepts Reminder",
    icon: "Lightbulb",
    category: "Personal Life Areas", 
    description: "System for regularly reviewing and reinforcing key concepts and principles.",
    content: [
      "Spaced repetition scheduling",
      "Key concept documentation",
      "Regular review sessions",
      "Application in daily life"
    ]
  }
};

// Default skills data
export const defaultSkillsData: Record<string, SkillData> = {
  // Personal Skills
  "building-rapport-relationships": { name: "Building Rapport & Relationships", icon: "Users2", proficiency: "Intermediate", category: "Personal" },
  "empathy-compassion": { name: "Empathy & Compassion", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "inclusivity-cultural-competence": { name: "Inclusivity & Cultural Competence", icon: "Users2", proficiency: "Intermediate", category: "Personal" },
  "networking": { name: "Networking", icon: "Users2", proficiency: "Intermediate", category: "Personal" },
  "respectfulness-manners": { name: "Respectfulness & Manners", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "small-talk-approachability": { name: "Small Talk & Approachability", icon: "MessageSquare", proficiency: "Intermediate", category: "Personal" },
  "social-awareness-perceptiveness": { name: "Social Awareness & Perceptiveness", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "teamwork-consensus-building": { name: "Teamwork & Consensus Building", icon: "Users2", proficiency: "Advanced", category: "Personal" },
  "understanding-boundaries": { name: "Understanding Boundaries", icon: "Heart", proficiency: "Intermediate", category: "Personal" },
  "active-listening": { name: "Active Listening", icon: "MessageSquare", proficiency: "Advanced", category: "Personal" },
  "charisma": { name: "Charisma", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "diplomacy-tactfulness": { name: "Diplomacy & Tactfulness", icon: "MessageSquare", proficiency: "Advanced", category: "Personal" },
  "effective-communication": { name: "Effective Communication", icon: "MessageSquare", proficiency: "Advanced", category: "Personal" },
  "feedback-giving-receiving": { name: "Feedback Giving & Receiving", icon: "MessageSquare", proficiency: "Intermediate", category: "Personal" },
  "influence-persuasion": { name: "Influence & Persuasion", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "negotiation": { name: "Negotiation", icon: "MessageSquare", proficiency: "Intermediate", category: "Personal" },
  "public-speaking": { name: "Public Speaking", icon: "MessageSquare", proficiency: "Intermediate", category: "Personal" },
  "storytelling": { name: "Storytelling", icon: "FileText", proficiency: "Advanced", category: "Personal" },
  "writing": { name: "Writing", icon: "FileText", proficiency: "Advanced", category: "Personal" },
  "assertiveness": { name: "Assertiveness", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "building-trust": { name: "Building Trust", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "coaching-mentoring": { name: "Coaching & Mentoring", icon: "Users2", proficiency: "Intermediate", category: "Personal" },
  "delegation": { name: "Delegation", icon: "Users2", proficiency: "Intermediate", category: "Personal" },
  "enabling-others": { name: "Enabling Others", icon: "Users2", proficiency: "Advanced", category: "Personal" },
  "leadership": { name: "Leadership", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "management": { name: "Management", icon: "Building", proficiency: "Intermediate", category: "Personal" },
  "nurturing-emotional-support": { name: "Nurturing & Emotional Support", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "active-learning-curiosity": { name: "Active Learning & Curiosity", icon: "Lightbulb", proficiency: "Expert", category: "Personal" },
  "adaptability-flexibility": { name: "Adaptability & Flexibility", icon: "Zap", proficiency: "Advanced", category: "Personal" },
  "attention-to-detail": { name: "Attention to Detail", icon: "CheckSquare", proficiency: "Advanced", category: "Personal" },
  "critical-thinking": { name: "Critical Thinking", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "creativity-creative-problem-solving": { name: "Creativity & Creative Problem-Solving", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "data-analysis-manipulation": { name: "Data Analysis & Data Manipulation", icon: "FileText", proficiency: "Intermediate", category: "Personal" },
  "decisiveness": { name: "Decisiveness", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "goal-setting-planning": { name: "Goal Setting & Planning", icon: "CheckSquare", proficiency: "Advanced", category: "Personal" },
  "intuition": { name: "Intuition", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "problem-solving": { name: "Problem Solving", icon: "Lightbulb", proficiency: "Expert", category: "Personal" },
  "research-skills": { name: "Research Skills", icon: "FileText", proficiency: "Advanced", category: "Personal" },
  "resourcefulness": { name: "Resourcefulness", icon: "Zap", proficiency: "Advanced", category: "Personal" },
  "authenticity-honesty": { name: "Authenticity & Honesty", icon: "Heart", proficiency: "Expert", category: "Personal" },
  "confidence-social-confidence": { name: "Confidence & Social Confidence", icon: "Zap", proficiency: "Intermediate", category: "Personal" },
  "emotional-regulation-expression": { name: "Emotional Regulation & Expression", icon: "Heart", proficiency: "Intermediate", category: "Personal" },
  "enthusiasm-positivity": { name: "Enthusiasm & Positivity", icon: "Zap", proficiency: "Advanced", category: "Personal" },
  "generosity-graciousness": { name: "Generosity & Graciousness", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "gratitude-humility": { name: "Gratitude & Humility", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "mindfulness-reflective-practice": { name: "Mindfulness & Reflective Practice", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "mindset-of-abundance": { name: "Mindset of Abundance", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "patience": { name: "Patience", icon: "Clock", proficiency: "Intermediate", category: "Personal" },
  "resilience": { name: "Resilience", icon: "Zap", proficiency: "Advanced", category: "Personal" },
  "self-awareness-self-reflection": { name: "Self-Awareness & Self-Reflection", icon: "Lightbulb", proficiency: "Advanced", category: "Personal" },
  "self-discipline": { name: "Self-Discipline", icon: "CheckSquare", proficiency: "Intermediate", category: "Personal" },
  "sense-of-humor": { name: "Sense of Humor", icon: "Heart", proficiency: "Advanced", category: "Personal" },
  "time-management-personal-workflow": { name: "Time Management & Personal Workflow", icon: "Clock", proficiency: "Advanced", category: "Personal" },
  "trustworthiness-dependability": { name: "Trustworthiness & Dependability", icon: "Heart", proficiency: "Expert", category: "Personal" },

  // Professional Skills
  "automation-optimization": { name: "Automation & Optimization", icon: "Zap", proficiency: "Advanced", category: "Professional" },
  "cleaning-organizing": { name: "Cleaning & Organizing", icon: "Archive", proficiency: "Advanced", category: "Professional" },
  "copywriting": { name: "Copywriting", icon: "FileText", proficiency: "Intermediate", category: "Professional" },
  "crm": { name: "CRM (Customer Relationship Management)", icon: "Users2", proficiency: "Intermediate", category: "Professional" },
  "design-visual-communication": { name: "Design & Visual Communication", icon: "FileText", proficiency: "Intermediate", category: "Professional" },
  "hands-on-approach-skills": { name: "Hands-on Approach Skills", icon: "Zap", proficiency: "Advanced", category: "Professional" },
  "infographic-data-visualization": { name: "Infographic / Data Visualization", icon: "FileText", proficiency: "Intermediate", category: "Professional" },
  "lead-generation": { name: "Lead Generation", icon: "Users2", proficiency: "Intermediate", category: "Professional" },
  "marketing": { name: "Marketing", icon: "MessageSquare", proficiency: "Intermediate", category: "Professional" },
  "onboarding-training": { name: "Onboarding / Training", icon: "Users2", proficiency: "Advanced", category: "Professional" },
  "project-task-management": { name: "Project & Task Management", icon: "CheckSquare", proficiency: "Expert", category: "Professional" },
  "sales": { name: "Sales", icon: "Zap", proficiency: "Intermediate", category: "Professional" },
  "spreadsheets": { name: "Spreadsheets", icon: "FileText", proficiency: "Advanced", category: "Professional" },
  "subject-expert-sme": { name: "Subject Expert (SME)", icon: "Lightbulb", proficiency: "Advanced", category: "Professional" }
};

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
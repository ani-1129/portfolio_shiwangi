export interface EducationItem {
  id: string;
  level: string;
  school: string;
  board?: string;
  completed: string;
  marks: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyPlaceholder: string;
  durationPlaceholder: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  links: {
    details: string;
    demo: string;
    github: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[]; // level in percentage
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  subLabel: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    linkedin: string;
    resumeUrl: string; // Placeholder resume pdf path
  };
  education: EducationItem[];
  experience: ExperienceItem[];
  project: ProjectItem;
  skills: SkillGroup[];
  achievements: StatItem[];
  emailJsConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shiwangi Singh",
    title: "MBA Student | Finance & HR",
    tagline: "MBA Student | Finance & HR Professional | Sociology & Economics Graduate",
    bio: "Passionate MBA student specializing in Finance and Human Resource Management with a strong academic foundation in Sociology and Economics. Experienced in Stock Marketing and Sales Management, with a growing interest in business strategy, financial analysis, and innovative technology solutions.",
    location: "Varanasi, Uttar Pradesh, India",
    email: "Shiwangisingh2606@gmail.com",
    linkedin: "https://www.linkedin.com/in/shiwangi-singh-18b703366",
    resumeUrl: "#" // Will be downloadable placeholder
  },
  education: [
    {
      id: "edu-4",
      level: "MBA",
      school: "AKTU",
      board: "Finance + Human Resources",
      completed: "2025–2027",
      marks: "Currently Pursuing",
      highlight: true
    },
    {
      id: "edu-3",
      level: "Graduation (BA)",
      school: "Dhirendra Mahila PG College (Affiliated to MGKVP)",
      board: "Sociology & Economics",
      completed: "2021–2024",
      marks: "CGPA: 5.924"
    },
    {
      id: "edu-2",
      level: "12th Standard",
      school: "RN Public School",
      board: "CBSE Board",
      completed: "2021",
      marks: "69.2%"
    },
    {
      id: "edu-1",
      level: "10th Standard",
      school: "RN Public School",
      completed: "2019",
      marks: "50.6%"
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Stock Marketing",
      companyPlaceholder: "[Company Name / Self-Employed]",
      durationPlaceholder: "[Duration, e.g., 6 Months]",
      description: "Experience in stock market analysis, trading concepts, financial decision-making, and understanding market trends."
    },
    {
      id: "exp-2",
      title: "Sales Management",
      companyPlaceholder: "[Company Name]",
      durationPlaceholder: "[Duration, e.g., 1 Year]",
      description: "Experience in customer relationship management, communication, sales strategies, and business development."
    }
  ],
  project: {
    title: "Smart Parking System",
    description: "A Smart Parking System is an intelligent urban mobility solution that integrates IoT sensors, Artificial Intelligence, and mobile applications to simplify parking management.",
    features: [
      "Real-time parking availability",
      "Automated ticketing",
      "Predictive parking reservation",
      "Reduced traffic congestion",
      "Better user experience",
      "Increased parking revenue"
    ],
    tags: ["IoT", "Artificial Intelligence", "Mobile Application", "Smart Cities", "Automation"],
    links: {
      details: "#details",
      demo: "#",
      github: "#"
    }
  },
  skills: [
    {
      category: "Technical Skills",
      skills: [
        { name: "Financial Analysis", level: 85 },
        { name: "Stock Market Knowledge", level: 80 },
        { name: "Microsoft Excel", level: 90 },
        { name: "Research", level: 85 },
        { name: "Data Interpretation", level: 75 },
        { name: "Business Strategy", level: 80 }
      ]
    },
    {
      category: "Professional Skills",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 95 },
        { name: "HR Management", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 90 },
        { name: "Presentation Skills", level: 85 },
        { name: "Decision Making", level: 80 }
      ]
    }
  ],
  achievements: [
    {
      id: "stat-1",
      value: 4,
      label: "Academic Focus Areas",
      subLabel: "Finance, HR, Economics, Sociology"
    },
    {
      id: "stat-2",
      value: 95,
      suffix: "%",
      label: "Communication & Leadership",
      subLabel: "Peak Professional Assessment"
    },
    {
      id: "stat-3",
      value: 2,
      label: "Core Specializations",
      subLabel: "Stock Market & Sales Domain Expertise"
    },
    {
      id: "stat-4",
      value: 100,
      suffix: "%",
      label: "Strategic Drive",
      subLabel: "Business Growth & Innovation"
    }
  ],
  emailJsConfig: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
  }
};

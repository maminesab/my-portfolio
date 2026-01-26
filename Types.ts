
export interface Project {
  id: string;
  title: string;
  context: string;
  threatModel: string;
  tools: string[];
  contribution: string;
  impact: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: 'Proficient' | 'Advanced' | 'Expert';
    details: string;
  }[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  verifyLink: string;
  logo: string;
}

export interface LogEntry {
  timestamp: string;
  source: string;
  event: string;
  status: 'info' | 'warning' | 'critical';
  details: string;
}

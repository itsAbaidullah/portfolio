
export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    details?: string;
}

export interface Certification {
    name: string;
    issuer: string;
}

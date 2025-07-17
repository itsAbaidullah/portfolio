import { Experience, Project, SkillCategory, Education, Certification } from './types';

export const NAME = "Abaidullah";
export const HEADLINE = "BS Data Science Student";
export const SUMMARY = "Motivated and detail-oriented BS Data Science student at Government College University Faisalabad, passionate about using data to solve real-world problems. Experienced in guest posting, outreach, and hands-on data science projects.";

export const CONTACT = {
  email: "abaidullahsabih123@gmail.com",
  portfolio: "itsabaid.netlify.app",
  github: "https://github.com/its-abaid", // Placeholder, assuming a common username pattern
  picture: "https://i.ibb.co/6P6gSjW/Abaidullah.jpg",
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Guest Post Outreach Specialist",
    company: "Freelance",
    period: "MAR 2024 — PRESENT",
    details: [
      "Collaborated with SEO professionals to publish guest posts on niche websites (CBD, Gaming, Health, Textile, etc.).",
      "Handled communication, outreach, and follow-ups with high-authority domain websites.",
      "Secured permanent do-follow backlinks and monitored site metrics (DA, DR, traffic).",
      "Managed custom guest post orders and ensured SEO-friendly content delivery.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Customer Churn Predictor",
    description: "Developed a classification model using Python to predict customer churn, achieving 87% accuracy through feature engineering and logistic regression.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Logistic Regression"],
  },
  {
    title: "IPL Economic Impact Analysis",
    description: "Analyzed the social and economic impact of the IPL using Python and data visualization, submitting insights for a business magazine challenge.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Image Classification using CNN (In Progress)",
    description: "Building a deep learning model with data augmentation and transfer learning to classify images effectively.",
    technologies: ["Python", "CNN", "Keras", "TensorFlow"],
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and deployed a personal portfolio using HTML, CSS, GitHub, and Netlify to showcase projects and educational background.",
    technologies: ["HTML", "CSS", "GitHub", "Netlify"],
  },
];

export const SKILLS: SkillCategory[] = [
    {
        name: "Programming & Tools",
        skills: ["Python", "SQL", "Git", "Jupyter Notebook"]
    },
    {
        name: "Data Analysis",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
        name: "Machine Learning",
        skills: ["Scikit-learn", "CNN", "Keras/TensorFlow basics"]
    },
    {
        name: "Web & Hosting",
        skills: ["GitHub Pages", "Netlify"]
    },
    {
        name: "Other",
        skills: ["SEO Outreach", "Guest Posting", "Link Building"]
    },
    {
        name: "Soft Skills",
        skills: ["Communication", "Time Management", "Problem Solving"]
    }
];

export const EDUCATION: Education[] = [
    {
        degree: "BS Data Science",
        institution: "Government College University Faisalabad (GCUF)",
        period: "2023 — 2027",
    },
    {
        degree: "FSc Pre-Medical",
        institution: "BISE Lahore",
        period: "",
        details: "965 / 1100"
    },
    {
        degree: "Matriculation",
        institution: "BISE Lahore",
        period: "",
        details: "1033 / 1100"
    }
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: "Google Advanced Data Analytics Certificate",
        issuer: "Coursera (In Progress)"
    },
    {
        name: "IBM Data Science Professional Certificate",
        issuer: "Coursera (In Progress)"
    }
];

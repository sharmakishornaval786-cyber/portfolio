export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  features: string[];
  role: string;
  duration: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  description: string;
  doi?: string;
  url?: string;
}

export interface Bio {
  intro: string;
  summary: string;
  skills: Skill[];
}

export const PROJECTS: Project[] = [
];

export const SKILLS: Skill[] = [
  { name: "SQL", category: "Database" },
  { name: "Power BI", category: "Data Visualization" },
  { name: "Tableau", category: "Data Visualization" },
  { name: "Microsoft Excel", category: "Tools" },
  { name: "Python", category: "Languages" },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "AI-Driven Hybrid RF/FSO Communication Framework for Secure Smart Grid and EV Networks under Composite Fading",
    authors: ["Nookala Venu", "Mehak Kapoor", "Nitesh Patidar", "Naval Kishor Sharma", "Manjeet Rajput", "Vikash Dhakad"],
    journal: "IEEE Communications Letters",
    year: 2024,
    description: "This paper presents an innovative AI-driven hybrid RF/FSO (Radio Frequency/Free Space Optical) communication framework designed for secure smart grid and electric vehicle networks. The framework leverages machine learning techniques to optimize performance under composite fading conditions.",
  },
  {
    id: "2",
    title: "AI-Enabled Joint Optimization of 6G Cognitive Radio Quality of Service and Hybrid Microgrid Energy Efficiency Using Federated and Reinforcement Learning",
    authors: ["Nookala Venu", "Mehak Kapoor", "Nitesh Patidar", "Naval Kishor Sharma", "Manjeet Rajput", "Vikash Dhakad"],
    journal: "IEEE Transactions on Communications",
    year: 2024,
    description: "This research proposes an AI-enabled framework for joint optimization of 6G cognitive radio QoS and hybrid microgrid energy efficiency. The study employs federated learning and reinforcement learning algorithms to achieve optimal resource allocation and energy management in next-generation networks.",
  }
];

export const BIO: Bio = {
  intro:
    "Turning data into decisions — that's what drives me.",
  summary:
    "I'm an aspiring Data Analyst focused on extracting insights from data and presenting them through meaningful reports and interactive dashboards. With hands-on experience in SQL, Power BI, Microsoft Excel, and Python, I aim to solve real-world problems using data-driven thinking.",
  skills: SKILLS,
};

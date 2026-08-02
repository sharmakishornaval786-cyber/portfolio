export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  powerbi?: string;
  features: string[];
  role: string;
  duration: string;
  section: "analytics" | "projects";
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
  year?: number;
  description: string;
  doi?: string;
  url?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
  type: "professional" | "academic";
  category?: "industry-experience";
}

export interface Bio {
  intro: string;
  summary: string;
  skills: Skill[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  resume: string;
  email: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/sharmakishornaval786-cyber",
  linkedin: "https://www.linkedin.com/in/navalkishorsharma-dev/",
  resume: "/resume.pdf",
  email: "sharmakishornaval@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills",
    longDescription: "A modern, fully responsive portfolio website built with Next.js 15 and TypeScript. Features include dark mode toggle, smooth animations, project showcase with detail pages, contact form with email integration, and SEO optimization for better discoverability.",
    image: "/images/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Resend"],
    github: "https://github.com/sharmakishornaval786-cyber/portfolio",
    live: "https://portfolio-ashen-one-10.vercel.app/",
    features: [
      "Responsive design optimized for all devices",
      "Dark/light mode toggle with persistent preferences",
      "Smooth scroll animations and transitions",
      "Project showcase with detailed project pages",
      "Contact form with email integration",
      "SEO optimized with meta tags",
      "Performance optimized with lazy loading"
    ],
    role: "Full Stack Developer",
    duration: "2 months",
    section: "projects"
  },
  {
    id: "2",
    title: "Superstore Sales Dashboard",
    description: "Comprehensive Power BI dashboard for sales, profit, and customer insights tracking",
    longDescription: "A sophisticated Power BI dashboard designed for Superstore sales analytics. This dashboard provides real-time insights into regional sales performance, profit margins, and customer behavior patterns. Features interactive visualizations including region-wise sales maps, sales trend analysis, and category-wise breakdowns enabling stakeholders to make data-driven decisions.",
    image: "/images/sales-dashboard.jpg",
    tech: ["Power BI", "Excel"],
    github: "https://github.com/sharmakishornaval786-cyber/Superstore-Sales-Analysis",
    features: [
      "Region-wise sales visualization with interactive map",
      "Real-time KPI tracking (Total Sales, Profit, Orders, Profit Margin)",
      "Sales trend analysis with year-over-year comparison",
      "Category-wise sales breakdown and performance metrics",
      "Dynamic filtering by Region, Segment, and Category",
      "Customer insights and behavior analysis",
      "Automated data refresh from SQL database",
      "Drill-down capabilities for detailed regional analysis"
    ],
    role: "Data Analyst",
    duration: "2 weeks",
    section: "analytics"
  },
  {
  id: "4",
  title: "End-to-End Supply Chain Analytics Project",
  description: "End-to-end analytics workflow covering supply chain optimization, demand forecasting, and operational insights",
  longDescription: "Developed an end-to-end Supply Chain Analytics solution by transforming a raw dataset of 180,519 records and 53 features into actionable business insights using Python, MySQL, and Power BI. The project followed the complete analytics lifecycle, including data cleaning, SQL-based business analysis, interactive dashboard development, and business recommendations to support data-driven decision-making.",
  image: "/images/supply-chain-analysis.jpg",
  tech: ["Python", "SQL", "Pandas", "Power BI", "MySQL", "DAX"],
  github: "https://github.com/sharmakishornaval786-cyber/Supply-Chain-Analytics-Project",
    features: [
    "Cleaned and preprocessed raw supply chain data using Python (Pandas).",
    "Identified and handled missing values while validating data quality.",
    "Verified that the dataset contained no duplicate records.",
    "Designed and executed SQL queries to analyze:",
      "Delivery Status",
      "Late Delivery Risk by Market",
      "Top Product Categories by Sales",
      "Shipping Mode Distribution",
    "Developed an interactive Power BI dashboard featuring KPIs, category analysis, shipping insights, and market-level performance.",
    "Generated business insights and strategic recommendations to improve supply chain operations and decision-making."
  ],
  role: "Data Analyst",
  duration: "2 weeks",
  section: "analytics"
},
{
  id: "3",
  title: "Netflix Data Analysis Project",
  description: "Comprehensive analysis of Netflix content library and viewing patterns",
  longDescription: "An in-depth data analysis project examining Netflix's content library, user viewing patterns, and performance metrics. This project involved data cleaning, exploratory data analysis, and creating interactive visualizations to uncover trends in content types, genres, release years, and regional popularity.",
  image: "/images/netflix-analysis.jpg",
  tech: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
  github: "https://github.com/sharmakishornaval786-cyber/Netflix-Data-Analysis",
  features: [
    "Data cleaning and preprocessing of Netflix dataset",
    "Exploratory Data Analysis (EDA) with statistical insights",
    "Interactive visualizations for content insights",
    "Genre-wise and country-wise performance analysis",
    "Trend analysis for content releases over time",
    "Correlation analysis between content attributes and popularity",
    "Data visualization using Python libraries"
    ],
    role: "Data Analyst",
  duration: "2 hours",
    section: "analytics"
}
];
export const SKILLS: Skill[] = [
  { name: "SQL", category: "Database" },
  { name: "Power BI", category: "Data Visualization" },
  { name: "Tableau", category: "Data Visualization" },
  { name: "Matplotlib", category: "Data Visualization" },
  { name: "Microsoft Excel", category: "Tools" },
  { name: "Jupyter Notebook", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Python", category: "Languages" },
  { name: "Pandas", category: "Libraries" },
  { name: "NumPy", category: "Libraries" },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "AI-Driven Hybrid RF/FSO Communication Framework for Secure Smart Grid and EV Networks under Composite Fading",
    authors: ["Nookala Venu", "Mehak Kapoor", "Nitesh Patidar", "Naval Kishor Sharma", "Manjeet Rajput", "Vikash Dhakad"],
    journal: "IEEE Communications Letters",
    description: "This paper presents an innovative AI-driven hybrid RF/FSO (Radio Frequency/Free Space Optical) communication framework designed for secure smart grid and electric vehicle networks. The framework leverages machine learning techniques to optimize performance under composite fading conditions.",
    doi: "10.2991/978-94-6239-707-1_2",
  },
  {
    id: "2",
    title: "AI-Enabled Joint Optimization of 6G Cognitive Radio Quality of Service and Hybrid Microgrid Energy Efficiency Using Federated and Reinforcement Learning",
    authors: ["Nookala Venu", "Mehak Kapoor", "Nitesh Patidar", "Naval Kishor Sharma", "Manjeet Rajput", "Vikash Dhakad"],
    journal: "IEEE Transactions on Communications",
    description: "This research proposes an AI-enabled framework for joint optimization of 6G cognitive radio QoS and hybrid microgrid energy efficiency. The study employs federated learning and reinforcement learning algorithms to achieve optimal resource allocation and energy management in next-generation networks.",
    doi: "10.2991/978-94-6239-707-1_3",
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2026",
    description: "Completed Deloitte Australia virtual job simulation focused on practical data analytics and business problem-solving.",
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a2e79a0e1f2203d7130b1a7_1783941774114_completion_certificate.pdf",
    type: "professional",
    category: "industry-experience",
  },
  {
    id: "2",
    title: "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
    issuer: "Tata",
    date: "2026",
    description: "Completed Tata virtual job simulation on designing impactful data visualizations and communicating business insights effectively.",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6a2e79a0e1f2203d7130b1a7_1781667002347_completion_certificate.pdf",
    type: "professional",
    category: "industry-experience",
  },
  {
    id: "4",
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2026",
    description: "Completed Google AI Essentials program covering practical AI concepts, tools, and responsible AI usage.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/3O82MIW2PR69",
    type: "professional",
  },
  {
    id: "5",
    title: "Google Prompting Essentials",
    issuer: "Google",
    date: "2026",
    description: "Completed Google Prompting Essentials with hands-on learning for writing effective prompts across AI tasks.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/M0RKI31XAO0W",
    type: "professional",
  },
  {
    id: "6",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2026",
    description: "Certified in SQL fundamentals including basic querying, filtering, joins, and data retrieval logic.",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/2eeab23a91b2",
    type: "professional",
  },
  {
    id: "7",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn",
    date: "2026",
    description: "Foundational certification in MS Excel covering basic spreadsheet operations, formulas, and data organization for beginners.",
    credentialUrl: "https://lms.simplilearn.com/courses/4277/Introduction%20to%20MS%20Excel/certificate/download-skillup",
    type: "professional",
  },
];

export const BIO: Bio = {
  intro:
    "Turning data into decisions — that's what drives me.",
  summary:
    "I'm an aspiring Data Analyst focused on extracting insights from data and presenting them through meaningful reports and interactive dashboards. With hands-on experience in SQL, Power BI, Microsoft Excel, and Python, I aim to solve real-world problems using data-driven thinking.",
  skills: SKILLS,
};

export interface Project {
  id: string;
  name: string;
  company: string;
  time: string;
  role: string;
  teamSize: string;
  description: string;
  highlight: string;
  responsibilities: string[];
  languages: string[];
  technologies: string[];
  platform: string[];
  image: string;
  links?: {
    web?: string;
    googlePlay?: string;
    appStore?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  summary: string;
  yearsOfExperience: number;
  email: string;
  phone?: string;
  location: string;
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  name: "Tran Dinh Nam",
  title: "Flutter Developer | Mobile & Cross-Platform Specialist",
  tagline: "Building scalable, high-performance applications with 4+ years of expertise in Flutter & Native integration.",
  about: "With over 4 years of experience in software development, I have worked on a variety of mobile and web applications, leveraging both native technologies (Java for Android) and cross-platform frameworks, with a strong focus on Flutter. I specialize in building scalable, high-performance applications and integrating third-party services to enhance user experience. I am experienced across the full development lifecycle, from design and development to testing and deployment, with a strong commitment to code quality and best practices.",
  summary: "With over 4 years of experience in software development, I have worked on a variety of mobile and web applications, leveraging both native technologies (Java for Android) and cross-platform frameworks, with a strong focus on Flutter. I specialize in building scalable, high-performance applications and integrating third-party services to enhance user experience.",
  yearsOfExperience: 4,
  email: "trandinhnamnd0102@gmail.com",
  phone: "0395.212.072",
  location: "Ha Noi, Vietnam",
  stats: {
    yearsOfExperience: 4,
    projectsCompleted: 15,
  },
  socials: {
    github: "https://github.com/NamTranDinh",
    linkedin: "https://www.linkedin.com/in/trandinham20102",
  },
  skills: [
    {
      category: "Core Flutter & State Management",
      skills: ["Flutter", "Dart", "Provider", "Bloc / Cubit", "GetX", "Riverpod", "Dio", "Http", "Flutter DevTools"],
    },
    {
      category: "AI-Assisted Development",
      skills: ["Claude", "ChatGPT", "Cursor", "AntiGravity", "GitHub Copilot"],
    },
    {
      category: "Native Integration",
      skills: ["Java (Android)", "Kotlin", "Swift (iOS)", "Objective-C", "Platform Channels", "FFI", "NFC", "eKYC"],
    },
    {
      category: "Mini App & Super App",
      skills: ["Super App Architecture", "Mini App Runtime", "Isolated Lifecycle", "Inter-app Communication"],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "Firebase", "Alibaba Cloud", "CI/CD", "Docker"],
    },
    {
      category: "Process & Collaboration",
      skills: ["Agile/Scrum", "Jira", "Trello", "Redmine", "GitLab", "GitHub"],
    },
  ],
  experience: [
    {
      id: "exp1",
      company: "BES",
      role: "Software Developer",
      period: "05/2024 - Present",
      responsibilities: [
        "Developing high-performance mobile applications using Flutter.",
        "Integrating complex third-party SDKs and native modules.",
      ],
      achievements: [
        "Successfully delivered key features for enterprise-level applications.",
      ],
    },
    {
      id: "exp2",
      company: "CMC Global",
      role: "Software Developer",
      period: "04/2024 - 05/2024",
      responsibilities: [
        "Contributed to mobile development projects for international clients.",
      ],
      achievements: [
        "Quickly adapted to project requirements and delivered high-quality code.",
      ],
    },
    {
      id: "exp3",
      company: "AHT Tech",
      role: "Software Developer",
      period: "05/2022 - 04/2024",
      responsibilities: [
        "Worked on multiple Flutter and React Native projects.",
        "Collaborated with cross-functional teams in an Agile environment.",
      ],
      achievements: [
        "Led mobile development for several high-profile client projects.",
      ],
    },
  ],
  projects: [
    {
      id: "vsale-super-app",
      name: "Unitel",
      company: "Viettel Telecom - Vietnam",
      time: "05/2025 – 03/2026",
      role: "Team Leader + Developer",
      teamSize: "3 developers, 1 tester, 2 BAs, 1 PM + external OS team",
      description: "Super App platform for Unitel Group delivering integrated multi-service solutions with a mini-app ecosystem across Laos.",
      highlight: "Built super app core + mini-app architecture",
      responsibilities: [
        "Led and mentored 3-person dev team, handled code reviews and architecture decisions",
        "Developed Super App core using Flutter with native iOS (Objective-C) and Android (Kotlin)",
        "Integrated Firebase, Alibaba Cloud, Insider, Deeptab",
        "Implemented mini-app ecosystem using React JS with isolated lifecycle",
        "Built communication layer between mini-app and super app",
        "Integrated social login (Apple, Google, Facebook)",
        "Managed release cycles and deployments"
      ],
      languages: ["Dart", "Kotlin", "Objective-C", "JavaScript (React)"],
      technologies: ["Flutter", "Firebase", "Alibaba Cloud", "Insider", "Deeptab", "Platform Channels", "React", "Mini-App Architecture"],
      platform: ["Android", "iOS"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      links: {
        appStore: "https://apps.apple.com/app/unitel-group/id1286779842",
        googlePlay: "https://play.google.com/store/apps/details?id=com.vtg.app.myunitel"
      }
    },
    {
      id: "vsale-micro-app",
      name: "Vsale Micro-App System",
      company: "Viettel Telecom - Vietnam",
      time: "05/2025 – 03/2026",
      role: "Team Leader + Developer",
      teamSize: "3 developers, 1 tester, 2 BAs, 1 PM + external OS team",
      description: "Enterprise sales and customer care system with multiple micro-app modules and deep native integrations.",
      highlight: "Designed micro-app isolation & hot deployment",
      responsibilities: [
        "Evaluated eKYC, NFC, video call SDKs for micro-app architecture",
        "Led development of 10+ business modules",
        "Designed micro-app isolation strategy",
        "Integrated Flutter with native SDKs",
        "Optimized performance and reduced cold start time",
        "Managed App Store & Google Play releases",
        "Handled sprint planning and Jira tracking"
      ],
      languages: ["Dart"],
      technologies: ["Flutter", "eKYC", "NFC"],
      platform: ["Android", "iOS"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
      links: {
        appStore: "https://apps.apple.com/vn/app/vsale/id6740941404",
        googlePlay: "https://play.google.com/store/apps/details?id=com.viettel.vsale"
      }
    },
    {
      id: "phoenix-financial",
      name: "Phoenix Financial System",
      company: "OFIS - Singapore",
      time: "06/2024 – 04/2025",
      role: "Developer",
      teamSize: "6 developers, 1 tester, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "Online financial system for managing and generating payment requests with real-time collaboration.",
      highlight: "Built real-time financial workflow system",
      responsibilities: [
        "Bootstrapped Flutter project with DI and multi-env setup",
        "Integrated Socket.io for real-time collaboration",
        "Implemented Azure AD SSO with RBAC",
        "Built payment request workflows",
        "Configured CI/CD with GitLab and Argo CD",
        "Integrated Amazon S3 for file handling",
        "Proposed Kafka for async processing"
      ],
      languages: ["Dart", "Java"],
      technologies: ["Spring Boot", "Spring Kafka", "Microservices", "GitLab CI/CD", "Azure AD", "Socket.io", "Docker", "Amazon S3"],
      platform: ["Web"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      links: {
        web: "https://phoenix-dev.orientfutures.com.sg/"
      }
    },
    {
      id: "hapa-kristin",
      name: "Hapa Kristin E-commerce",
      company: "Korea",
      time: "04/2024 – 06/2024",
      role: "Solo Developer",
      teamSize: "1 developer",
      description: "E-commerce platform for contact lenses with maps, booking, and payment features.",
      highlight: "Delivered full product solo (mobile + web)",
      responsibilities: [
        "Worked directly with Korean client",
        "Built full app end-to-end",
        "Integrated Google Maps, Stripe, Firebase",
        "Delivered both mobile and web platforms"
      ],
      languages: ["Dart", "JavaScript (Vue.js)"],
      technologies: ["Firebase", "Google Maps API", "Stripe"],
      platform: ["Android", "iOS", "Web"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      links: {
        web: "https://hapakristin.us/home",
        googlePlay: "https://play.google.com/store/apps/details?id=en.app.hapakristin"
      }
    },
    {
      id: "smart-info",
      name: "Smart Info",
      company: "MB Bank - Vietnam",
      time: "06/2023 – 04/2024",
      role: "Team Leader + Developer",
      teamSize: "10 developers, 2 testers, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "Internal application for managing customer and partner information for MB Bank executives.",
      highlight: "Handled high-security banking system",
      responsibilities: [
        "Designed architecture meeting strict security requirements",
        "Coordinated with MB Bank internal APIs",
        "Managed 10-developer team",
        "Passed penetration testing",
        "Supported production deployment"
      ],
      languages: ["Dart", "C#"],
      technologies: ["Firebase", "Amazon S3", "Docker", "Jenkins"],
      platform: ["Android", "iOS"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "mymb-super-app",
      name: "MyMB Super App Modules",
      company: "MB Bank - Vietnam",
      time: "08/2023 – 03/2024",
      role: "Team Leader + Fullstack Developer",
      teamSize: "10 developers, 2 testers, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "Super app with mini-app modules including asset management and vehicle booking.",
      highlight: "Built mini-app modules with custom SDK",
      responsibilities: [
        "Developed Inventory Assets and Vehicle Manager modules",
        "Integrated PAM and Socket.IO",
        "Built Spring Boot APIs",
        "Handled both frontend and backend",
        "Passed security pentest"
      ],
      languages: ["Dart", "Java"],
      technologies: ["Spring Boot", "Socket.IO", "Jenkins"],
      platform: ["Android", "iOS", "Web"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "vcm360",
      name: "Vcm360",
      company: "Viettel - Vietnam",
      time: "02/2023 – 10/2023",
      role: "Team Leader + Developer",
      teamSize: "8 developers, 1 tester, 1 BA, 1 PM, 1 Tech Lead",
      description: "Internal platform for employee engagement and recruitment within Viettel.",
      highlight: "Built CMS + mobile system",
      responsibilities: [
        "Defined coding standards",
        "Developed recruitment modules",
        "Built CMS web system",
        "Managed full release pipeline"
      ],
      languages: ["Dart", "Java"],
      technologies: ["Firebase", "Docker", "Amazon S3"],
      platform: ["Android", "iOS", "Web"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      links: {
        web: "https://vcm360.merket.io/",
        appStore: "https://apps.apple.com/us/app/vcm-360/id6468552995",
        googlePlay: "https://play.google.com/store/apps/details?id=com.aht.vcm360"
      }
    },
    {
      id: "hellojob",
      name: "HelloJob",
      company: "Japan",
      time: "05/2022 – 03/2023",
      role: "Developer",
      teamSize: "8 developers, 2 testers, 1 BA, 1 PM, 1 Tech Lead",
      description: "Job marketplace app connecting employers and candidates.",
      highlight: "Implemented real-time job search & matching",
      responsibilities: [
        "Integrated Elastic Search",
        "Built job matching system",
        "Handled Firebase notifications",
        "Delivered features in sprint cycles"
      ],
      languages: ["Dart"],
      technologies: ["Firebase", "Elastic Search", "Amazon S3"],
      platform: ["Android", "iOS"],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  achievements: [
    "3rd Place in Techwiz 3 - Aptech Global",
    "Advanced Diploma in Software Engineering (ADSE)",
    "Top Contributor at Local Tech Community",
  ],
};

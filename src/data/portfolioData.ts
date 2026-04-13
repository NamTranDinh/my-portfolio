export interface Project {
  id: string;
  name: string;
  company: string;
  client?: string;
  time: string;
  role: string;
  teamSize: string;
  description: string;
  highlight: string;
  responsibilities: string[];
  languages: string[];
  technologies: string[];
  platform: string[];
  image?: string;
  modules?: string[];
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

export interface WorkHistory {
  id: string;
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface TechnicalSkillRow {
  category: string;
  skills: string;
}

export interface EducationEntry {
  institution: string;
  period: string;
  details: string[];
  certificate?: string;
  award?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  summary: string;
  professionalSummary: string;
  careerGoal: string;
  yearsOfExperience: number;
  email: string;
  phone?: string;
  location: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  pubDev: string;
  stats: {
    yearsOfExperience: number;
    projectsCompleted: number;
  };
  socials: {
    github: string;
    linkedin: string;
    pubDev: string;
    twitter?: string;
  };
  skills: SkillGroup[];
  technicalSkillsTable: TechnicalSkillRow[];
  experience: Experience[];
  workHistory: WorkHistory[];
  education: EducationEntry[];
  projects: Project[];
  achievements: string[];
}

export const portfolioData: PortfolioData = {
  name: "Tran Dinh Nam",
  title: "Flutter Developer | Mobile & Cross-Platform Specialist",
  tagline: "Over 4 years of experience shipping Flutter, native mobile, and super-app solutions for enterprise teams.",
  about:
    "Tran Dinh Nam is a Flutter developer focused on mobile and cross-platform delivery, native integration, and product-minded engineering. He has worked across the full software lifecycle, from discovery and architecture to development, testing, release, and post-launch support.",
  summary:
    "Over 4 years of experience in software development across mobile and web applications, leveraging native technologies (Java for Android) and cross-platform frameworks, with a strong focus on Flutter.",
  professionalSummary:
    "Over 4 years of experience in software development across mobile and web applications, leveraging native technologies (Java for Android) and cross-platform frameworks, with a strong focus on Flutter. Specializes in building scalable, high-performance applications and integrating third-party services. Experienced across the full development lifecycle (design, development, testing, deployment).",
  careerGoal: "Career goal: grow into a Product Manager role within 3 years.",
  yearsOfExperience: 4,
  email: "trandinhnamnd0102@gmail.com",
  phone: "0395.212.072",
  location: "Ha Noi, Vietnam",
  address: "245 Duong Lac Long Quan, Bai An, Nghia Do, Ha Noi, Vietnam",
  gender: "Male",
  dateOfBirth: "20/01/2002",
  pubDev: "https://pub.dev/my-packages",
  stats: {
    yearsOfExperience: 4,
    projectsCompleted: 8,
  },
  socials: {
    github: "https://github.com/NamTranDinh",
    linkedin: "https://www.linkedin.com/in/trandinham20102",
    pubDev: "https://pub.dev/my-packages",
  },
  skills: [
    {
      category: "Core Flutter & State Management",
      skills: ["Provider", "Bloc", "Dio", "Http", "Flutter DevTools", "Crashlytics", "Unit Testing", "Widget Testing", "Integration Testing"],
    },
    {
      category: "AI-Assisted Development",
      skills: ["Claude", "ChatGPT", "Cursor", "AntiGravity", "GitHub Copilot"],
    },
    {
      category: "Native Integration & Platform SDKs",
      skills: ["Flutter to Android (Java/Kotlin)", "Flutter to iOS (Swift/Objective-C)", "Platform Channels", "FFI", "Firebase", "Insider", "Deep Linking", "Alibaba Cloud", "NFC", "eKYC", "Video Call SDK"],
    },
    {
      category: "Mini App & Super App",
      skills: ["Super Mini App Architecture", "Mini App Runtime", "Sandboxed Sub-Apps", "Inter-App Communication", "Permission Scoping"],
    },
    {
      category: "Cloud, Infrastructure & Deployment",
      skills: ["AWS", "Azure", "GCP", "Alibaba Cloud", "Amazon S3", "GitLab CI/CD", "Argo CD", "Jenkins", "Docker"],
    },
    {
      category: "Process & Collaboration",
      skills: ["Agile/Scrum", "Jira", "Trello", "Redmine", "Requirements Analysis", "Remote Team Collaboration", "Outsourcing"],
    },
  ],
  technicalSkillsTable: [
    {
      category: "Languages",
      skills: "Dart/Flutter (4+ yrs), Java Android (1 yr), Swift/SwiftUI (working), JavaScript/React Native (working), Java/Spring Boot (working)",
    },
    {
      category: "Development Tools",
      skills: "GitHub, GitLab, GCP Source Repositories (4+ yrs), Figma",
    },
    {
      category: "API Testing",
      skills: "Postman (4+ yrs), Swagger (4+ yrs)",
    },
    {
      category: "Deployment",
      skills: "App Store, Google Play (1+ yr), CI/CD (6 months)",
    },
    {
      category: "AI Tools",
      skills: "Claude, ChatGPT, GitHub Copilot, Cursor, AntiGravity",
    },
    {
      category: "Architecture",
      skills: "Clean Architecture, MVVM, Modularization, Micro App / Super App",
    },
    {
      category: "Management",
      skills: "Agile/Scrum, Jira, Trello",
    },
    {
      category: "English",
      skills: "Intermediate - basic communication, read documents, chat with customers",
    },
  ],
  experience: [
    {
      id: "exp-bes",
      company: "BES",
      role: "Software Developer",
      period: "05/2024 - Present",
      responsibilities: [
        "Contribute to Flutter-based mobile delivery and ongoing feature work.",
        "Integrate native modules and third-party SDKs when project requirements demand it.",
      ],
      achievements: ["Support enterprise delivery with stable release execution and code quality."],
    },
    {
      id: "exp-cmc",
      company: "CMC Global",
      role: "Software Developer",
      period: "04/2024 - 05/2024",
      responsibilities: [
        "Support cross-functional delivery for international client requirements.",
        "Adapt quickly to existing architecture, team process, and short delivery windows.",
      ],
      achievements: ["Delivered work in a fast-moving environment with a short onboarding window."],
    },
    {
      id: "exp-aht",
      company: "AHT Tech",
      role: "Software Developer",
      period: "05/2022 - 04/2024",
      responsibilities: [
        "Work on mobile delivery across Flutter and related cross-platform stacks.",
        "Collaborate with product, QA, and backend teams inside Agile processes.",
      ],
      achievements: ["Built the foundation for 4+ years of hands-on product delivery."],
    },
  ],
  workHistory: [
    {
      id: "work-bes",
      company: "BES",
      role: "Software Developer",
      period: "05/2024 - Present",
      summary: "Flutter delivery, native SDK integration, and enterprise mobile support.",
    },
    {
      id: "work-cmc",
      company: "CMC Global",
      role: "Software Developer",
      period: "04/2024 - 05/2024",
      summary: "Short-cycle delivery for international client work and team onboarding.",
    },
    {
      id: "work-aht",
      company: "AHT Tech",
      role: "Software Developer",
      period: "05/2022 - 04/2024",
      summary: "Flutter and cross-platform product delivery in Agile teams.",
    },
  ],
  education: [
    {
      institution: "Aptech Computer Education",
      period: "2020 - 2023",
      details: [
        "Term 1: HTML5, CSS3, JavaScript, PHP, SQL Server",
        "Term 2: Java, Spring Boot, JSP, Hibernate",
        "Term 3: .NET Core, C#, Entity Framework",
        "Term 4: Java, Android SDK, Firebase",
      ],
      certificate: "Advanced Diploma in Software Engineering (ADSE) - 04/2023",
      award: "3rd place - Techwiz 3 (Aptech Global) for innovative mobile application",
    },
  ],
  projects: [
    {
      id: "unitel",
      name: "Unitel",
      company: "Viettel Telecom - Vietnam",
      client: "Unitel Group",
      time: "05/2025 - 03/2026",
      role: "Team Leader + Developer",
      teamSize: "3 devs, 1 tester, 2 BAs, 1 PM + external OS team",
      description: "Super App for Unitel Group (Laos) - a multi-service platform with a mini-app ecosystem.",
      highlight: "Led super app core delivery and mini-app architecture.",
      responsibilities: [
        "Led and mentored a 3-person development team, including task assignment, code reviews, and architectural decisions.",
        "Architected the Super App core with Flutter plus native iOS (Objective-C) and Android (Kotlin) integrations.",
        "Integrated Firebase Analytics, Crashlytics, and Remote Config with Alibaba Cloud OSS, Push, and MQTT.",
        "Connected Insider and Deeptab services for product growth and engagement workflows.",
        "Built the native bridge for mini-app to super-app data communication.",
        "Built the mini-app ecosystem with React JS, isolated lifecycle, and inter-app communication.",
        "Implemented Apple Sign-In, Google, and Facebook social login.",
        "Managed release cycles for App Store and Google Play deliveries.",
      ],
      languages: ["Dart", "Kotlin", "Objective-C", "JavaScript (React)"],
      technologies: ["Flutter", "Firebase", "Alibaba Cloud", "Insider", "Deeptab", "Platform Channels", "React", "Mini-App Architecture"],
      platform: ["Android", "iOS"],
      links: {
        appStore: "https://apps.apple.com/app/unitel-group/id1286779842",
        googlePlay: "https://play.google.com/store/apps/details?id=com.vtg.app.myunitel",
      },
    },
    {
      id: "vsale",
      name: "Vsale",
      company: "Viettel Telecom - Vietnam",
      client: "Viettel Telecom",
      time: "05/2025 - 03/2026",
      role: "Team Leader + Developer",
      teamSize: "3 devs, 1 tester, 2 BAs, 1 PM + external OS team",
      description: "Internal business app for Viettel sales and customer care, deployed as a micro-app module.",
      highlight: "Designed micro-app isolation and native SDK bridging.",
      responsibilities: [
        "Evaluated and selected third-party libraries for eKYC, NFC, and video call integrations.",
        "Led development across more than 10 business modules in the micro-app architecture.",
        "Designed module isolation for independent development, testing, and hot-deployment.",
        "Ran weekly code reviews with Viettel's technical team.",
        "Broke down epics into Jira tasks, tracked sprint velocity, and managed backlog.",
        "Translated blockers into business updates and negotiated realistic timelines with PMs.",
        "Integrated eKYC and NFC identity verification for regulatory compliance.",
        "Optimized performance with Flutter DevTools, focusing on frame drops and cold start time.",
        "Managed App Store and Google Play release cycles, provisioning, versioning, and Crashlytics monitoring.",
      ],
      languages: ["Dart"],
      technologies: ["Flutter", "eKYC", "NFC"],
      platform: ["Android", "iOS"],
      modules: [
        "Prepaid/Postpaid Info",
        "Register Information",
        "Standardize",
        "Mobile Connection",
        "Confirm Usage",
        "Subscriber Conversion",
        "SIM Switch",
        "Network Switch",
        "Subscription Changes",
      ],
      links: {
        appStore: "https://apps.apple.com/vn/app/vsale/id6740941404?l=vi",
        googlePlay: "https://play.google.com/store/apps/details?id=com.viettel.vsale&hl=vi",
      },
    },
    {
      id: "phoenix",
      name: "Phoenix",
      company: "OFIS - Singapore",
      client: "OFIS",
      time: "06/2024 - 04/2025",
      role: "Developer",
      teamSize: "6 devs, 1 tester, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "Online financial system for managing and generating payment requests for the office department.",
      highlight: "Bootstrapped the Flutter project and real-time workflow foundation.",
      responsibilities: [
        "Bootstrapped the Flutter project from zero with DI, environment configs for DEV/UAT/PROD, and team conventions.",
        "Integrated Socket.io for real-time collaboration, including reconnection logic and UI state sync.",
        "Implemented Azure AD SSO with token refresh and role-based access control.",
        "Built the core payment request module with form validation, approval workflows, and multi-level authorization.",
        "Created GitLab CI/CD and Argo CD pipelines for automated builds and DEV-to-UAT promotion.",
        "Integrated Amazon S3 for document storage, pre-signed URLs, upload progress, and large-file handling.",
        "Raised effort estimates and scope risks to the Tech Lead.",
        "Proposed Spring Kafka for async processing of high-volume payment events.",
        "Kept daily async updates and weekly syncs with PM and Tech Lead.",
      ],
      languages: ["Dart", "Java"],
      technologies: ["Spring Boot", "Spring JPA", "Spring Kafka", "Microservice", "GitLab CI/CD", "Azure AD", "Socket.io", "Docker", "Amazon S3", "Argo CD", "Cloudflare"],
      platform: ["Web"],
      links: {
        web: "https://phoenix-dev.orientfutures.com.sg/",
      },
    },
    {
      id: "hapa-kristin",
      name: "Hapa Kristin",
      company: "Korea",
      client: "Hapa Kristin",
      time: "04/2024 - 06/2024",
      role: "Developer (Solo)",
      teamSize: "1 developer, 1 BA, 1 PM",
      description: "E-commerce app for contact lenses with store locations on Google Maps, online orders, appointments, and payments.",
      highlight: "Delivered the full product end-to-end as a solo developer.",
      responsibilities: [
        "Worked directly with the Korean client and gathered requirements end-to-end.",
        "Delivered the full app independently, from planning to production release.",
        "Integrated Google Maps API, Stripe payments, and Firebase within Flutter and Vue.js.",
        "Shipped mobile and web platforms with feature parity while managing scope and timelines.",
      ],
      languages: ["Dart", "JavaScript (Vue.js)"],
      technologies: ["Firebase", "Google Maps API", "Stripe Payment"],
      platform: ["Android", "iOS", "Web"],
      links: {
        googlePlay: "https://play.google.com/store/apps/details?id=en.app.hapakristin&hl=vi",
        web: "https://hapakristin.us/home",
      },
    },
    {
      id: "smart-info",
      name: "Smart Info",
      company: "MB Bank - Vietnam",
      client: "MB Bank",
      time: "06/2023 - 04/2024",
      role: "Team Leader + Developer",
      teamSize: "10 devs, 2 testers, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "Internal app for MB Bank that stores and provides customer, partner, and event information for senior bank leaders.",
      highlight: "Delivered a secure banking solution that passed penetration testing.",
      responsibilities: [
        "Architected the project structure to match MB Bank's strict internal security and compliance requirements.",
        "Coordinated with the bank's engineering team to access proprietary APIs.",
        "Managed a 10-developer team with task assignment, progress tracking, and blocker resolution.",
        "Hardened authentication flows, encryption, and API layers to pass penetration testing.",
        "Supported staging and production deployment with post-release monitoring.",
      ],
      languages: ["Dart", "C# (.NET)"],
      technologies: ["Firebase", "Amazon S3", "Docker", "Jenkins"],
      platform: ["Android", "iOS"],
    },
    {
      id: "mymb",
      name: "My MB",
      company: "MB Bank - Vietnam",
      client: "MB Bank",
      time: "08/2023 - 03/2024",
      role: "Team Leader + FE Developer + BE Developer",
      teamSize: "10 devs, 2 testers, 1 BA, 1 DevOps, 1 PM, 1 Tech Lead",
      description: "MB's Super App using a custom SDK with mini-app modules for asset and vehicle management.",
      highlight: "Delivered mini-app modules on top of a proprietary banking SDK.",
      responsibilities: [
        "Built Inventory Assets and Vehicle Manager mini-apps using MB's proprietary SDK.",
        "Integrated PAM system and Socket.IO for real-time vehicle booking and QR-based asset tracking.",
        "Balanced legacy feature maintenance with new module delivery.",
        "Designed Spring Boot REST APIs for the Inventory Assets module, covering both frontend and backend work.",
        "Passed MB Bank's security penetration tests for both modules.",
      ],
      languages: ["Dart", "Java (Spring Boot)"],
      technologies: ["MB SDK", "Dart Server", "Socket.IO", "PAM System", "Jenkins"],
      platform: ["Android", "iOS", "Web"],
    },
    {
      id: "vcm360",
      name: "Vcm360",
      company: "Viettel Group - Vietnam",
      client: "Viettel Group",
      time: "02/2023 - 10/2023",
      role: "Team Leader + Developer",
      teamSize: "8 devs, 1 tester, 1 BA, 1 PM, 1 Tech Lead",
      description: "Internal app for Viettel Group employees to share opinions and apply or recommend candidates for internal job postings.",
      highlight: "Delivered the CMS web interface and mobile experience together.",
      responsibilities: [
        "Set up the project baseline and coding standards for an 8-developer team across mobile and web.",
        "Led the Viettel Perspective and Internal Recruitment modules from UI to API.",
        "Built the CMS web interface for administrators.",
        "Owned the release pipeline for App Store, Google Play, versioning, and QA sign-off.",
      ],
      languages: ["Dart", "Java (Spring Boot)"],
      technologies: ["Firebase", "Docker", "Amazon S3"],
      platform: ["Android", "iOS", "Web"],
      links: {
        web: "https://vcm360.merket.io/",
        googlePlay: "https://play.google.com/store/apps/details?id=com.aht.vcm360&hl=vi",
        appStore: "https://apps.apple.com/us/app/vcm-360/id6468552995",
      },
    },
    {
      id: "hellojob",
      name: "HelloJob",
      company: "Japan",
      client: "HelloJob",
      time: "05/2022 - 03/2023",
      role: "Developer",
      teamSize: "8 devs, 2 testers, 1 BA, 1 PM, 1 Tech Lead",
      description: "App connecting employers and job seekers through continuously updated job listings.",
      highlight: "Implemented search, matching, and notification flows for job discovery.",
      responsibilities: [
        "Integrated Elastic Search for real-time job listing search with filtering and ranking.",
        "Implemented job-matching features for employer listings, candidate applications, and Firebase notifications.",
        "Contributed technical proposals and delivered features within sprint deadlines.",
      ],
      languages: ["Dart"],
      technologies: ["Firebase", "Elastic Search", "Amazon S3"],
      platform: ["Android", "iOS"],
    },
  ],
  achievements: [
    "3rd place - Techwiz 3 (Aptech Global) for innovative mobile application",
    "Advanced Diploma in Software Engineering (ADSE) - 04/2023",
    "4+ years of delivery across Flutter, native integration, and cross-platform systems",
  ],
};

import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  LineChart,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

export const siteConfig = {
  name: "Manish Kumar Shah",
  title: "Full-Stack Engineer + Aspiring Data Scientist",
  email: "sahmanish0856@gmail.com",
  location: "Bengaluru, India",
  bio: "Full-stack engineer and aspiring data scientist building AI-powered applications across healthcare, agriculture, and enterprise domains. Proficient in React, Next.js, Node.js, and Python with hands-on experience in machine learning, deep learning, and computer vision. Active researcher in medical image analysis (BraTS brain tumor classification and segmentation). Hackathon finalist with a track record of production-grade delivery under pressure.",
  resumeUrl: "/Resume_Manish.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Manish-412",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manish-shah098",
    },
    {
      label: "Email",
      href: "mailto:sahmanish0856@gmail.com",
    },
  ],
};

export const heroRoles = [
  "Full-Stack Engineer",
  "Aspiring Data Scientist",
  "ML Researcher",
];

export const aboutHighlights = [
  {
    title: "Education",
    description:
      "B.Tech in CSE, JAIN Deemed to be University (CGPA 8.715/10, expected 2028).",
  },
  {
    title: "Research Focus",
    description:
      "Brain tumor classification and segmentation using BraTS MRI datasets.",
  },
  {
    title: "Domains",
    description:
      "Healthcare, agriculture, and enterprise AI with production-grade delivery.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 86 },
      { name: "Framer Motion", level: 80 },
      { name: "Radix UI", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express", level: 82 },
      { name: "REST APIs", level: 84 },
      { name: "JWT", level: 78 },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 84 },
      { name: "PyTorch", level: 86 },
      { name: "Scikit-learn", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "Computer Vision", level: 85 },
    ],
  },
  {
    title: "Data Science",
    icon: Cloud,
    skills: [
      { name: "Pandas", level: 86 },
      { name: "NumPy", level: 84 },
      { name: "Matplotlib", level: 78 },
      { name: "Seaborn", level: 76 },
      { name: "Jupyter", level: 82 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 84 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 88 },
      { name: "Recharts", level: 74 },
      { name: "JWT", level: 78 },
    ],
  },
];

export const projectCategories = [
  "All",
  "AI/ML",
  "Full Stack",
  "Research",
];

export const projects = [
  {
    title: "KRUSHI-SCAN",
    category: "Full Stack",
    image: "/images/project-fullstack.svg",
    description:
      "AI agriculture platform with realtime IoT dashboards and crop disease detection.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Recharts",
      "Python",
    ],
    metrics: "5+ IoT streams monitored live, diagnosis time cut to seconds",
    highlights: [
      "Realtime sensor dashboards for farmers",
      "Image-based disease detection with confidence scoring",
      "Regional weather intelligence for crop recommendations",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Architected a full-stack platform with modular REST APIs for future IoT extensibility and rapid on-field insights.",
  },
  {
    title: "CLARIO",
    category: "AI/ML",
    image: "/images/project-chatbot.svg",
    description:
      "24/7 mental health support platform with AI chatbot and emotion recognition.",
    stack: [
      "JavaScript",
      "Python",
      "Google Generative AI",
      "DeepFace",
      "JWT",
    ],
    metrics: "Proactive interventions via realtime emotion sensing",
    highlights: [
      "Facial emotion recognition with DeepFace + OpenCV",
      "AI chatbot for always-on support",
      "Mood and sleep analytics dashboards",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Integrated realtime emotion signals to personalize AI responses while securing sensitive data with JWT.",
  },
  {
    title: "ONEFLOW",
    category: "Full Stack",
    image: "/images/project-research.svg",
    description:
      "Unified project and task management platform with RBAC and finance modules.",
    stack: ["React", "TypeScript", "Node.js", "MySQL", "JWT"],
    metrics: "Centralized workflows with realtime cost visibility",
    highlights: [
      "Role-based access with admin approval flows",
      "Integrated invoicing, expenses, and PO tracking",
      "Single-pane project execution",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Replaced scattered tools with one platform, securing APIs and tying financials to delivery metrics.",
  },
  {
    title: "EXPENSIO",
    category: "Full Stack",
    image: "/images/project-ai.svg",
    description:
      "Expense management platform with hierarchical approvals and realtime tracking.",
    stack: ["React", "Node.js", "MySQL", "JWT"],
    metrics: "Approval cycles reduced with automated workflows",
    highlights: [
      "Multi-role approvals and audit trails",
      "Receipt uploads with realtime visibility",
      "JWT-secured, role-scoped access",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Automated the entire submission-to-signoff chain while keeping finance teams in full control.",
  },
  {
    title: "Brain Tumor Classification (BraTS)",
    category: "Research",
    image: "/images/project-research.svg",
    description:
      "Multi-class MRI brain tumor classification using deep learning and transfer learning techniques on the BraTS dataset.",
    stack: ["PyTorch", "TensorFlow", "BraTS", "OpenCV"],
    metrics:
      "Research-focused medical imaging pipeline for improving diagnostic accuracy and reducing tumor misclassification.",
    highlights: [
      "MRI preprocessing with skull stripping, normalization, and NIfTI slice extraction",
      "Transfer learning using ResNet and EfficientNet architectures",
      "Optimized for high classification accuracy on glioma subtypes",
      "Built visualization and evaluation pipeline for medical imaging analysis",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Multi-class MRI brain tumor classification using deep learning and transfer learning techniques on the BraTS dataset.",
  },
  {
    title: "HGG vs LGG Segmentation (BraTS)",
    category: "Research",
    image: "/images/project-fullstack.svg",
    description:
      "Semantic segmentation of glioma tumor regions from multi-modal MRI scans using U-Net based architectures.",
    stack: ["PyTorch", "U-Net", "BraTS", "MRI"],
    metrics:
      "Performance evaluation using Dice Score and Hausdorff Distance on BraTS benchmarks.",
    highlights: [
      "Multi-modal MRI inputs including T1, T2, FLAIR, and T1ce",
      "Attention-enhanced encoder-decoder segmentation architecture",
      "Tumor region segmentation with Dice coefficient optimization",
      "Comparative benchmarking against BraTS evaluation standards",
    ],
    links: {
      github: "https://github.com/",
      live: "https://example.com",
    },
    caseStudy:
      "Semantic segmentation of glioma tumor regions from multi-modal MRI scans using U-Net based architectures.",
  },
];

export const experiences = [
  {
    title: "Brain Tumor Classification (BraTS)",
    company: "Manuscript in preparation",
    timeframe: "2025 - Present",
    description:
      "Multi-class MRI tumor classification (Meningioma, Pituitary, Glioma, No Tumor) with CNN + transfer learning.",
  },
  {
    title: "HGG vs LGG Segmentation (BraTS)",
    company: "Manuscript in preparation",
    timeframe: "2025 - Present",
    description:
      "U-Net and attention models for pixel-level tumor masks with Dice and Hausdorff evaluation.",
  },
  {
    title: "Hackathon Finalist",
    company: "Amalthea IIT-GN 2025, IEEE AVM-IIITM 2026",
    timeframe: "2025 - 2026",
    description:
      "Finalist teams delivering production-grade systems under tight timelines.",
  },
  {
    title: "Smart India Hackathon",
    company: "Final Round (College Level)",
    timeframe: "2025",
    description:
      "Selected for SIH 2025 with applied AI solutions for real-world challenges.",
  },
];

export const certifications = [
  {
    title: "Finalist - AVM-IIITM",
    issuer: "IEEE Student Branch",
    year: "2026",
  },
  {
    title: "Finalist - IIT Gandhinagar ODOO Hackathon",
    issuer: "Amalthea (IIT-GN)",
    year: "2025",
  },
  {
    title: "Smart India Hackathon Finalist",
    issuer: "SIH 2025 (College Level)",
    year: "2025",
  },
];

export const stats = [
  { label: "Research manuscripts", value: "2", icon: LineChart },
  { label: "Hackathon finals", value: "2", icon: Sparkles },
  { label: "Domains", value: "3", icon: Layers },
  { label: "Applied projects", value: "4", icon: GitBranch },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const commandItems = [
  { label: "Jump to About", href: "#about", icon: Code2 },
  { label: "Jump to Projects", href: "#projects", icon: Bot },
  { label: "Jump to Contact", href: "#contact", icon: Sparkles },
];

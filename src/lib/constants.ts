import type { LucideIcon } from 'lucide-react';
import { Code, ShoppingCart, Cloud, GitMerge, ShieldCheck, Siren, Users, Library, BookOpen, Award, Briefcase, Lightbulb } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products'},
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export const DIFFERENTIATORS = [
    {
        icon: Briefcase,
        title: 'Deep Domain Expertise',
        description: 'Our team brings years of specialized experience across diverse industries, enabling us to understand your unique challenges and deliver solutions with real-world impact.'
    },
    {
        icon: Award,
        title: 'Commitment to Quality',
        description: 'We adhere to the highest standards of development and project management, ensuring every solution we deliver is robust, scalable, and secure.'
    },
    {
        icon: Lightbulb,
        title: 'Future-Focused Innovation',
        description: 'We are passionate about leveraging emerging technologies to provide you with a competitive edge and build solutions that are prepared for tomorrow\'s challenges.'
    }
];

export const TECH_STACK = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Azure', 'OCI', 'Docker', 'Kubernetes'
]

type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string;
  useCases: string[];
  benefits: string[];
  image: string;
  dataAiHint: string;
  href: string;
  external?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: 'custom-development',
    title: 'Custom Development',
    description: 'Bespoke web and mobile applications engineered for performance and scalability.',
    icon: Code,
    details: 'We don\'t just write code; we architect strategic digital assets designed to solve your core business challenges and unlock new opportunities. Our end-to-end development process, from ideation to deployment and support, ensures your vision is translated into a high-performance application. We specialize in modern technology stacks for both web and mobile, guaranteeing a solution that is both powerful today and adaptable for tomorrow.',
    useCases: ['Enterprise Resource Planning (ERP)', 'Custom CRM Solutions', 'Cross-Platform Mobile Apps', 'Business Process Automation'],
    benefits: ['Perfectly aligned with your workflows', 'Scalable architecture for future growth', 'Full intellectual property ownership', 'Seamless integration with existing systems'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'software development code',
    href: '/services/custom-development'
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    description: 'High-conversion e-commerce platforms designed for seamless user experiences.',
    icon: ShoppingCart,
    details: 'We construct powerful e-commerce ecosystems that deliver seamless, engaging shopping experiences to maximize conversions. Our platforms are secure, performant, and built to scale with your growth. From bespoke storefronts to complex B2B ordering systems, we provide comprehensive services that cover every aspect of your digital commerce needs, creating a robust foundation for your online business.',
    useCases: ['B2C Online Retail Stores', 'B2B Wholesale Platforms', 'Subscription & Membership Services', 'Multi-vendor Marketplace Solutions'],
    benefits: ['Secure payment gateway integrations', 'Mobile-first, responsive design', 'Advanced inventory & order management', 'Optimized for search engine visibility (SEO)'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'online shopping cart',
    href: '/services/ecommerce-development'
  },
  {
    slug: 'cloud-consultancy',
    title: 'Cloud Consultancy',
    description: 'Strategic guidance for AWS, Azure, and OCI to optimize and secure your cloud environment.',
    icon: Cloud,
    details: 'Harness the full power of the cloud with our expert consultancy for AWS, Azure, and OCI. We provide more than just migration; we architect, optimize, and manage your cloud infrastructure for peak performance, ironclad security, and maximum cost-efficiency. Our strategic guidance covers initial strategy, migration, FinOps, and security, ensuring your cloud environment is a powerful, resilient, and efficient business asset.',
    useCases: ['Cloud Migration & Modernization', 'Serverless & Microservices Architecture', 'Cloud Security & Compliance Audits', 'FinOps & Cost Optimization'],
    benefits: ['Significant reduction in infrastructure costs', 'Enhanced security posture and compliance', 'Improved scalability and operational resilience', 'Accelerated time-to-market for applications'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'cloud infrastructure diagram',
    href: '/services/cloud-consultancy'
  },
  {
    slug: 'devops-consultancy',
    title: 'DevOps Consultancy',
    description: 'Automating and streamlining your software delivery lifecycle for speed and reliability.',
    icon: GitMerge,
    details: 'Accelerate your innovation cycle by integrating development and operations into a seamless, automated workflow. We help you cultivate a mature DevOps culture and implement robust automation to streamline your software delivery pipeline. Our expertise in CI/CD, Infrastructure as Code (IaC), and containerization technologies like Docker and Kubernetes enables you to release higher-quality software, faster and more reliably.',
    useCases: ['CI/CD Pipeline Automation', 'Infrastructure as Code (Terraform, CloudFormation)', 'Containerization & Orchestration (Docker, Kubernetes)', 'Automated Monitoring & Alerting'],
    benefits: ['Dramatically accelerated development cycles', 'Increased deployment frequency and reliability', 'Improved cross-team collaboration', 'Enhanced application quality and system stability'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'workflow automation chart',
    href: '/services/devops-consultancy'
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security Training',
    description: 'Empowering your team to be the first line of defense against cyber threats.',
    icon: ShieldCheck,
    details: 'Our Cyber Security Awareness Training transforms your employees into a proactive security asset. We equip your team with the critical knowledge to identify, avoid, and report online threats, fostering a resilient, security-conscious culture across your entire organization.',
    useCases: [],
    benefits: [],
    image: '',
    dataAiHint: '',
    href: 'https://secureaware.siddas.co',
    external: true
  },
  {
    slug: 'phishing-simulation',
    title: 'Phishing Simulation',
    description: 'Test and fortify your team’s resilience against sophisticated phishing attacks.',
    icon: Siren,
    details: 'Identify and remediate human-layer security gaps with our realistic phishing simulations. We test your team\'s awareness and readiness against real-world attack vectors, allowing you to strengthen your defenses before a real threat emerges.',
    useCases: [],
    benefits: [],
    image: '',
    dataAiHint: '',
    href: 'https://secureaware.siddas.co',
    external: true
  }
];

type Product = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string;
  useCases: string[];
  benefits: string[];
  image: string;
  dataAiHint: string;
};

export const PRODUCTS: Product[] = [
    {
        slug: 'hrms',
        title: 'HR Management System',
        description: 'An integrated suite to automate and streamline your entire employee lifecycle.',
        icon: Users,
        details: 'Our Human Resource Management System (HRMS) is a comprehensive, all-in-one platform engineered to automate your people operations. Free your HR professionals from manual administrative tasks and empower them to focus on strategic initiatives. From talent acquisition and onboarding to payroll, performance, and offboarding, our intuitive system is the ultimate toolkit for modern workforce management.',
        useCases: ['Centralized Employee Data Management', 'Automated Payroll & Compensation', 'Leave & Attendance Tracking', 'Performance & Goal Management', 'Recruitment & Applicant Tracking'],
        benefits: ['Boosted HR operational efficiency', 'Significant reduction in administrative overhead', 'Enhanced employee experience and engagement', 'Actionable insights from HR analytics'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'human resources dashboard'
    },
    {
        slug: 'library-management-system',
        title: 'Library Management System',
        description: 'A powerful, easy-to-use system for digitizing and managing library operations.',
        icon: Library,
        details: 'Revolutionize your library\'s operations with our state-of-the-art Library Management System. Purpose-built for academic, public, and corporate libraries, our system simplifies every facet of library administration, from digital cataloging and circulation to patron management and analytics. Deliver a superior experience for users and empower your staff with powerful, intuitive tools designed for the modern library.',
        useCases: ['Digital Cataloging & Metadata Management', 'Automated Circulation (Check-in/Check-out)', 'Patron & Membership Management', 'Fee & Fine Automation', 'Insightful Reporting & Analytics'],
        benefits: ['Streamlined and simplified library operations', 'Enhanced search and discovery for patrons', 'Accurate, real-time tracking of all resources', 'Effortless generation of reports and statistics'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'library books aisle'
    },
    {
        slug: 'learning-management-system',
        title: 'Learning Management System',
        description: 'A versatile platform to create, deliver, manage, and track online learning.',
        icon: BookOpen,
        details: 'Deliver impactful and engaging e-learning experiences with our flexible Learning Management System (LMS). Ideal for corporate training, educational institutions, and certification programs, our platform provides a complete ecosystem for online learning. Foster a culture of continuous development with an intuitive, scalable, and feature-rich LMS that meets the needs of both learners and administrators.',
        useCases: ['Corporate Training & Employee Development', 'Online Academic Course Delivery', 'Professional Certification Programs', 'Compliance & Onboarding Training'],
        benefits: ['Centralized repository for all learning content', 'Flexible, on-demand access to training', 'Automated progress tracking and reporting', 'Engaging interactive content delivery'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'online learning screen'
    }
]

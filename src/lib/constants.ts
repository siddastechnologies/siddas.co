import type { LucideIcon } from 'lucide-react';
import { Code, ShoppingCart, Cloud, GitMerge, ShieldCheck, Siren, Users, Library, BookOpen } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products'},
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

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
    description: 'Bespoke web and mobile applications tailored to your unique business needs.',
    icon: Code,
    details: 'We go beyond writing code; we build strategic assets that solve your core business challenges and create new opportunities. From initial concept to deployment and ongoing support, we partner with you to turn your vision into a high-performance application that drives growth and efficiency. We specialize in modern technology stacks for both web and mobile platforms, ensuring your solution is built for today and ready for tomorrow.',
    useCases: ['Enterprise Resource Planning (ERP) systems', 'Customer Relationship Management (CRM) software', 'Custom mobile apps for iOS and Android', 'Internal business process automation tools'],
    benefits: ['Solutions perfectly aligned with your processes', 'Scalable architecture for future growth', 'Full ownership of the intellectual property', 'Integration with existing systems'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'software development',
    href: '/services/custom-development'
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    description: 'Powerful and scalable e-commerce platforms to grow your online business.',
    icon: ShoppingCart,
    details: 'We build robust e-commerce solutions that provide seamless, engaging shopping experiences and drive conversions. Our platforms are feature-rich, secure, and optimized for performance and scalability. Whether you\'re launching a new online store or looking to enhance an existing one, we provide end-to-end services from design to deployment, creating a powerful digital storefront that grows with your business.',
    useCases: ['Online retail stores (B2C)', 'Wholesale and B2B ordering platforms', 'Subscription-based services', 'Marketplace platforms'],
    benefits: ['Secure payment gateway integration', 'Mobile-responsive design', 'Advanced inventory and order management', 'Search engine optimization (SEO) friendly'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'online shopping',
    href: '/services/ecommerce-development'
  },
  {
    slug: 'cloud-consultancy',
    title: 'Cloud Consultancy',
    description: 'Expert guidance for AWS, Azure, and OCI to optimize your cloud infrastructure.',
    icon: Cloud,
    details: 'Unlock the full potential of the cloud with our expert consultancy services for AWS, Azure, and OCI. We don\'t just migrate you to the cloud; we optimize your entire infrastructure for performance, security, and cost. Our strategic guidance covers everything from initial strategy and migration planning to FinOps and security audits, ensuring your cloud environment is a powerful, efficient, and secure foundation for your business.',
    useCases: ['Cloud migration and strategy planning', 'Serverless architecture design', 'Infrastructure security and compliance audits', 'Cost optimization and management'],
    benefits: ['Reduced infrastructure costs', 'Enhanced security and compliance', 'Improved scalability and performance', 'Faster time-to-market for new features'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'cloud computing',
    href: '/services/cloud-consultancy'
  },
  {
    slug: 'devops-consultancy',
    title: 'DevOps Consultancy',
    description: 'Streamline your development and operations for faster, more reliable releases.',
    icon: GitMerge,
    details: 'Bridge the gap between development and operations to accelerate your innovation cycle. We help you adopt a mature DevOps culture and implement robust automation to streamline your software delivery pipeline. Our services include CI/CD implementation, infrastructure as code (IaC), and containerization with Docker and Kubernetes, enabling you to release higher-quality software faster and more reliably.',
    useCases: ['Continuous Integration/Continuous Delivery (CI/CD) pipelines', 'Infrastructure as Code (IaC) with Terraform or CloudFormation', 'Containerization with Docker and Kubernetes', 'Automated testing and quality assurance'],
    benefits: ['Accelerated development cycles', 'Increased deployment frequency and reliability', 'Improved collaboration between teams', 'Enhanced application quality and stability'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'coding collaboration',
    href: '/services/devops-consultancy'
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security Training',
    description: 'Comprehensive training to protect your organization from cyber threats.',
    icon: ShieldCheck,
    details: 'Our Cyber Security Awareness Training equips your team with the knowledge to identify and respond to online threats, creating a security-conscious culture within your organization.',
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
    description: 'Test and improve your team\'s resilience against phishing attacks.',
    icon: Siren,
    details: 'We provide realistic phishing simulations to test your employees\' awareness and readiness, helping you identify vulnerabilities before attackers do.',
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
        description: 'A complete suite to manage your workforce, from recruitment to retirement.',
        icon: Users,
        details: 'Our Human Resource Management System (HRMS) is an all-in-one platform designed to automate and streamline your people operations. Free your HR team from administrative burdens and empower them to focus on what matters most: your people. From recruitment and onboarding to payroll, performance management, and offboarding, our intuitive system provides a comprehensive toolkit for managing your entire employee lifecycle.',
        useCases: ['Employee Information Management', 'Payroll and Compensation', 'Leave and Attendance Tracking', 'Performance Reviews', 'Recruitment and Onboarding'],
        benefits: ['Increased HR efficiency', 'Reduced administrative overhead', 'Improved employee engagement', 'Data-driven decision making'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'human resources dashboard'
    },
    {
        slug: 'library-management-system',
        title: 'Library Management System',
        description: 'An efficient and easy-to-use system for managing library operations.',
        icon: Library,
        details: 'Transform your library\'s operations with our modern, user-friendly Library Management System. Designed for academic, public, and special libraries, our system digitizes and simplifies every aspect of library administration, from cataloging and circulation to member management and reporting. Provide a superior experience for your patrons and empower your staff with powerful, intuitive tools.',
        useCases: ['Book Cataloging and Tracking', 'Member Registration and Management', 'Automated Check-in/Check-out', 'Fine Management', 'Reporting and Analytics'],
        benefits: ['Simplified library operations', 'Enhanced user experience for patrons', 'Accurate tracking of books and resources', 'Easy report generation'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'library books'
    },
    {
        slug: 'learning-management-system',
        title: 'Learning Management System',
        description: 'A powerful platform for creating, delivering, and tracking online courses.',
        icon: BookOpen,
        details: 'Deliver powerful and engaging e-learning experiences with our versatile Learning Management System (LMS). Perfect for educational institutions and corporate training programs, our platform provides a complete solution for creating, managing, delivering, and tracking online learning content. Foster a culture of continuous learning and development with an intuitive and scalable LMS.',
        useCases: ['Corporate Training and Development', 'Online Academic Courses', 'Certification Programs', 'Employee Onboarding and Compliance Training'],
        benefits: ['Centralized learning resources', 'Flexible and accessible training', 'Automated tracking and reporting', 'Engaging and interactive content delivery'],
        image: 'https://placehold.co/1200x600.png',
        dataAiHint: 'online learning'
    }
]

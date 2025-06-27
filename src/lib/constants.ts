import type { LucideIcon } from 'lucide-react';
import { Code, ShoppingCart, Cloud, GitMerge } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
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
};

export const SERVICES: Service[] = [
  {
    slug: 'custom-development',
    title: 'Custom Development',
    description: 'Bespoke web and mobile applications tailored to your unique business needs.',
    icon: Code,
    details: 'Our custom development service focuses on creating high-quality, scalable, and maintainable software solutions. From initial concept to deployment and beyond, we work closely with you to build applications that drive growth and efficiency. We specialize in modern technology stacks for both web and mobile platforms.',
    useCases: ['Enterprise Resource Planning (ERP) systems', 'Customer Relationship Management (CRM) software', 'Custom mobile apps for iOS and Android', 'Internal business process automation tools'],
    benefits: ['Solutions perfectly aligned with your processes', 'Scalable architecture for future growth', 'Full ownership of the intellectual property', 'Integration with existing systems'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'software development'
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    description: 'Powerful and scalable e-commerce platforms to grow your online business.',
    icon: ShoppingCart,
    details: 'We build robust e-commerce solutions that provide seamless shopping experiences. Our platforms are feature-rich, secure, and optimized for performance. Whether you are starting a new online store or scaling an existing one, we have the expertise to deliver a solution that meets your goals.',
    useCases: ['Online retail stores (B2C)', 'Wholesale and B2B ordering platforms', 'Subscription-based services', 'Marketplace platforms'],
    benefits: ['Secure payment gateway integration', 'Mobile-responsive design', 'Advanced inventory and order management', 'Search engine optimization (SEO) friendly'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'online shopping'
  },
  {
    slug: 'cloud-consultancy',
    title: 'Cloud Consultancy',
    description: 'Expert guidance for AWS, Azure, and OCI to optimize your cloud infrastructure.',
    icon: Cloud,
    details: 'Our cloud consultancy services help you leverage the full potential of leading cloud platforms like AWS, Azure, and OCI. We provide expert advice on cloud strategy, migration, architecture, and cost optimization, ensuring your infrastructure is secure, scalable, and cost-effective.',
    useCases: ['Cloud migration and strategy planning', 'Serverless architecture design', 'Infrastructure security and compliance audits', 'Cost optimization and management'],
    benefits: ['Reduced infrastructure costs', 'Enhanced security and compliance', 'Improved scalability and performance', 'Faster time-to-market for new features'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'cloud computing'
  },
  {
    slug: 'devops-consultancy',
    title: 'DevOps Consultancy',
    description: 'Streamline your development and operations for faster, more reliable releases.',
    icon: GitMerge,
    details: 'We help you adopt DevOps culture and practices to improve collaboration and automate your software delivery pipeline. Our services include CI/CD implementation, infrastructure as code, and containerization, enabling you to deliver value to your customers faster and more reliably.',
    useCases: ['Continuous Integration/Continuous Delivery (CI/CD) pipelines', 'Infrastructure as Code (IaC) with Terraform or CloudFormation', 'Containerization with Docker and Kubernetes', 'Automated testing and quality assurance'],
    benefits: ['Accelerated development cycles', 'Increased deployment frequency and reliability', 'Improved collaboration between teams', 'Enhanced application quality and stability'],
    image: 'https://placehold.co/1200x600.png',
    dataAiHint: 'coding collaboration'
  },
];

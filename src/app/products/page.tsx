import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/constants';
import { ArrowRight, Zap, ShieldCheck, Rocket } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our suite of ready-to-deploy software products including HRMS, Library Management, and Learning Management Systems.',
};

const advantages = [
    {
        icon: Rocket,
        title: 'Accelerated Deployment',
        description: 'Launch faster with our ready-to-deploy solutions, significantly reducing time-to-market compared to custom builds.'
    },
    {
        icon: Zap,
        title: 'Industry-Best Practices',
        description: 'Each product is built on a foundation of deep domain expertise and industry-best practices for peak performance.'
    },
    {
        icon: ShieldCheck,
        title: 'Robust & Secure',
        description: 'Benefit from enterprise-grade security and reliability, ensuring your data is safe and operations are smooth.'
    }
]

export default function ProductsPage() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Software <span className="gradient-text">Products</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our suite of powerful, ready-to-deploy software products. Each solution is meticulously crafted to solve complex business challenges, streamline operations, and drive productivity from day one.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {PRODUCTS.map((product) => (
            <div key={product.slug} className="gradient-border-card flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-secondary rounded-full">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl text-foreground">{product.title}</h2>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 flex-grow mt-2">{product.details.substring(0, 150)}...</p>
              <Button asChild className="self-start">
                <Link href={`/products/${product.slug}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

       <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
              <Image
                src="https://placehold.co/600x500.png"
                alt="Advantage Illustration"
                width={600}
                height={500}
                data-ai-hint="business advantage growth"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                The Siddas <span className="gradient-text">Advantage</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choosing our pre-built products means investing in a solution that is fast, reliable, and backed by expert support.
              </p>
              <div className="mt-8 space-y-6">
                {advantages.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                      <div className="p-3 bg-secondary rounded-full mt-1">
                          <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our suite of ready-to-deploy software products including HRMS, Library Management, and Learning Management Systems.',
};

export default function ProductsPage() {
  return (
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
  );
}

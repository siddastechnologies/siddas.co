import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our suite of software products including HRMS, Library Management, and Learning Management Systems.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our suite of powerful, ready-to-deploy software products. Each solution is crafted to solve complex business challenges, streamline operations, and boost productivity from day one.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {PRODUCTS.map((product) => (
          <Card key={product.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="flex-row items-center gap-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <product.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                <CardDescription className="mt-1">{product.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
               <p className="text-muted-foreground mb-6">{product.details.substring(0, 150)}...</p>
              <Button asChild className="self-start">
                <Link href={`/products/${product.slug}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

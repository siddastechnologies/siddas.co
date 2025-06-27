import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive suite of technology services including custom development, e-commerce, cloud, and DevOps solutions.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Core <span className="gradient-text">Services</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We provide a full spectrum of technology services engineered to empower your business for the digital-first era. Discover how our expertise can transform your vision into reality and fuel sustainable growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.title} className="gradient-border-card flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-full">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-bold text-xl text-foreground">{service.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
            <Button asChild variant="link" className="self-start p-0 h-auto">
              <Link href={service.href} target={service.external ? '_blank' : '_self'}>
                {service.external ? 'Visit Site' : 'View Details'} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

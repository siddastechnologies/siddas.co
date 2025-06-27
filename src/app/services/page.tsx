import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the custom development, e-commerce, cloud, and DevOps services offered by Siddas Technologies.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We deliver a comprehensive suite of technology services designed to empower your business for the digital age. Explore how our expertise can translate your vision into reality and drive sustainable growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((service) => (
          <Card key={service.title} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="flex-row items-center gap-4 p-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                <CardDescription className="mt-1">{service.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
               <p className="text-muted-foreground mb-6">{service.details ? `${service.details.substring(0, 150)}...` : 'Click to learn more about our specialized security services.'}</p>
              <Button asChild className="self-start">
                <Link href={service.href} target={service.external ? '_blank' : '_self'}>
                  {service.external ? 'Visit Site' : 'View Details'} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight, GanttChart, Handshake, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive suite of technology services including custom development, e-commerce, cloud, and DevOps solutions.',
};

const engagementModels = [
    {
        icon: GanttChart,
        title: 'Project-Based',
        description: 'Ideal for well-defined projects with clear scopes. We deliver the full project from start to finish for a fixed price.'
    },
    {
        icon: Handshake,
        title: 'Dedicated Team',
        description: 'An extension of your own team. We provide dedicated experts who work exclusively on your projects for a monthly retainer.'
    },
    {
        icon: ShieldCheck,
        title: 'Support & Maintenance',
        description: 'Ensure your applications run smoothly with our ongoing support, security monitoring, and feature enhancement packages.'
    }
]

export default function ServicesPage() {
  return (
    <>
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
            <div key={service.slug} className="gradient-border-card flex flex-col">
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

       <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Engagement <span className="gradient-text">Models</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer flexible engagement models designed to fit your specific project needs, budget, and long-term goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div key={model.title} className="text-center p-8 border border-border rounded-lg shadow-lg">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <model.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{model.title}</h3>
                <p className="mt-2 text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

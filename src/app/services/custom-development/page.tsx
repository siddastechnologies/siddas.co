import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Development',
  description: 'Bespoke web and mobile applications tailored to your unique business needs at Siddas Technologies.',
};

export default function CustomDevelopmentPage() {
  const service = SERVICES.find((s) => s.slug === 'custom-development');

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{service.details}</p>
            </div>
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                data-ai-hint={service.dataAiHint}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Approach & <span className="gradient-text">Value</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="gradient-border-card">
                    <h3 className="font-bold text-2xl mb-4">Key Use Cases</h3>
                    <ul className="space-y-3">
                      {service.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                <div className="gradient-border-card">
                    <h3 className="font-bold text-2xl mb-4">Core Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-primary to-accent rounded-lg p-12 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Let's talk about how our custom development expertise can help you achieve your most ambitious goals. Reach out today for a consultation.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

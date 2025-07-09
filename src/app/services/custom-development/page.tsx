import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, Search, PenTool, Code, Rocket, MonitorSmartphone, Smartphone, ShoppingCart } from 'lucide-react';
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

  const focusAreas = [
    {
      icon: MonitorSmartphone,
      title: 'Web Application Development',
      description: 'We build scalable, secure, and feature-rich web applications, from complex enterprise platforms to dynamic single-page applications, tailored to your business processes.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'We create beautiful and performant native and cross-platform mobile apps for iOS and Android that deliver intuitive user experiences and drive engagement.'
    },
    {
      icon: ShoppingCart,
      title: 'Custom E-Commerce Solutions',
      description: 'We build unique transactional experiences by integrating bespoke e-commerce functionality into larger custom platforms, going beyond standard storefronts.'
    }
  ]

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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Custom Development <span className="gradient-text">Focus Areas</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We specialize in creating tailored solutions across several key domains to meet your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
               <div key={area.title} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                <p className="mt-2 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We follow a structured, four-phase process to ensure your project is delivered on time, on budget, and to the highest quality standards.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.title} className="text-center">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4 ring-2 ring-primary/20">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Technology <span className="gradient-text">Spotlight</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage a modern, robust technology stack to build scalable, secure, and high-performance solutions.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {service.tech.map((tech) => (
                <div key={tech} className="bg-secondary text-secondary-foreground font-medium py-2 px-4 rounded-lg shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Explore Our Other <span className="gradient-text">Services</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Discover the full range of our expertise designed to help you succeed.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.filter(s => s.slug !== service.slug && !s.external).map((otherService) => (
                    <Link
                      key={otherService.slug}
                      href={otherService.href}
                      className="group gradient-border-card text-center flex flex-col no-underline text-current"
                    >
                        <div className="flex-grow flex flex-col items-center">
                            <div className="p-4 bg-secondary rounded-full">
                                <otherService.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold font-headline">{otherService.title}</h3>
                            <p className="mt-2 text-muted-foreground flex-grow">{otherService.description}</p>
                        </div>
                        <div className="mt-4 text-primary font-medium flex items-center justify-center group-hover:underline">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

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

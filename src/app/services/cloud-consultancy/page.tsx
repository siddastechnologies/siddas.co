import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Consultancy',
  description: 'Expert guidance for AWS, Azure, and OCI to optimize your cloud infrastructure with Siddas Technologies.',
};

export default function CloudConsultancyPage() {
  const service = SERVICES.find((s) => s.slug === 'cloud-consultancy');

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="bg-card">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{service.details}</p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                data-ai-hint={service.dataAiHint}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Key Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <section className="w-full py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-headline font-bold text-primary">Ready to Discuss Your Project?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's talk about how our expertise can help you achieve your goals. Reach out today for a consultation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

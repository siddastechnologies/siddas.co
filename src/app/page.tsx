import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
              Innovative Tech Solutions for a Digital World
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              At Siddas Technologies, we build custom software, e-commerce platforms, and cloud solutions that drive growth and efficiency for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a comprehensive suite of technology services to meet your business needs.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Card key={service.slug} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                   <Button asChild variant="link" className="mt-4 text-primary">
                      <Link href={`/services/${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

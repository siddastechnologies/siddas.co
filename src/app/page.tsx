import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES, PRODUCTS, DIFFERENTIATORS, TECH_STACK } from '@/lib/constants';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                <span className="block">Empowering Your</span>
                <span className="block gradient-text mt-2">Digital Transformation</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto md:mx-0">
                We are a full-cycle software development partner, engineering high-impact digital products and solutions that accelerate innovation and drive tangible business growth. Your vision, our technology.
              </p>
              <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Our Expertise</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="https://placehold.co/700x500.png"
                alt="Digital Transformation"
                width={700}
                height={500}
                data-ai-hint="digital abstract technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Core <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From bespoke software to cloud-native architectures, our services are designed to address your most critical technology challenges and unlock new opportunities for growth.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.slug} className="gradient-border-card text-center flex flex-col">
                <div className="flex-grow flex flex-col items-center">
                    <div className="p-4 bg-secondary rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold font-headline">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{service.description}</p>
                </div>
                <Button asChild variant="link" className="mt-4">
                  <Link href={service.href} target={service.external ? '_blank' : '_self'}>
                    {service.external ? 'Visit Site' : 'View Details'} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Accelerate your operations with our suite of ready-to-deploy, robust software solutions, crafted for excellence and efficiency.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.slug} className="gradient-border-card text-center flex flex-col">
                <div className="flex-grow flex flex-col items-center">
                    <div className="p-4 bg-secondary rounded-full">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold font-headline">{product.title}</h3>
                    <p className="mt-2 text-muted-foreground flex-grow">{product.description}</p>
                </div>
                 <Button asChild variant="link" className="mt-4">
                    <Link href={`/products/${product.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/products">View All Products</Link>
                </Button>
            </div>
        </div>
      </section>
      
      <section className="w-full py-20 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Why Partner With <span className="gradient-text">Siddas Technologies?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're not just a vendor; we are your strategic technology partner. Our approach is built on a foundation of collaboration, expertise, and a relentless commitment to your success.
              </p>
              <div className="mt-8 space-y-6">
                {DIFFERENTIATORS.map((item) => (
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
            <div>
              <Image
                src="https://placehold.co/600x600.png"
                alt="Team Collaboration"
                width={600}
                height={600}
                data-ai-hint="teamwork collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Our Tech <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage a modern, robust technology stack to build scalable, secure, and high-performance solutions that stand the test of time.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {TECH_STACK.map((tech) => (
                <div key={tech} className="bg-secondary text-secondary-foreground font-medium py-2 px-4 rounded-lg shadow-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-primary to-accent rounded-lg p-12 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">
              Ready to Build the Future?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Let's turn your ideas into reality. Reach out to our team of experts to discuss your project and discover how we can help you achieve your goals.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

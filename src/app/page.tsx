import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SERVICES, PRODUCTS } from '@/lib/constants';
import { ArrowRight, Award, Briefcase, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const differentiators = [
    {
        icon: Briefcase,
        title: 'Domain Expertise',
        description: 'Deep industry knowledge allows us to build solutions that solve real-world business problems effectively.'
    },
    {
        icon: Award,
        title: 'Proven Track Record',
        description: 'We have a history of successful projects and satisfied clients across various industries.'
    },
    {
        icon: Lightbulb,
        title: 'Innovative Approach',
        description: 'We stay at the forefront of technology to deliver cutting-edge solutions that give you a competitive edge.'
    }
];

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
              At Siddas Technologies, we build custom software, e-commerce platforms, and cloud solutions that drive growth and efficiency for your business. We turn your vision into reality with technology that performs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a Demo</Link>
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
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter(s => !s.external).slice(0, 3).map((service) => (
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
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/services">View All Services</Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Our Products</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful, off-the-shelf solutions to streamline your business operations.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Card key={product.slug} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <product.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                   <Button asChild variant="link" className="mt-4 text-primary">
                      <Link href={`/products/${product.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Why Choose Siddas Technologies?</h2>
                <p className="mt-4 text-lg text-muted-foreground">We are more than just a vendor; we are your technology partner. Our commitment to excellence and client success sets us apart.</p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
                {differentiators.map((item) => (
                    <div key={item.title} className="text-center">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <item.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-headline font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-12 shadow-inner">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are here to help you navigate the complexities of technology and turn your ideas into powerful solutions. Let's build the future together.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

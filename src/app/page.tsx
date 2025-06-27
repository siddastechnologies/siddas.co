import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SERVICES, PRODUCTS } from '@/lib/constants';
import { ArrowRight, Star, ThumbsUp, Heart, Award, Briefcase, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, TechCorp',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'Siddas Technologies transformed our digital presence. Their custom solution streamlined our operations and boosted our efficiency by 40%. A truly dedicated and expert team!',
  },
  {
    name: 'Jane Smith',
    title: 'COO, Innovate LLC',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'The e-commerce platform they built for us is robust, scalable, and user-friendly. Our online sales have doubled since launch. We couldn\'t be happier with the results.',
  },
  {
    name: 'Samuel Green',
    title: 'CTO, FutureGadgets',
    avatar: 'https://placehold.co/100x100.png',
    testimonial: 'Their cloud consultancy was a game-changer. They helped us optimize our AWS infrastructure, resulting in significant cost savings and improved performance. Highly recommended!',
  },
];

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
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">What Our Clients Say</h2>
             <p className="mt-4 text-lg text-muted-foreground">
              We are proud to have partnered with amazing businesses. Here's what they think about our work.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">"{testimonial.testimonial}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait"/>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Handshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the mission, vision, and values that drive Siddas Technologies to deliver excellence in technology.',
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To engineer transformative technology solutions that empower businesses to achieve measurable growth, efficiency, and innovation. We are architects of digital success, dedicated to delivering excellence and forging lasting partnerships.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the most trusted and innovative technology partner for businesses seeking to lead their industries. We envision a future where our solutions power seamless digital experiences that drive global progress.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    description: 'Integrity, partnership, and a passion for solving complex problems are the cornerstones of our work. We cultivate a culture of collaboration and continuous learning to not only meet but exceed client expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
                About <span className="gradient-text">Siddas Technologies</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                At Siddas Technologies, we believe technology should be the ultimate enabler of ambition. We are more than just a software company; we are your dedicated technology partner, committed to understanding your unique vision and translating it into powerful, elegant, and scalable digital solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our journey started with a simple yet powerful idea: to build technology with purpose and to forge lasting partnerships founded on trust, transparency, and mutual success.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Siddas Technologies Team in a meeting"
                width={600}
                height={400}
                data-ai-hint="team meeting collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Mission, Vision, and <span className="gradient-text">Values</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles are the compass that guides every decision we make and every solution we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="gradient-border-card text-center">
                <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-primary to-accent rounded-lg p-12 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Let's build the future together. Contact us today to discuss how we can turn your ideas into powerful, market-leading solutions.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us
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

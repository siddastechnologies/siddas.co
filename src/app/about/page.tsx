import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and values of Siddas Technologies.',
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with transformative technology solutions that drive measurable growth, efficiency, and innovation. We are architects of digital success, committed to delivering excellence and building lasting partnerships.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the most trusted technology partner for businesses seeking to innovate and lead in their industries. We envision a future where our solutions power seamless digital experiences and drive progress.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    description: 'Integrity, partnership, and a passion for problem-solving are the cornerstones of our work. We foster a culture of collaboration and continuous learning to ensure we not only meet but exceed our clients\' expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-card">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-headline font-bold text-primary sm:text-5xl">About Siddas Technologies</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                At Siddas Technologies, we believe technology should be an enabler of ambition. We are more than just a software company; we are your dedicated technology partner, committed to understanding your vision and translating it into powerful, elegant, and scalable digital solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our journey began with a simple idea: to build technology with a purpose and to forge lasting partnerships built on trust, transparency, and shared success.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Siddas Technologies Team"
                width={600}
                height={400}
                data-ai-hint="team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">Mission, Vision, and Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our principles guide every decision we make and every solution we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold text-primary">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

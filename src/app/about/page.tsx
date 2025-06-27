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
    description: 'To empower businesses with transformative technology solutions, driving growth, efficiency, and innovation. We are committed to delivering excellence and building long-lasting partnerships with our clients.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be a leading technology partner recognized for our expertise, creativity, and dedication to client success. We aim to shape the future of digital experiences through cutting-edge software and strategic consultancy.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    description: 'We believe in integrity, collaboration, and continuous learning. Our team is passionate about technology and dedicated to delivering the highest quality of work, ensuring our clients achieve their business objectives.',
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
                We are a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive in the digital age. Founded on the principle of innovation and client-centricity, Siddas Technologies has been delivering exceptional software solutions since our inception.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our expertise spans across custom application development, e-commerce, cloud computing, and DevOps, allowing us to provide comprehensive solutions that address complex business challenges.
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

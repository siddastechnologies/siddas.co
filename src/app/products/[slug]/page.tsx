import Image from 'next/image';
import type { Metadata, ResolvingMetadata } from 'next';
import { ArrowRight, CheckCircle, GalleryThumbnails, Target } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.details}</p>
            </div>
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
                data-ai-hint={product.dataAiHint}
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
                  Features & <span className="gradient-text">Benefits</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="gradient-border-card">
                    <h3 className="font-bold text-2xl mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.useCases.map((useCase) => (
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
                      {product.benefits.map((benefit) => (
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Who Is <span className="gradient-text">{product.title}</span> For?
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                This solution is designed for organizations seeking to streamline operations and enhance user experiences for:
              </p>
              <ul className="mt-6 space-y-4">
                  {product.whoIsFor.map((target) => (
                      <li key={target.title} className="flex items-center gap-4">
                          <div className="p-3 bg-secondary rounded-full">
                              <target.icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-lg font-medium">{target.title}</span>
                      </li>
                  ))}
              </ul>
            </div>
            <div className="flex justify-center">
                 <Image src="/target-audience.png" width={600} height={500} alt="Target Audience" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      
      {product.gallery.length > 0 && (
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Product <span className="gradient-text">Gallery</span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                      A glimpse into the user-friendly interface of {product.title}.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.gallery.map((image, index) => (
                      <Image 
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        data-ai-hint={image.dataAiHint}
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                      />
                  ))}
              </div>
          </div>
      </section>
      )}

      <section className="py-16 md:py-24 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Explore Our Other <span className="gradient-text">Products</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Discover our full suite of software solutions.
                </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                {PRODUCTS.filter(p => p.slug !== product.slug).map((otherProduct) => (
                    <div key={otherProduct.slug} className="gradient-border-card text-center flex flex-col">
                        <div className="flex-grow flex flex-col items-center">
                            <div className="p-4 bg-secondary rounded-full">
                                <otherProduct.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold font-headline">{otherProduct.title}</h3>
                            <p className="mt-2 text-muted-foreground flex-grow">{otherProduct.description}</p>
                        </div>
                        <Button asChild variant="link" className="mt-4">
                            <Link href={`/products/${otherProduct.slug}`}>
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-primary to-accent rounded-lg p-12 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary-foreground">
              Interested in a Live Demo?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              See our {product.title} in action. Schedule a personalized demo with our product specialists today and discover how it can transform your operations.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Schedule a Demo
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

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

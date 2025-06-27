import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { NAV_LINKS, SERVICES, PRODUCTS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-4">
              <Mountain className="h-6 w-6" />
              <span className="font-headline">Siddas Technologies</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Building Digital Futures: Your Vision, Engineered. We are your dedicated technology partner, committed to delivering excellence and building lasting relationships.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 font-headline">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 font-headline">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} target={service.external ? '_blank' : '_self'} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-4 font-headline">Products</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t mt-12 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Siddas Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

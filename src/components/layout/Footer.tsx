import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { NAV_LINKS, SERVICES, PRODUCTS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground mb-4">
              <Mountain className="h-7 w-7 gradient-text" />
              <span className="font-headline">Siddas Technologies</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Engineering high-impact digital products and solutions that accelerate innovation and drive tangible business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 font-headline tracking-wider">Company</h4>
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
            <h4 className="font-semibold text-foreground mb-4 font-headline tracking-wider">Services</h4>
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
            <h4 className="font-semibold text-foreground mb-4 font-headline tracking-wider">Products</h4>
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

        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Siddas Technologies. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

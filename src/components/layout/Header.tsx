'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Mountain, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS, SERVICES, PRODUCTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const NavLink = ({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground',
        className
      )}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderDesktopNav = () => (
    <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
      <NavLink href="/" label="Home" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn('transition-colors hover:text-primary px-3', (pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'))}>
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/services">All Services</Link>
          </DropdownMenuItem>
          {SERVICES.map((service) => (
            <DropdownMenuItem key={service.title} asChild>
              <Link href={service.href} target={service.external ? '_blank' : '_self'}>
                {service.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn('transition-colors hover:text-primary px-3', (pathname.startsWith('/products') ? 'text-primary' : 'text-muted-foreground'))}>
            Products <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
           <DropdownMenuItem asChild>
            <Link href="/products">All Products</Link>
          </DropdownMenuItem>
          {PRODUCTS.map((product) => (
            <DropdownMenuItem key={product.title} asChild>
              <Link href={`/products/${product.slug}`}>{product.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <NavLink href="/about" label="About Us" />
      <NavLink href="/contact" label="Contact" />
    </nav>
  );

  const renderMobileNav = () => (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-6 p-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              <Mountain className="h-6 w-6 text-primary" />
              <span className="font-headline">Siddas Technologies</span>
            </Link>
            <nav className="grid gap-2">
              <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} className="text-lg"/>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className={cn("text-lg font-medium hover:no-underline transition-colors hover:text-primary py-2", (pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'))}>Services</AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <div className="flex flex-col gap-2">
                      <NavLink href="/services" label="All Services" onClick={() => setIsOpen(false)} className="text-base" />
                      {SERVICES.map(s => <Link key={s.title} href={s.href} target={s.external ? '_blank' : '_self'} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-primary text-base py-1">{s.title}</Link>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="products" className="border-b-0">
                   <AccordionTrigger className={cn("text-lg font-medium hover:no-underline transition-colors hover:text-primary py-2", (pathname.startsWith('/products') ? 'text-primary' : 'text-muted-foreground'))}>Products</AccordionTrigger>
                  <AccordionContent className="pl-4">
                     <div className="flex flex-col gap-2">
                       <NavLink href="/products" label="All Products" onClick={() => setIsOpen(false)} className="text-base" />
                      {PRODUCTS.map(p => <NavLink key={p.title} href={`/products/${p.slug}`} label={p.title} onClick={() => setIsOpen(false)} className="text-base" />)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <NavLink href="/about" label="About Us" onClick={() => setIsOpen(false)} className="text-lg"/>
              <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} className="text-lg"/>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Mountain className="h-6 w-6" />
          <span className="font-headline">Siddas Technologies</span>
        </Link>
        {renderDesktopNav()}
        {renderMobileNav()}
      </div>
    </header>
  );
}

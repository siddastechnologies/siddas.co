
'use client';

import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Mountain, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS, SERVICES, PRODUCTS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
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
        'transition-colors hover:text-primary font-medium',
        isActive ? 'text-primary' : 'text-foreground/80',
        className
      )}
    >
      {label}
    </Link>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderDesktopNav = () => (
    <nav className="hidden md:flex items-center gap-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-base', pathname === '/' ? 'text-primary' : 'text-foreground/80' )}>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn('bg-transparent text-base', pathname.startsWith('/services') ? 'text-primary' : 'text-foreground/80')}>
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {SERVICES.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    target={service.external ? '_blank' : '_self'}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn('bg-transparent text-base', pathname.startsWith('/products') ? 'text-primary' : 'text-foreground/80')}>
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {PRODUCTS.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={`/products/${product.slug}`}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about" className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-base', pathname === '/about' ? 'text-primary' : 'text-foreground/80' )}>
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-base', pathname === '/contact' ? 'text-primary' : 'text-foreground/80')}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );

  const renderMobileNav = () => (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                <Mountain className="h-6 w-6 gradient-text" />
                <span className="font-headline">Siddas Technologies</span>
              </Link>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </div>
            <nav className="flex-grow p-4">
              <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} className="block text-lg py-2"/>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className={cn("text-lg font-medium hover:no-underline transition-colors hover:text-primary py-2", (pathname.startsWith('/services') ? 'text-primary' : 'text-foreground/80'))}>Services</AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <div className="flex flex-col gap-2 mt-2">
                      <NavLink href="/services" label="All Services" onClick={() => setIsOpen(false)} className="block text-base py-1" />
                      {SERVICES.map(s => <Link key={s.title} href={s.href} target={s.external ? '_blank' : '_self'} onClick={() => setIsOpen(false)} className="block text-foreground/70 hover:text-primary text-base py-1">{s.title}</Link>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="products" className="border-b-0">
                   <AccordionTrigger className={cn("text-lg font-medium hover:no-underline transition-colors hover:text-primary py-2", (pathname.startsWith('/products') ? 'text-primary' : 'text-foreground/80'))}>Products</AccordionTrigger>
                  <AccordionContent className="pl-4">
                     <div className="flex flex-col gap-2 mt-2">
                       <NavLink href="/products" label="All Products" onClick={() => setIsOpen(false)} className="block text-base py-1" />
                      {PRODUCTS.map(p => <Link key={p.title} href={`/products/${p.slug}`} onClick={() => setIsOpen(false)} className="block text-foreground/70 hover:text-primary text-base py-1">{p.title}</Link>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <NavLink href="/about" label="About Us" onClick={() => setIsOpen(false)} className="block text-lg py-2"/>
              <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} className="block text-lg py-2"/>
            </nav>
            <div className="p-4 border-t">
               <Button asChild size="lg" className="w-full">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Mountain className="h-7 w-7 gradient-text" />
          <span className="font-headline">Siddas Technologies</span>
        </Link>
        {renderDesktopNav()}
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
        {renderMobileNav()}
      </div>
    </header>
  );
}

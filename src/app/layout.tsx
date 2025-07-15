import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://siddas.co'),
  title: {
    default: 'Siddas Technologies - Custom Software, Cloud, & E-Commerce',
    template: '%s | Siddas Technologies',
  },
  description: 'Siddas Technologies delivers high-impact digital products. We are a full-cycle software development partner specializing in custom applications, e-commerce platforms, and cloud consultancy.',
  keywords: ['custom software development', 'next.js development', 'cloud consultancy', 'devops services', 'e-commerce solutions', 'siddas technologies'],
  openGraph: {
    title: 'Siddas Technologies - Custom Software, Cloud, & E-Commerce',
    description: 'Your partner in digital transformation. We build powerful, scalable software solutions.',
    url: 'https://siddas.co',
    siteName: 'Siddas Technologies',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

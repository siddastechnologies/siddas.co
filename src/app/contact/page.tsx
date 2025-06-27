import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siddas Technologies for inquiries about our services or to start a new project.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-headline font-semibold text-primary">Contact Information</h2>
            <p className="text-muted-foreground">
              You can also reach us through the following channels. We look forward to connecting with you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:contact@siddastech.com" className="hover:text-primary">
                  contact@siddastech.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <a href="tel:+1234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <span>
                  123 Tech Street, Innovation City, 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

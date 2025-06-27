import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siddas Technologies for inquiries, project discussions, or to start a new venture.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're excited to hear about your project. Whether you have a detailed inquiry or just want to explore possibilities, our team is ready to assist. Fill out the form below, and we'll get back to you promptly.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <Card className="bg-card border-border/60">
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
            <h2 className="text-2xl font-headline font-semibold text-foreground">Contact Information</h2>
            <p className="text-muted-foreground">
              You can also reach us through the following channels. We look forward to connecting with you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@siddastech.com" className="hover:text-primary transition-colors">
                  contact@siddastech.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
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

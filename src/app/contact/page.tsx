import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquareQuestion, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siddas Technologies for inquiries, project discussions, or to start a new venture.',
};

const faqs = [
  {
    question: 'What is the typical process for starting a new project?',
    answer: 'Our process begins with a discovery call to understand your vision, goals, and requirements. From there, we move to project planning, design, development, and deployment, with continuous communication throughout.'
  },
  {
    question: 'How long does it take to get a project quote?',
    answer: 'After our initial discussion to gather requirements, we typically provide a detailed project proposal and quote within 3-5 business days.'
  },
  {
    question: 'Do you offer support and maintenance after a project is launched?',
    answer: 'Yes, we offer a range of support and maintenance packages to ensure your application remains secure, updated, and performs optimally post-launch. We believe in long-term partnerships.'
  },
  {
    question: 'What kind of technologies do you specialize in?',
    answer: 'We specialize in modern, robust technologies including Next.js, React, Node.js, Python, and major cloud platforms like AWS, Azure, and OCI. We select the best stack for your specific needs.'
  }
];


export default function ContactPage() {
  return (
    <>
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
                 <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Business Hours:</strong><br/>
                    Monday - Friday: 9am - 6pm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-20 md:py-24 bg-card">
         <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find quick answers to common questions about our process and services.
            </p>
          </div>
           <div className="max-w-3xl mx-auto">
             <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
           </div>
         </div>
      </section>
    </>
  );
}

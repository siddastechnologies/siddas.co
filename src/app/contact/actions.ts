'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { SERVICES, PRODUCTS } from '@/lib/constants';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  interest: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export type FormState = {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof ContactFormValues, string>>;
};

function getInterestLabel(interestSlug?: string): string {
  if (!interestSlug || interestSlug === 'general') {
    return 'General Inquiry';
  }
  const allItems = [
    ...SERVICES.map(s => ({ value: s.slug, label: `Service: ${s.title}` })),
    ...PRODUCTS.map(p => ({ value: p.slug, label: `Product: ${p.title}` }))
  ];
  const found = allItems.find(item => item.value === interestSlug);
  return found ? found.label : 'Not specified';
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of validatedFields.error.issues) {
      const path = issue.path[0] as keyof ContactFormValues;
      if (!fieldErrors[path]) {
        fieldErrors[path] = issue.message;
      }
    }
    return {
      message: 'Please correct the errors and try again.',
      success: false,
      errors: fieldErrors,
    };
  }

  try {
    // Initialize Resend inside the function for serverless environments
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, subject, interest, message } = validatedFields.data;
    const interestLabel = getInterestLabel(interest);
    
    await resend.emails.send({
      from: 'Siddas Contact Form <info@siddas.co>',
      to: 'support@siddas.co',
      subject: `[Contact Form] ${subject}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, subject, interest: interestLabel, message }),
    });

    return {
      message: 'Thank you for your message! We will get back to you soon.',
      success: true,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      message: 'Sorry, we encountered an error while sending your message. Please try again later.',
      success: false,
    };
  }
}

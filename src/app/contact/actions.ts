'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export type FormState = {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof ContactFormValues, string>>;
};

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

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Siddas Contact Form <onboarding@resend.dev>',
      to: 'support@siddas.co',
      subject: `New message from ${name} via contact form`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
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

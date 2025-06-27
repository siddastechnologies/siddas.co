'use server';

import { z } from 'zod';

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

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In a real application, you would send an email or save to a database here.
  console.log('Form submitted successfully:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    success: true,
  };
}

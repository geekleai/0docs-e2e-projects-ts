import { z } from 'zod';

export const ContactSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    address: z.string().optional(),
    customerId: z.number().int().optional(),
    leadId: z.number().int().optional(),
});

export type Contact = z.infer<typeof ContactSchema>;

// Add this for updating existing contacts
export const UpdateContactSchema = ContactSchema.partial().required({ id: true });
export type UpdateContact = z.infer<typeof UpdateContactSchema>;

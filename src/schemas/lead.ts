import { z } from 'zod';

export const LeadSchema = z.object({
    id: z.number().int().optional(),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    phone: z.string().optional(),
    status: z.string().min(1, "Status is required"),
    source: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});

export type Lead = z.infer<typeof LeadSchema>;
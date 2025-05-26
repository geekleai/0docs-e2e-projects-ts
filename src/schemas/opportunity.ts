import { z } from 'zod';

export const OpportunitySchema = z.object({
    id: z.number().int().positive(),
    title: z.string().nonempty(),
    description: z.string().optional(),
    value: z.number().positive(),
    status: z.enum(['lead', 'qualified', 'proposal', 'negotiation', 'closed-won', 'closed-lost']),
    customerId: z.number().int().positive(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
});

export type Opportunity = z.infer<typeof OpportunitySchema>;

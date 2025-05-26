import { z } from 'zod';

export const CustomerSchema = z.object({
        id: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    phone: z.string().optional(),
    address: z.string().optional()
});

export type Customer = z.infer<typeof CustomerSchema>;

// Add this for updating existing contacts
export const UpdateCustomerSchema = CustomerSchema.partial().required({ id: true });
export type UpdateCustomer = z.infer<typeof UpdateCustomerSchema>;

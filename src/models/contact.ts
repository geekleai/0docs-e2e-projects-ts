export interface Contact {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    customerId?: number; // Reference to the associated customer
    leadId?: number; // Reference to the associated lead
}
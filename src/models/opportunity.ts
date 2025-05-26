export interface Opportunity {
    id: string;
    title: string;
    description?: string;
    value: number;
    status: string;
    customerId: number;
    createdAt: Date;
    updatedAt: Date;
}
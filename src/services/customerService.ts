import { Customer, UpdateCustomer } from '../schemas/customer';

export class CustomerService {
    private customersDb: Map<string, Customer> = new Map();
    private currentId: number = 1;

    public getAllCustomers(): Customer[] {
        return Array.from(this.customersDb.values());
    }

    public getCustomer(customerId: string): Customer | undefined {
        return this.customersDb.get(customerId);
    }

    public createCustomer(customer: Omit<Customer, 'id'>): Customer {
        const newCustomer: Customer = { id: String(this.currentId++), ...customer };
        this.customersDb.set(newCustomer.id!, newCustomer);
        return newCustomer;
    }

    public updateCustomer(customerId: string, customerData: Partial<Omit<Customer, 'id'>>): Customer | undefined {
        const existingCustomer = this.customersDb.get(customerId);
        if (!existingCustomer) {
            return undefined;
        }
        const updatedCustomer = { ...existingCustomer, ...customerData };
        this.customersDb.set(customerId, updatedCustomer);
        return updatedCustomer;
    }

    public deleteCustomer(customerId: string): boolean {
        return this.customersDb.delete(customerId);
    }
}
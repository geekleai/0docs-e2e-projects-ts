import { Customer as Model } from '../models/customer';
import { Customer } from '../schemas/customer';

export class CustomerService {
    private customersDb: Map<number, Customer> = new Map();
    private currentId: number = 1;

    public getAllCustomers(): Customer[] {
        return Array.from(this.customersDb.values());
    }

    public getCustomer(customerId: number): Customer | undefined {
        return this.customersDb.get(customerId);
    }

    public createCustomer(customer: Omit<Customer, 'id'>): Customer {
        const newCustomer: Model = { id: this.currentId++, ...customer } as Model;
        this.customersDb.set(newCustomer.id, newCustomer);
        return newCustomer;
    }

    public updateCustomer(customerId: number, customerData: Partial<Omit<Customer, 'id'>>): Customer | undefined {
        const existingCustomer = this.customersDb.get(customerId);
        if (!existingCustomer) {
            return undefined;
        }
        const updatedCustomer = { ...existingCustomer, ...customerData };
        this.customersDb.set(customerId, updatedCustomer);
        return updatedCustomer;
    }

    public deleteCustomer(customerId: number): boolean {
        return this.customersDb.delete(customerId);
    }
}
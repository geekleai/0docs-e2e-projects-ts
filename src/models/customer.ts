export class Customer {
    id: number;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, email: string, createdAt: Date, updatedAt: Date, phone?: string, address?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.phone = phone;
        this.address = address;
    }
}
import { BaseModel } from './baseModel';

export class Lead extends BaseModel {
    id: number;
    name: string;
    email: string;
    phone?: string;
    status: string;
    source?: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, email: string, status: string, createdAt: Date, updatedAt: Date, phone?: string, source?: string) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.status = status;
        this.source = source;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
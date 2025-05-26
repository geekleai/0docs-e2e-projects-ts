import { IsEmail, IsOptional, IsString, IsInt } from 'class-validator';

export class ContactSchema {
    @IsInt()
    id!: number;

    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsInt()
    customerId?: number;

    @IsOptional()
    @IsInt()
    leadId?: number;
}
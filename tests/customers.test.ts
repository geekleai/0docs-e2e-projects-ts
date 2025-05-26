import request from 'supertest';
import app from '../src/app';
import { Customer } from '../src/models/customer';

describe('Customer API', () => {
    let customerId: number;

    beforeAll(async () => {
        // Create a customer for testing
        const response = await request(app)
            .post('/customers')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                phone: '1234567890',
                address: '123 Main St'
            });
        customerId = response.body.id;
    });

    afterAll(async () => {
        // Clean up the created customer
        await request(app).delete(`/customers/${customerId}`);
    });

    it('should create a new customer', async () => {
        const response = await request(app)
            .post('/customers')
            .send({
                name: 'Jane Doe',
                email: 'jane@example.com',
                phone: '0987654321',
                address: '456 Elm St'
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Jane Doe');
    });

    it('should get a customer by ID', async () => {
        const response = await request(app).get(`/customers/${customerId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', customerId);
        expect(response.body.name).toBe('John Doe');
    });

    it('should update a customer', async () => {
        const response = await request(app)
            .put(`/customers/${customerId}`)
            .send({
                name: 'John Smith',
                email: 'johnsmith@example.com'
            });
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('John Smith');
    });

    it('should delete a customer', async () => {
        const response = await request(app).delete(`/customers/${customerId}`);
        expect(response.status).toBe(204);
    });

    it('should return 404 for a nonexistent customer', async () => {
        const response = await request(app).get(`/customers/${customerId}`);
        expect(response.status).toBe(404);
    });
});
import request from 'supertest';
import app from '../src/app';
import { Lead } from '../src/models/lead';

describe('Leads API', () => {
    let leadId: number;

    beforeAll(async () => {
        // Create a lead for testing
        const response = await request(app)
            .post('/leads')
            .send({
                name: 'Test Lead',
                email: 'testlead@example.com',
                phone: '1234567890',
                status: 'New',
            });
        leadId = response.body.id;
    });

    afterAll(async () => {
        // Clean up: delete the lead after tests
        await request(app).delete(`/leads/${leadId}`);
    });

    it('should create a new lead', async () => {
        const response = await request(app)
            .post('/leads')
            .send({
                name: 'New Lead',
                email: 'newlead@example.com',
                phone: '0987654321',
                status: 'New',
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('New Lead');
    });

    it('should get a lead by ID', async () => {
        const response = await request(app).get(`/leads/${leadId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', leadId);
        expect(response.body.name).toBe('Test Lead');
    });

    it('should update a lead', async () => {
        const response = await request(app)
            .put(`/leads/${leadId}`)
            .send({
                name: 'Updated Lead',
                email: 'updatedlead@example.com',
                phone: '1112223333',
                status: 'Contacted',
            });
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Updated Lead');
    });

    it('should delete a lead', async () => {
        const response = await request(app).delete(`/leads/${leadId}`);
        expect(response.status).toBe(204);
    });

    it('should return 404 for a nonexistent lead', async () => {
        const response = await request(app).get(`/leads/${leadId}`);
        expect(response.status).toBe(404);
    });
});
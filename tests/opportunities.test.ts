import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary
import { Opportunity } from '../src/models/opportunity';

describe('Opportunities API', () => {
    let opportunityId: number;

    beforeAll(async () => {
        // Create a test opportunity
        const response = await request(app)
            .post('/opportunities')
            .send({
                title: 'Test Opportunity',
                description: 'This is a test opportunity',
                value: 10000,
                status: 'Open',
                customerId: 1,
            });
        opportunityId = response.body.id;
    });

    afterAll(async () => {
        // Clean up the test opportunity
        await request(app).delete(`/opportunities/${opportunityId}`);
    });

    it('should create a new opportunity', async () => {
        const response = await request(app)
            .post('/opportunities')
            .send({
                title: 'New Opportunity',
                description: 'Opportunity description',
                value: 5000,
                status: 'Open',
                customerId: 1,
            });
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('New Opportunity');
    });

    it('should retrieve an opportunity by ID', async () => {
        const response = await request(app).get(`/opportunities/${opportunityId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(opportunityId);
    });

    it('should update an opportunity', async () => {
        const response = await request(app)
            .put(`/opportunities/${opportunityId}`)
            .send({
                title: 'Updated Opportunity',
                description: 'Updated description',
                value: 15000,
                status: 'Closed',
                customerId: 1,
            });
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Opportunity');
    });

    it('should delete an opportunity', async () => {
        const response = await request(app).delete(`/opportunities/${opportunityId}`);
        expect(response.status).toBe(204);
    });

    it('should return 404 for a nonexistent opportunity', async () => {
        const response = await request(app).get(`/opportunities/${opportunityId}`);
        expect(response.status).toBe(404);
    });
});
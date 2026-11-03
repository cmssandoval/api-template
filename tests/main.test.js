import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
    it('Returns main route things and status 200', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
    });
});

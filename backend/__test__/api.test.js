import request from 'supertest';
import { app } from '../index'; // Express App

describe('GET /users', () => {
    it('should return a JSON response with a list of users', async () => {
        const response = await request(app).get('/users');
 
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            { id: 1, username: 'user1' },
            { id: 2, username: 'user2' },
        ]);
        expect(response.headers['content-type']).toMatch(/json/);
    });
});
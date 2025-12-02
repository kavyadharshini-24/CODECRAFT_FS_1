import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary to import your app

describe('Authentication Tests', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register') // Adjust the endpoint as necessary
            .send({
                username: 'testuser',
                password: 'testpassword',
                email: 'testuser@example.com'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('token');
    });

    it('should log in an existing user', async () => {
        const response = await request(app)
            .post('/api/auth/login') // Adjust the endpoint as necessary
            .send({
                username: 'testuser',
                password: 'testpassword'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should not log in with incorrect credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login') // Adjust the endpoint as necessary
            .send({
                username: 'testuser',
                password: 'wrongpassword'
            });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should access a protected route with valid token', async () => {
        const loginResponse = await request(app)
            .post('/api/auth/login') // Adjust the endpoint as necessary
            .send({
                username: 'testuser',
                password: 'testpassword'
            });

        const token = loginResponse.body.token;

        const protectedResponse = await request(app)
            .get('/api/protected') // Adjust the endpoint as necessary
            .set('Authorization', `Bearer ${token}`);

        expect(protectedResponse.status).toBe(200);
        expect(protectedResponse.body).toHaveProperty('message', 'Access granted');
    });

    it('should not access a protected route without token', async () => {
        const protectedResponse = await request(app)
            .get('/api/protected') // Adjust the endpoint as necessary
            .set('Authorization', '');

        expect(protectedResponse.status).toBe(401);
        expect(protectedResponse.body).toHaveProperty('message', 'No token provided');
    });
});
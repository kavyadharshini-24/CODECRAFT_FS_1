import request from 'supertest';
import app from '../src/app'; // Adjust the path if necessary
import { User } from '../src/models/user.model'; // Adjust the path if necessary

describe('User Routes', () => {
  let userId: string;

  beforeAll(async () => {
    // Create a user for testing
    const user = await User.create({
      username: 'testuser',
      password: 'testpassword',
      email: 'testuser@example.com',
    });
    userId = user._id;
  });

  afterAll(async () => {
    // Clean up the test user
    await User.deleteOne({ _id: userId });
  });

  it('should retrieve user profile', async () => {
    const response = await request(app)
      .get(`/api/users/${userId}`)
      .set('Authorization', `Bearer <your_token_here>`); // Replace with a valid token

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username', 'testuser');
    expect(response.body).toHaveProperty('email', 'testuser@example.com');
  });

  it('should update user profile', async () => {
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .set('Authorization', `Bearer <your_token_here>`) // Replace with a valid token
      .send({
        username: 'updateduser',
        email: 'updateduser@example.com',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username', 'updateduser');
    expect(response.body).toHaveProperty('email', 'updateduser@example.com');
  });
});
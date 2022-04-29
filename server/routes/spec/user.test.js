const request = require('supertest');
const app = require('../../app');

describe('POST /users', () => {
  it('creates a new user', async () => {
    const response = await request(app).post('/users/new').send({
      username: 'test',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('test user created');
  })
})
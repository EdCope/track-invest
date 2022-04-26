const request = require('supertest');
const app = require('../../app');

describe('GET /asset/:share', () => {
  it('retrieves the current price of share AAPL', async () => {
    const response = await request(app).get('/asset/aapl')
    expect(response.statusCode).toBe(200);
    expect(response.body.price).toBeDefined();
  })

})
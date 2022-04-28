const request = require('supertest');
const app = require('../../app');

describe('GET /asset/:share', () => {
  it('retrieves the current price of share AAPL', async () => {
    const response = await request(app).get('/asset/aapl');
    expect(response.statusCode).toBe(200);
    expect(response.body.price).toBeDefined();
  })
  it('responds with an error if the asset', async () => {
    const response = await request(app).get('/asset/aaaaaaaapl');
    expect(response.body.price).toBe('Asset data not found');
  })

})
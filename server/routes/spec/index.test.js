const request = require('supertest');
const app = require('../../app.js');


describe('GET /', () => {
  it('responds with html', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('text/html; charset=utf-8')
  })
})
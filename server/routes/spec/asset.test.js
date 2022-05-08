const request = require('supertest');
const app = require('../../app');
const Asset = require('../../lib/asset/assetModel');
const User = require('../../lib/user/userModel');

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

//tracker

describe('POST /asset/new', () => {
  it('adds a tracker to a user', async () => {
    User.findOne = jest.fn().mockResolvedValue({
      _id: '62710e9962c1c9b2cf62df2e',
      username: 'test'
    })
    Asset.createTracker = jest.fn().mockResolvedValue({
      tickername: 'aapl',
      user: '62710e9962c1c9b2cf62df2e'
    })
    
    const response = await request(app).post('/asset/new').send({
      tickername: 'aapl'
    })
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('aapl tracker created');
  })
  it('responds with an error if tickername is empty', async () => {
    const response = await request(app).post('/asset/new').send({
      tickername: ''
    })
    expect(response.body.message).toBe('error');
  })
})

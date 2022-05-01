require('./mongodb_helper');
const Asset = require('../assetModel');

describe('Asset Model', () => {
  it('module exists', () => {
    expect(Asset).toBeDefined();
  })
})
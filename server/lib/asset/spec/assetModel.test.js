require('../../mongodb_helper');
const Asset = require('../assetModel');

describe('Asset Model', () => {
  beforeAll(async () => {
    await Asset.deleteMany({});
  });
  afterEach(async () => {
    await Asset.deleteMany({});
  });

  it('model exists', () => {
    expect(Asset).toBeDefined();
  });

  it('creates a tracker', async () => {
    const tracker = new Asset({
      tickername: 'test'
    });
    await tracker.save();
    const find = await Asset.findOne({ tracker: 'test'});
    expect(find.tickername).toEqual('test');
  });
})

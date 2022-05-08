require('../../mongodb_helper');
const User = require('../../user/userModel');
const Asset = require('../assetModel');

describe('Asset Model', () => {
  beforeAll(async () => {
    await Asset.deleteMany({});
    await User.deleteMany({});
  });
  afterEach(async () => {
    await Asset.deleteMany({});
    await User.deleteMany({});
  });

  it('model exists', () => {
    expect(Asset).toBeDefined();
  });

  it('creates a tracker', async () => {
    const user = new User({
      username: 'TESTUSER'  
    })
    await user.save();
  
    const tracker = new Asset({
      tickername: 'test',
      user: user.id,
    });
    await tracker.save();
    const find = await Asset.findOne({ tracker: 'test'});
    expect(find.tickername).toEqual('test');
    expect(find.user).toEqual(user._id);
  });
})

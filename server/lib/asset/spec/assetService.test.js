const Asset = require('../assetModel');

describe('AssetService', () => {
  describe('createTracker', () => {
    it('returns the created Tracker', async () => {
      const UserMock = {
        _id: '62710e9962c1c9b2cf62df2e',
        username: 'TEST'
      }

      Asset.prototype.save = jest.fn().mockImplementation(()=> {})

      const asset  = await Asset.createTracker('test', UserMock._id);
      expect(asset.tickername).toEqual('test');
    })
  })

})

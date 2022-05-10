const Asset = require('../assetModel');

describe('AssetService', () => {
  describe('createTracker', () => {
    it('returns the created Tracker', async () => {
      const UserMock = {
        _id: '62710e9962c1c9b2cf62df2e',
        username: 'TEST'
      }

      Asset.prototype.save = jest.fn().mockImplementationOnce(()=> {});

      const asset  = await Asset.createTracker('test', UserMock._id);
      expect(asset.tickername).toEqual('test');
    })
  })
  describe('addTransaction', () => {
    it('adds a transaction to a tracker', async () => {
      Asset.findOne = jest.fn().mockReturnValue({
          tickername: 'test',
          transactions: [],
          user: 'testid',
          _id: 'testid',
          save: ()=>{}
      })
      
      const asset = await Asset.addTransaction(300.99, '627945b270cdfa3da2524c23');
      expect(asset.transactions[0]).toEqual(300.99);
    })
  })

})

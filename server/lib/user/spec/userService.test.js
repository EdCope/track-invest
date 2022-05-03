const UserService = require('../userService');

describe('UserService', () => {
  describe('createUser', () => {
    it('returns the created user', async () => {
      const save = jest.fn();
      let username;
      const MockModel = function(data){
        username = data.name
        return { ...data, save }
      }
      const userService = UserService(MockModel);
      const res = await userService.createUser('testUser');
      expect(save.mock.calls.length).toEqual(1);
      expect(res.username).toEqual('testUser');
    })
  })
})
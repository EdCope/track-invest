const mongoose = require('mongoose');
const testDB = 'mongodb://localhost/track-invest_test';
mongoose.connect(testDB, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

const User = require('../userModel');

describe('User Model', () => {
  beforeAll(async () => {
    await User.deleteMany({});
  })
  afterEach(async () => {
    await User.deleteMany({});
  })
  afterAll(async () => {
    await mongoose.connection.close();
  })
  it('module exists', () => {
    expect(User).toBeDefined();
  })

  it('saves a user', async () => {
    const user = new User({
      username: 'test'
    })
    await user.save();
    const find = await User.findOne({ username: "test" });
    expect(find.username).toEqual('test');
  })
})
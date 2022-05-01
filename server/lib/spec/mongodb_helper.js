const mongoose = require('mongoose');
const testDB = 'mongodb://localhost/track-invest_test';

mongoose.connect(testDB, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

afterAll(async () => {
  await mongoose.connection.close();
})
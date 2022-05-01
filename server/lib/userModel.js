const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
})

UserSchema.statics.test = function() {
  return 'test';
};

UserSchema.statics.createUser = async function(name){
  const newUser = new this({
    username: name, 
  });
  await newUser.save();
  return newUser;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
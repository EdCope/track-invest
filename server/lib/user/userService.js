const createUser = User => async (name) =>{
  const newUser = new User({
    username: name 
  });
  await newUser.save();
  return newUser;
}

module.exports = User => {
  return {
    createUser: createUser(User)
  }
}
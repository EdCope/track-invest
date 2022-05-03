const User = require('../lib/user')

const UserController = {
  New: async (req,res) => {
    const user = await User.createUser(req.body.username);
    res.json({ message: `${user.username} user created`});
  }
}

module.exports = UserController;

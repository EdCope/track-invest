const UserController = {
  New: async (req,res) => {
    res.json({ message: `${req.body.username} user created`});
  }
}

module.exports = UserController;
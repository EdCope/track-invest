const AssetController = {
  GetPrice: async (req, res) => {
    //Needs to grab external data
    console.log(req.params);
    res.json({price: 400});
  }
}

module.exports = AssetController;
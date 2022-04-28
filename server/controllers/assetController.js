const axios = require('axios');

const AssetController = {
  GetPrice: async (req, res) => {
    const response = await axios.get(`https://api.twelvedata.com/price?symbol=${req.params.share}&apikey=demo`);
    res.json({price: response.data.price});
  }
}

module.exports = AssetController;
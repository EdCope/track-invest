const axios = require('axios');

const AssetController = {
  GetPrice: async (req, res) => {
    try{
      const response = await axios.get(`https://api.twelvedata.com/price?symbol=${req.params.share}&apikey=demo`);
      if(response.data.status === 'error'){
        throw 'Asset data not found';
      }
      res.json({price: response.data.price});
    } catch (err){
      res.json({price: err});
    }
  }
}

module.exports = AssetController;
const axios = require('axios');
const mongoose = require('mongoose');
const Asset = require('../lib/asset/assetModel');

const AssetController = {
  New: async (req, res) => {
    try{
      const asset = await Asset.createTracker(req.body.tickername);
      res.json({ message: `${asset.tickername} tracker created` });
    } catch{
      res.json({ message: 'error' });
    }
  },
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
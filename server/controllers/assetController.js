const axios = require('axios');
const mongoose = require('mongoose');
const Asset = require('../lib/asset/assetModel');
const User = require('../lib/user/userModel');

const AssetController = {
  New: async (req, res) => {
    try{
      if(req.body.tickername.length <= 1) throw 'error';
      const firstUserInDB = await User.findOne({})
      const asset = await Asset.createTracker(req.body.tickername, firstUserInDB._id);
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
  },
  Trackers: async (req, res) => {
    const trackers = await Asset.find({user: req.body.user})
    res.json(trackers);
  }
}

module.exports = AssetController;
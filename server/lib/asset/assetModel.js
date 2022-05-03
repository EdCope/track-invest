const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  tickername: String,
});

AssetSchema.statics.createTracker = async function(tickerName){
  const newAsset = new this({
    tickername: tickerName, 
  });
  await newAsset.save();
  return newAsset;
}

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
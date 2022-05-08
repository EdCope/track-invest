const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  tickername: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

AssetSchema.statics.createTracker = async function(tickerName, userId){
  const newAsset = new this({
    tickername: tickerName,
    user: userId, 
  });
  await newAsset.save();
  return newAsset;
}

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
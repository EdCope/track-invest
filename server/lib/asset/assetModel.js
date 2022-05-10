const mongoose = require('mongoose');
const AssetServicePlugin = require('./assetService');

const AssetSchema = new mongoose.Schema({
  tickername: String,
  transactions: Array,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

AssetSchema.plugin(AssetServicePlugin);

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  tickername: String
});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
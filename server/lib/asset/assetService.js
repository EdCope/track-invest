const mongoose = require('mongoose');

async function createTracker(tickerName, userId) {
  const newAsset = new this({
    tickername: tickerName,
    user: userId, 
  });
  await newAsset.save();
  return newAsset;
}

async function addTransaction(value, trackerId){
  const test = await this.findOne({ '_id': trackerId })
  test.transactions.push(value);
  await test.save();
  return test;
}

function AssetServicePlugin(schema) {
  schema.statics.createTracker = createTracker
  schema.statics.addTransaction = addTransaction
}

module.exports = AssetServicePlugin;
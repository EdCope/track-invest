async function createTracker(tickerName, userId) {
  const newAsset = new this({
    tickername: tickerName,
    user: userId, 
  });
  await newAsset.save();
  return newAsset;
}

function AssetServicePlugin(schema) {
  schema.statics.createTracker = createTracker;
}

module.exports = AssetServicePlugin;
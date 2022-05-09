const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const trackers = await axios.get('http://localhost:3000/asset/trackers', {
  data: {
    "user": "62710e9962c1c9b2cf62df2e",
  }})
  const track = await Promise.all(trackers.data.map(async (tracker) => {
    const trackerPrice = await axios.get(`http://localhost:3000/asset/${tracker.tickername}`)
    return {...tracker, price: trackerPrice.data.price};
  }));
  //const priceReq = await axios.get('http://localhost:3000/asset/aapl');
  
  res.render('index', { title: 'Track Invest', trackers: track });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const priceReq = await axios.get('http://localhost:3000/asset/aapl')
  res.render('index', { title: 'Track Invest', price: priceReq.data.price });
});

module.exports = router;

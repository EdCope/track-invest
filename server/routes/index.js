var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Track Invest', price: 400 });
});

module.exports = router;

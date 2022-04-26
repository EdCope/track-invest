const express = require('express');
const router = express.Router();
const AssetController = require('../controllers/assetController');

router.get('/:share', AssetController.GetPrice);

module.exports = router;
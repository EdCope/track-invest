const express = require('express');
const router = express.Router();
const AssetController = require('../controllers/assetController');

router.post('/new', AssetController.New);
router.post('/transaction/new', AssetController.NewTransaction);
router.get('/trackers', AssetController.Trackers);
router.get('/:share', AssetController.GetPrice);

module.exports = router;

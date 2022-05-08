const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/new', UserController.New);

module.exports = router;
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/hello', apiController.sayHello);
router.get('/add', apiController.addNumbers);
router.get('/reverse', apiController.reverseText);
router.get('/random', apiController.randomNumber);

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/index-controller');

router.get('/', controller.get);

router.post('/', controller.post);

router.get('/payment', controller.payment);

router.get('/get-payment', controller.getPayment);

router.get('/cancel-payment', controller.cancelPayment);

router.post('/upload-photo', controller.photo);

router.get('/danfe', controller.danfeGen);

router.get('/content', controller.getContent);

module.exports = router;
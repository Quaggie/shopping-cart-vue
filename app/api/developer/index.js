'use strict';

const express = require('express');
const Developer = require('./developer.model');
const controller = require('./developer.controller')( Developer );

const router = express.Router();

router.get( '/', controller.find );
router.get( '/:id', controller.findById );
router.post( '/', controller.save );
router.post( '/:id', controller.update );
router.delete( '/:id', controller.remove );

module.exports = router;

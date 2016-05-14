'use strict';

const express = require('express');
const Developer = require('./developer.model');
const controller = require('./developer.controller')( Developer );

const router = express.Router();

router.post( '/find', controller.find );
router.post( '/findByName', controller.findByName );
router.post( '/save', controller.save );
router.post( '/update', controller.update );
router.delete( '/remove', controller.remove );
router.delete( '/removeById', controller.removeById );

module.exports = router;

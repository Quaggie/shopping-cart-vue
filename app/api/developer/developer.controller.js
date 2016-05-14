'use strict';
const _ = require('lodash');

module.exports = function ( Developer ) {

  var controller = {};

  // POST ----------------------------------------
  controller.find = (req, res) => {
    Developer.find()
      .then( (data) => res.status(200).json(data))
      .catch( (err) => res.status(500).send(err));
  }

  controller.findByName = (req, res) => {
    Developer.findOne({ username: req.body.username})
    .then( (data) => res.status(200).json(data))
    .catch( (err) => res.status(500).send(err));
  };

  controller.save = (req, res) => {
    new Developer(req.body).save()
    .then( (data) => res.status(200).json(data))
    .catch( (err) => res.status(500).send(err));
  };

  controller.update = (req, res) => {
    Developer.findOne({ username: req.body.username })
      .then( (developer) => _.merge(developer, req.body).save())
      .then( (data) => res.status(200).json(data))
      .catch( (err) => res.status(500).send(err));
  };

  controller.remove = (req, res) => {
    console.log(req.body);
    Developer.remove({ username: req.body.username })
      .then( () => res.status(200).send('Removido'))
      .catch( (err) => res.status(500).send(err));
  };

  controller.removeById = (req, res) => {
    Developer.findOne({ _id: req.body._id })
      .then( (developer) => developer.remove())
      .then( () => res.status(200).send('Removido'))
      .catch( (err) => res.status(500).send(err));
  };

  return controller;
};

'use strict';
const _ = require('lodash');

module.exports = function ( Developer ) {

  var controller = {};

  controller.find = function (req, res) {
    Developer.find()
      .then( (data) => res.status(200).json(data))
      .catch( (err) => res.status(500).send(err));
  }

  controller.findById = function (req, res) {
    Developer.findById(req.params.id)
      .then( (data) => res.status(200).json(data))
      .catch( (err) => res.status(500).send(err));
  };

  controller.save = function ( req, res ) {
    Developer.save( req.body )
      .then(function ( data ) {
        res.status( 200 ).json( data );
      })
      .catch(function ( err ) {
        res.status( 500 ).send( err );
      });
  };

  controller.update = function ( req, res ) {
    Developer.findById( req.params.id )
      .then(function ( contact ) {
        var updated = _.merge( contact, req.body );
        return updated.save();
      })
      .then(function ( data ) {
        res.status( 200 ).json( data );
      })
      .catch(function ( err ) {
        res.status( 500 ).send( err );
      });
  };

  controller.remove = function ( req, res ) {
    Developer.findById( req.params.id )
      .then( function ( contact ) {
        return contact.destroy();
      })
      .then( function () {
        res.status( 200 ).send( 'Removed' );
      })
      .catch( function ( err ) {
        res.status( 500 ).send( err );
      });
  };

  return controller;
};

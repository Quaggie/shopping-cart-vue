'use strict';

const developer = require('./api/developer')

module.exports = function (app) {
  app
    .use('/api/developer', developer)
    .use( '/*', function ( req, res ) {
      res.sendFile( req.app.get( 'appPath' ) + '/index.html' );
    });
};

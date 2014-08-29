define( function( require ) {
	'use strict';

	// the main purpose of this file is to eliminate the circular dependency
	// if we need to require app in other places

	require( 'velocity' );

	var app = require( 'app/app' );

	app.start();
});

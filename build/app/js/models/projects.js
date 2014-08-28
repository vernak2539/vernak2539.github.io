define( function( require ) {
	'use strict';

	var Backbone = require( 'backbone' );

	return Backbone.Collection.extend({
		// url: 'app/js/data/temp.json'
		url: 'https://api.github.com/users/vernak2539/repos'
	});
});

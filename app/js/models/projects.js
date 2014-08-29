define( function( require ) {
	'use strict';

	var _        = require( 'underscore' );
	var Backbone = require( 'backbone' );

	var localRepoData = require( 'data/local-repo-data' );

	return Backbone.Collection.extend({
		url: 'app/js/data/temp.json'
		// url: 'https://api.github.com/users/vernak2539/repos'
		, parse: function( data ) {

			// merge local data
			_.forEach( data, function( repo ) {
				var extraData = localRepoData[ repo.id ];

				if( !!extraData ) {
					_.merge( repo, extraData );
				}
			});

			return data;
		}
	});
});

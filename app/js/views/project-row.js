define( function( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var GridItem = require( 'views/project' );

	return Marionette.CompositeView.extend({
		template: '#row-template'
		, childView: GridItem
		, childViewContainer: 'div.row'
		, initialize: function() {
			this.collection = new Backbone.Collection( _.toArray( this.model.attributes ) );
		}
	});
});

define( function( require ) {
	'use strict';

	var $        = require( 'jquery' );
	var _        = require( 'underscore' );
	var Backbone = require( 'backbone' );

	var ProjectsCollection = require( 'models/projects' );

	return Backbone.Model.extend({
		subModels: {
			projects: ProjectsCollection
		}
		, initialize: function( attributes, options ) {
			this.options = options || {};

			_.forEach( this.subModels, function( SubModel, key ) {
				this.set( key, new SubModel( null, { mainModel: this } ) );
			}, this );
		}
		, fetch: function() {
			var deferred          = $.Deferred();
			var subModelDeferreds = [];

			_.forEach( this.subModels, function( subModel, key ) {
				var subDeffered = $.Deferred();
				var model       = this.get( key );

				try {
					model.fetch({
						success: subDeffered.resolve
						, error: subDeffered.resolve
					});
					subModelDeferreds.push( subDeffered );

				} catch( err ) {
					// hopefully this doesnt happen
				}
			}, this );

			$.when.apply( null, subModelDeferreds ).always( _.bind( function() {
				deferred.resolve();
			}, this ) );

			return deferred;
		}
	});
});

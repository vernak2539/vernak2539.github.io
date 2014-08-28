define( function( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var GridRow = require( 'views/project-row' );

	return Marionette.CompositeView.extend({
		template: '#grid-template'
		, childView: GridRow
		, childViewContainer: '.container.repos'
		, templateHelpers: function() {
			return {
				sectionTitle: this.sectionTitle
			};
		}
		, initialize: function( options ) {
			var modifiedRepos, tempCollection;

			this.app = options.app;

			tempCollection = new Backbone.Collection( this.app.model.get( 'projects' ).models );

			if( tempCollection.length === 0 ) {
				return;
			}

			if( options.filter ) {
				modifiedRepos = _.filter( tempCollection.models, function( repo ) {
					return repo.get( 'fork' ) === options.filter.fork;
				});
			}

			modifiedRepos = _.sortBy( modifiedRepos, function( repo ) {
				return repo.get( 'stargazers_count' ) * -1;
			});

			tempCollection.reset( modifiedRepos );

			var grid = tempCollection.groupBy( function( list, iterator ) {
				return Math.floor( iterator / 4 );
			});

			this.collection   = new Backbone.Collection( _.toArray( grid ) );
			this.sectionTitle = options.sectionTitle || '';
			this.sectionKey   = options.sectionKey;
		}
		, onRender: function() {
			this.app.vent.trigger( 'renderRepos', this.sectionKey );
		}
	});
});

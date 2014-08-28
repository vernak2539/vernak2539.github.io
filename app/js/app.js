define( function( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Marionette = require( 'marionette' );

	var ProjectGrid = require( 'views/project-grid' );
	var MainModel   = require( 'models/main' );

	var app = new Marionette.Application();

	app.addRegions({
		projects: '.my-projects'
		, forks: '.my-forks'
	});

	app.addInitializer( function() {
		this.model = new MainModel();

		this.model.fetch().done( _.bind( function() {
			this.projects.show( new ProjectGrid({
				app: this
				, filter: { fork: false }
				, sectionTitle: 'My Repos'
				, sectionKey: 'projects'
			}));

			this.forks.show( new ProjectGrid({
				app: this
				, filter: { fork: true }
				, sectionTitle: 'My Forks'
				, sectionKey: 'forks'
			}));
		}, this ) );
	});

	app.vent.on( 'renderRepos', function( data ) {
		app[ data ].$el.velocity( 'fadeIn' );
	});

	return app;
});

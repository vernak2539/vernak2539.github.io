define( function( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var ProjectGrid        = require( 'views/projects' );
	var MainModel = require( 'models/main' );

	var app = new Marionette.Application();

	app.addRegions({
		projects: '.container.repos'
	});

	app.addInitializer( function() {
		this.model = new MainModel();

		app.model.fetch().done(function() {
			app.body.show( new ProjectGrid({ model: app.model }) );
		});
	});

	return app;
});

define( function( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var ProjectGrid        = require( 'views/projects' );
	var ProjectsCollection = require( 'collections/projects' );

	var app = new Marionette.Application();

	app.addRegions({
		projects: '.container.repos'
	});

	app.addInitializer( function() {
		this.model = new Backbone.Model({
			projects: new ProjectsCollection()
		});
	});

	app.model.fetch().done(function() {
		app.body.show( new ProjectGrid({ model: app.model }) );
	});

	return app;
});

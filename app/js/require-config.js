require.config({
	baseUrl: './'
	, waitSeconds: 60
	, paths: {
		app: 'app/js'
		, views: 'app/js/views'
		, models: 'app/js/models'
		, data: 'app/js/data'
		, templates: 'app/templates'
		, backbone: 'bower_components/backbone/backbone'
		, underscore: 'bower_components/lodash/dist/lodash'
		, marionette: 'bower_components/marionette/lib/backbone.marionette'
		, jquery: 'bower_components/jquery/dist/jquery'
		, velocity: 'bower_components/velocity/jquery.velocity'
	}
	, shim: {
		'underscore': {
			exports: '_'
		}
		, 'backbone': {
			deps: [ 'underscore', 'jquery' ]
			, exports: 'Backbone'
		}
		, 'velocity': {
			deps: [ 'jquery' ]
		}
	}
	, deps: [ 'app/app-start' ]
});

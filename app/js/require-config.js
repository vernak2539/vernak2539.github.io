require.config({
	baseUrl: './'
	, waitSeconds: 60
	, paths: {
		js: 'app/js'
		, templates: 'app/templates'
		, backbone: 'bower_components/backbone/backbone'
		, underscore: 'bower_components/lodash/lodash'
		, marionette: 'bower_components/marionette/lib/backbone.marionette'
		, jquery: 'bower_components/jquery/dist/jquery'
	}
	, shim: {
		'lodash': {
			exports: '_'
		}
		, 'backbone': {
			deps: ['underscore', 'jquery']
			, exports: 'Backbone'
		}
	}
	, deps: [ 'js/app' ]
});

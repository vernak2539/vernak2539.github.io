require.config({
	paths: {
		jquery: [
			'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min'
			, '../../libs/jquery/jquery-min' 
		]
		, lodash: [
			'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min'
			, '../../libs/lodash/lodash-min'
		]
		, backbone: [
			'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min'
			, '../../libs/backbone/backbone-min'
		]
		, mustache: [
			'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min'
			, '../../libs/mustach/mustache-min'
		]
	}
	, shim: {
		'lodash': {
			exports: '_'
		}
		, 'backbone': {
			deps: ['lodash', 'jquery']
			, exports: 'Backbone'
		}
	}
});

// loading app. set up this way because it was going to use a router
require([ 'app' ], function( ) {
	"use strict";
});

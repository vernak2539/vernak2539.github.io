define(
	[
		'models/project'
		, 'jquery'
		, 'lodash'
		, 'backbone'
	], function( pModel ) {
		"use strict";
		var ProjectModel = Backbone.Collection.extend({
			model: pModel
			, initialize: function() {
			}
			, url: function() {
				return './js/test.json';
				//return "https://api.github.com/users/vernak2539/repos";
			}
			, parse: function(data) {
				// only allowing non-forked repos
				return _.filter( data, function( item ) {
					return item.fork !== true;
				});
			}
		});
		return ProjectModel;
	}
);
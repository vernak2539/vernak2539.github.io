define(
	[
		'jquery'
		, 'lodash'
		, 'backbone'
	], function() {
		"use strict";
		var projectModel = Backbone.Model.extend({
			defaults: {}
			, initialize: function() {}
		});
		return projectModel;
	}
);
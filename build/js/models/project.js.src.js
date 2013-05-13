define(
	[
		'jquery'
		, 'lodash'
		, 'backbone'
	], function() {
		
		var projectModel = Backbone.Model.extend({
			defaults: {}
			, initialize: function() {}
		});
		return projectModel;
	}
);
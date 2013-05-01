define(
	[
		'text!templates/project.html'
		, 'mustache'
		, 'jquery'
		, 'lodash'
		, 'backbone'

	], function(
		ProjectTmpl
		, Mustache
	) {
		"use strict";
		var ProjectsView = Backbone.View.extend({
			initialize: function() {
				this.listenTo(this.model, 'change', this.model.createInitialAttributes );
			}
			, render: function() {
				return Mustache.render( ProjectTmpl, this.model );
			}
		});
		return ProjectsView;
	}
);

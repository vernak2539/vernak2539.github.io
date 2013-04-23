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
				this.createDesc();
			}
			, render: function() {
				return Mustache.render( ProjectTmpl, this.model );
			}
			, createDesc: function() {
				if( this.model.get('description').length > 100 ) {
					this.model.set('descriptionShort', this.model.get('description').substring(0, 100) + '...' );
				} else {
					this.model.set('descriptionShort', this.model.get('description') );
				}
			}
		});
		return ProjectsView;
	}
);

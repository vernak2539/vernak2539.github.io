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
			, createInitialAttributes: function() {
				this.createShortDesc();
				this.createTitle();
			}
			, createShortDesc: function() {
				if( this.model.get('description').length > 100 ) {
					this.model.set('descriptionShort', this.model.get('description').substring(0, 100) + '...' );
				} else {
					this.model.set('descriptionShort', this.model.get('description') );
				}
			}
			, createTitle: function() {
				this.mode.set( 'title', this.model.get('name').replace('-', ' ') );
			}
		});
		return projectModel;
	}
);
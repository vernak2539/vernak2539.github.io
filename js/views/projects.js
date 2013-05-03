define(
	[
		'collections/projects'
		, 'views/project'
		, 'text!templates/bio.html'
		, 'jquery'
		, 'lodash'
		, 'backbone'

	], function(
		ProjectCollection
		, ProjectView
		, BioTmpl
	) {
		"use strict";
		var ProjectsView = Backbone.View.extend({
			collection: new ProjectCollection()
			, el: '.container'
			, count: 0
			, initialize: function() {
				this.renderBio();
				this.listenTo(this.collection, 'add', this.renderOne );
				this.collection.fetch();
			}
			, render: function() {}
			, renderBio: function() {
				$(this.el).append( this.createRow( BioTmpl ) );
				this.count = 1;
			}
			, renderOne: function( project ) {
				var view = new ProjectView( { model: project } );
				if( this.count < 4 ) {
					$(this.el).find('.row-fluid:last').append( view.render() );
					this.count++;
				} else {
					$( this.el ).append( this.createRow( view.render() ) );
					this.count = 0;
				}
				//
				//$(this.el).append( view.render() );
			}
			, createRow: function( appendThis ) {
				var row = $('<div/>', { 'class': 'row-fluid' });
				return row.append( appendThis );
			}
		});
		return ProjectsView;
	}
);

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
		
		var ProjectsView = Backbone.View.extend({
			initialize: function() {
				this.createInitialAttributes();
				this.listenTo(this.model, 'change', this.createInitialAttributes );
			}
			, render: function() {
				return Mustache.render( ProjectTmpl, this.model );
			}
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
				this.model.set( 'title', this.model.get('name').replace(/-/g, ' ') );
			}
		});
		return ProjectsView;
	}
);

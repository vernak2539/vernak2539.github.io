define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	return Marionette.ItemView.extend({
		template: '#item-template'
		, tagName: 'div'
		, className: 'col-md-3 col-sm-6 repo'
		, templateHelpers: function() {
			return {
				name: this.model.get( 'displayName' ) || this.model.get( 'name' )
			};
		}
	});
});

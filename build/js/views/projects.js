define(["collections/projects","views/project","text!templates/bio.html","jquery","lodash","backbone"],function(e,t,n){var i=Backbone.View.extend({collection:new e,el:".container",count:0,initialize:function(){this.collection.fetch({success:_.bind(this.renderAll,this)})},renderAll:function(){this.renderBio(),this.collection.each(this.renderOne,this),$(".tmp-hide").animate({opacity:1},500)},renderBio:function(){$(this.el).append(this.createRow(n)),this.count=1},renderOne:function(e){var n=new t({model:e});this.count<4?($(this.el).find(".row-fluid:last").append(n.render()),this.count++):($(this.el).append(this.createRow(n.render())),this.count=0)},createRow:function(e){var t=$("<div/>",{"class":"row-fluid"});return t.append(e)}});return i});
//@ sourceMappingURL=projects.js.map
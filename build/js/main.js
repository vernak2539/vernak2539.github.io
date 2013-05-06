define("models/project",["jquery","lodash","backbone"],function(){var e=Backbone.Model.extend({defaults:{},initialize:function(){}});return e}),define("collections/projects",["models/project","jquery","lodash","backbone"],function(e){var t=Backbone.Collection.extend({model:e,initialize:function(){},url:function(){return"https://api.github.com/users/vernak2539/repos"},parse:function(e){return _.filter(e,function(e){return e.fork!==!0})}});return t}),define("text!templates/project.html",[],function(){return'{{#attributes}}\n<div class="span3">\n	<h4>{{title}}</h4>\n	<p>{{descriptionShort}}</p>\n	<a class="btn btn-info" href="{{html_url}}">more info</a>\n</div>\n{{/attributes}}'}),define("views/project",["text!templates/project.html","mustache","jquery","lodash","backbone"],function(e,t){var n=Backbone.View.extend({initialize:function(){this.createInitialAttributes(),this.listenTo(this.model,"change",this.createInitialAttributes)},render:function(){return t.render(e,this.model)},createInitialAttributes:function(){this.createShortDesc(),this.createTitle()},createShortDesc:function(){this.model.get("description").length>100?this.model.set("descriptionShort",this.model.get("description").substring(0,100)+"..."):this.model.set("descriptionShort",this.model.get("description"))},createTitle:function(){this.model.set("title",this.model.get("name").replace(/-/g," "))}});return n}),define("text!templates/bio.html",[],function(){return'<div class="span3">\n	<div class="logo"></div>\n	<p style="text-align:center">My Github Homepage</p>\n</div>\n'}),define("views/projects",["collections/projects","views/project","text!templates/bio.html","jquery","lodash","backbone"],function(e,t,n){var i=Backbone.View.extend({collection:new e,el:".container",count:0,initialize:function(){this.renderBio(),this.listenTo(this.collection,"add",this.renderOne),this.collection.fetch()},render:function(){},renderBio:function(){$(this.el).append(this.createRow(n)),this.count=1},renderOne:function(e){var n=new t({model:e});4>this.count?($(this.el).find(".row-fluid:last").append(n.render()),this.count++):($(this.el).append(this.createRow(n.render())),this.count=0)},createRow:function(e){var t=$("<div/>",{"class":"row-fluid"});return t.append(e)}});return i}),define("app",["views/projects","jquery","lodash","backbone"],function(e){new e}),require.config({paths:{jquery:["https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min","../../libs/jquery/jquery-min"],lodash:["https://cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.0/lodash.min","../../libs/lodash/lodash-min"],backbone:["https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min","../../libs/backbone/backbone-min"],mustache:["https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min","../../libs/mustach/mustache-min"],templates:"../templates/"},shim:{lodash:{exports:"_"},backbone:{deps:["lodash","jquery"],exports:"Backbone"}}}),require(["app"],function(){}),define("js/main",function(){});
//@ sourceMappingURL=main.js.map
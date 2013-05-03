/*global module:false*/
module.exports = function(grunt) {
	"use strict";
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		jshint: {
			all: [
				'Gruntfile.js'
				, 'js/app.js'
				, 'js/main.js'
				, 'js/collections/*.js'
				, 'js/models/*.js'
				, 'js/views/*.js'
			]
			, options: { jshintrc: '.jshintrc' }
		}
		, requirejs: {
			combine: {
				options: {
					appDir: './'
					, baseUrl: "./"
					, dir: 'build/'
					//, generateSourceMaps: true
					//, mainConfigFile: 'js/main.js'
					, optimize: "uglify2"
					, optimizeCss: "none"
					, preserveLicenseComments: false
					, skipDirOptimize: false
					, stubModules: ['text' ]
					, paths: {
						'jquery': 'empty:'
						, 'lodash': 'empty:'
						, 'backbone': 'empty:'
						, 'mustache': 'empty:'
						, 'app': 'js/app'
						, 'text': 'js/text'
						, 'views': 'js/views'
						, 'models': 'js/models'
						, 'collections': 'js/collections'
						, 'templates': 'js/templates'
					}
					, modules:[
						{
							name: 'js/main'
							, exclude: ['text']
						}
					]
				}
			}
		}

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');


	// Default task.
	grunt.registerTask('default', [ 'jshint', 'requirejs' ]);

};

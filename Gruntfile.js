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
				, 'app/js/app.js'
				, 'app/js/main.js'
				, 'app/js/collections/*.js'
				, 'app/js/models/*.js'
				, 'app/js/views/*.js'
			]
			, options: { jshintrc: '.jshintrc' }
		}
		, requirejs: {
			combine: {
				options: {
					appDir: './app/'
					, baseUrl: "./"
					, dir: 'build/'
					, generateSourceMaps: true
					, optimize: "uglify2"
					, optimizeCss: "none"
					, preserveLicenseComments: false
					, stubModules: [ 'text' ]
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
						, 'templates': 'templates'
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
		, copy: {
			index: {
				src: ['./app/index.html']
				, dest: './index.html'
			}
		}
		, replace: {
			index: {
				src: ['./index.html']
				, dest: './'
				, overwrite: true
				, replacements: [
					{
						from: 'href="css/'
						, to: 'href="app/css/'
					}
					, {
						from: 'data-main="js/'
						, to: 'data-main="app/js/'
					}
					, {
						from: '../'
						, to: ''
					}
				]
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-text-replace');


	// Default task.
	grunt.registerTask('default', [ 'jshint', 'requirejs' ]);

	// task to build for github page
	grunt.registerTask('github', ['jshint', 'requirejs', 'copy:index', 'replace:index'] );

};

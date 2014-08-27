/*global module:false*/
module.exports = function(grunt) {
	"use strict";
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json')
		, jshint: {
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
		, less: {
			dev: {
				files: {
					'./app/css/main.css': './app/css/main.less'
				}
			}
		}
		, watch: {
			less: {
				files: './app/css/*.less'
				, tasks: [ 'less:dev' ]
			}
		}
		, requirejs: {
			combine: {
				options: {
					appDir: './app/'
					, baseUrl: "./"
					, dir: 'build/'
					, generateSourceMaps: true
					, optimize: "uglify2"
					, optimizeCss: "standard"
					, preserveLicenseComments: false
					, logLevel: 0
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
						, 'templates': './templates'
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
				, overwrite: true
				, replacements: [
					{
						from: 'href="css/'
						, to: 'href="build/css/'
					}
					, {
						from: 'data-main="js/'
						, to: 'data-main="build/js/'
					}
					, {
						from: '../'
						, to: ''
					}
				]
			}
		}
		, complexity: {
			generic: {
				src: [
					'app/js/**/*.js'
					, '!app/js/text.js'
				],
				options: {
					// Recommendations taken from http://jscomplexity.org/complexity
					errorsOnly: false, // show pretty file list
					cyclomatic: 10, // recommendation 10
					halstead: 12, // no recommendation
					maintainability: 85 // recommendation 65
				}
			}
		} // end complexity
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-complexity');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', [ 'jshint', 'complexity'/*, 'requirejs'*/ ]);

	// task to build for github page
	grunt.registerTask('github', ['default', 'copy:index', 'replace:index'] );

};

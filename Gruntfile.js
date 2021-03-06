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
			, dist: {
				options: {
					compress: true
				}
				, files: {
					'./build/css/main.css': './build/css/main.less'
					, './build/css/bootstrap.css': './bower_components/bootstrap-css/css/bootstrap.css'
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
					appDir: './'
					, dir: './build-temp/'
					, baseUrl: './'
					, mainConfigFile: './app/js/require-config.js'
					, optimize: "uglify2"
					, optimizeCss: "none"
					, generateSourceMaps: true
					, preserveLicenseComments: false
					, skipDirOptimize: true
					, logLevel: 0
					, modules:[
						{ name: 'app/require-config' }
					]
				}
			}
		}
		, copy: {
			temp: {
				files: [
					{
						expand: true
						, cwd: './build-temp/app'
						, src: ['**']
						, dest: './build/'
					}
				]
			}
			, requirejs: {
				files: [
					{ expand: false, src: [ './bower_components/requirejs/require.js' ], dest: './build/js/require.js' }
				]
			}
		}
		, clean: {
			temp: ['./build-temp']
			, build: ['./build']
		}
		, replace: {
			distRequireConfig: {
				src: ['./build/js/require-config.js']
				, overwrite: true
				, replacements: [
					{ from: 'baseUrl: \'./\'', to: 'baseUrl: \'./build/\'' }
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
	grunt.loadNpmTasks('grunt-complexity');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-text-replace');

	// Default task.
	grunt.registerTask( 'default', [ 'tests', 'optimizejs', 'less:dist' ]);
	grunt.registerTask( 'tests', [ 'jshint', 'complexity' ] );
	grunt.registerTask( 'optimizejs', [ 'clean:build', 'requirejs', 'replace:distRequireConfig', 'copy:requirejs', 'copy:temp', 'clean:temp' ] );
};

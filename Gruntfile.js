module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		
		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ]
			},
			app: {
				src: 'src/**/*.js',
				dest: 'dist/hello.js'
			}
		},

		watch: {
			scripts: {
				files: ['**/*.js'],
				tasks: ['browserify'],
				options: {
					spawn: false,
					livereload: true
				},
			}
		}
	});

	grunt.registerTask('default', ['browserify']);
}
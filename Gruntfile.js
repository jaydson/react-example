module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		
		browserify: {
			options: {
				transform: [ require('grunt-react').browserify ],
				sourceMap: true
			},
			app: {
				src: 'src/**/*.js',
				dest: 'dist/hello.js'
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: './dist',
					hostname: 'localhost'
				}
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: './src/app',
				src: ['**'],
				dest: 'dist'
			}
		},

		watch: {
			scripts: {
				files: ['./src/**/*'],
				tasks: ['copy','browserify'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', ['copy','browserify','connect', 'watch']);
}
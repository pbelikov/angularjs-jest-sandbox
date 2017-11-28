module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-html2js');
	
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: './',
	        keepalive: true
	      }
	    }
	  },
	  browserify: {
		  dist: {
		    files: {
		      'build/bundle.js': ['src/app/**/*.js', '!src/app/**/*.spec.js']
		    },
		    options: {}
		  }
	  }
	});

	grunt.registerTask('server', ['browserify', 'connect']);
}
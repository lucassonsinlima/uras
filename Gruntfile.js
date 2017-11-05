'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
        main: ['build']
    },
    compass: {
        dist: {
            options: {
                sassDir: 'assets/styles/',
                cssDir: 'build/css/',
                sourcemap: false
            }
        }
    },
    uglify: {
        options: {
            mangle: false
        },
        main: {
            files: [{
                expand: true,
                cwd: 'assets/js/',
                src: ['**/*.js', ],
                dest: 'build/js/',
                ext: '.js'
            }]
        }
    },
    watch: {
        options: {
            livereload: 1337
        },
        compass: {
            files: ['assets/styles/**/*.scss'],
            tasks: ['compass']
        },
        css: {
            files: ['build/css/*.css']
        },
        js: {
            files: ["assets/js/*.js"],
            tasks: ["uglify"]
        }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.registerTask( 'default', [ 'clean', 'compass','uglify', 'watch' ] );

};

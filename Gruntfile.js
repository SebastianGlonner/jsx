/**
 * @param  {Grunt} grunt
 */
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      MyTarget: {
        files: {
          'bin/jsx.min.js': ['src/jsx.js']
        },
        options: {
          'screw-ie8': true,
          'mangle': {
            'sort': true,
            'toplevel': true
          },
          'compress': true,
          'lint': true
        }
      }
    },
    watch: {
      options: {
        livereload: {
          port: 35730
        }
      },
      files: [
        'src/jsx.js'
        // 'bin/jsx.js'
      ],
      tasks: [
        'uglify'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

};

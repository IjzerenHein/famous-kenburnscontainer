/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['KenBurnsContainer.js'],
      options: {
        config: '.eslintrc'
      }
    },
    jscs: {
      src: ['KenBurnsContainer.js'],
      options: {
        config: '.jscsrc'
      }
    },
    jsdoc2md: {
      separateOutputFilePerInput: {
        options: {
          index: true
        },
        files: [
            { src: 'KenBurnsContainer.js', dest: 'docs/KenBurnsContainer.md' }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task.
  grunt.registerTask('default', ['eslint', 'jscs', 'jsdoc2md']);
};

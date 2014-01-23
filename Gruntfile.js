module.exports = function(grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '.',
        message:'Automatically generated gh-pages update',
        silent: true
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', function() {

    // Proxy a message argument on to gh-pages, from command line args
    grunt.config.set('gh-pages.options.message', grunt.option('message'));
    console.log(grunt.option('message'));

    grunt.task.run([
      'gh-pages'
    ]);

  });
};

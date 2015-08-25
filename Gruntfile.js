module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/styles.css': 'assets/stylesheets/src/styles.scss' ,
           'assets/stylesheets/smartphone.css': 'assets/stylesheets/src/smartphone.scss',
           'assets/stylesheets/info.css': 'assets/stylesheets/src/info.scss',
           'assets/stylesheets/features.css': 'assets/stylesheets/src/features.scss',
           'assets/stylesheets/ending.css': 'assets/stylesheets/src/ending.scss',
           'assets/stylesheets/footer.css': 'assets/stylesheets/src/footer.scss'      
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'], 
        tasks: ['sass', 'cssmin']
      } 
    },
     cssmin: {
          target: {
          files: {
             'assets/stylesheets/app.min.css': [
             'assets/stylesheets/styles.css',
             'assets/stylesheets/smartphone.css',
             'assets/stylesheets/info.css',
             'assets/stylesheets/features.css',
             'assets/stylesheets/ending.css',
              'assets/stylesheets/footer.css'
             ]
          }
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',  ['sass', 'cssmin',  'watch']);
};
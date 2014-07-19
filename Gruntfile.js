module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat : {
      options : {
      },
      dist : {
        src : [
          'public/javascripts/src/angular.js', 
          'public/javascripts/src/angular_routes.js', 
          'public/javascripts/src/ui_bootstrap.js', 
          'public/javascripts/FriendsMusics/controllers/controller.js',
          'public/javascripts/FriendsMusics/services/factory.js',
          'public/javascripts/FriendsMusics/services/func.js', 
          'public/javascripts/FriendsMusics/routes.js',
          'public/javascripts/FriendsMusics/controllers/controller_song.js', 
          'public/javascripts/FriendsMusics/controllers/controller_FriendsList.js',
          'public/javascripts/FriendsMusics/controllers/controller_chatboxes.js',
          'public/javascripts/FriendsMusics/controllers/controller_ShareSong.js',
          'public/javascripts/FriendsMusics/controllers/controller_notifications.js',
          'public/javascripts/src/jpage.js',
          'public/javascripts/src/mediaelement.js',
          'public/javascripts/src/soundcloud_api.js',
          'public/javascripts/FriendsMusics/player.js'
        ],
        dest : 'public/javascripts/dist/built.js',
      }
    },
    uglify : {
      options : {
        mangle : true
      },
      my_target : {
        files : {
          'public/javascripts/dist/app.js' : ['public/javascripts/dist/built.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
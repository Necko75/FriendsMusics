playlistModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addSong', {
        templateUrl: '/addNewSongTemplateRequest',
        controller: 'addNewSong'
      }).
      when('/Sharesong/:id/:name', {
        templateUrl : '/shareSongTemplateRequest',
        controller : 'ShareSong'
      }).
      when('/notifications', {
        templateUrl : '/notificationsTemplateRequest',
        controller : 'Notifications'
      }).
      when('/search', {
        templateUrl : '/searchTemplateRequest',
        contoller : "Search"
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
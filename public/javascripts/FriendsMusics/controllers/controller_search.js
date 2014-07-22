playlistModule.controller('Search', function Search($scope, $timeout, $location, playlistStorage, $compile, $rootScope, $routeParams, $filter) {

	$scope.socket = playlistStorage.getSocket();
	$scope.oldMusics = $rootScope.musics;
	$scope.timeoutSearch = undefined;
  $scope.results = undefined;

	$scope.$watch('search_song', function (val, prev_val) {

    if (!val)
      return (false);
		if (val.length < 3)
      return (false);
  	saisie = val;
  	if ($scope.timeoutSearch > 0 || $scope.timeoutSearch == undefined)
  	{
    		clearTimeout($scope.timeoutSearch);
    		$scope.timeoutSearch = setTimeout(function() {
      		$scope.timeoutSearch = undefined;
      		$scope.submitSearch(saisie);
    		}, 1000);
  	}
	});

	$scope.submitSearch = function(saisie) {

  		playlistStorage.submitResearchSong(saisie, $scope.playlist_selected.id).success(function(data) {
          if (data)
          {
              $rootScope.musics = data;
          }
      });
	}

  $scope.cancelResearch = function() {

    if ($scope.search_song != '')
    {
      playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
          $rootScope.musics = data;
          $scope.search_song = "";
      });
    }
    else
      return (false);
  }

});
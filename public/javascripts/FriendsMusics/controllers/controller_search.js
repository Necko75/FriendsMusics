playlistModule.controller('Search', function Search($scope, $timeout, $location, playlistStorage, $compile, $rootScope, $routeParams, $filter) {

	$scope.socket = playlistStorage.getSocket();
	$scope.oldMusics = $rootScope.musics;
	$scope.timeoutSearch = undefined;

	$scope.$watch('search_song', function (val) {

		if (val && val.length < 3)
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
		console.log("recherche : " + saisie);
	}

});
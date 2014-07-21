playlistModule.controller('Search', function Search($scope, $timeout, $location, playlistStorage, $compile, $rootScope, $routeParams, $filter) {

	$scope.socket = playlistStorage.getSocket();
	$scope.oldMusics = $rootScope.musics;

	$scope.$watch('search_song', function (val) {
		;
	});
});
playlistModule.controller('ShareSong', function ShareSong($scope, $location, playlistStorage, $compile, $rootScope, $routeParams) {

	$scope.name_song = $routeParams.name;
	$scope.id_song = $routeParams.id;
	$scope.friends = playlistStorage.getFriensList();
	$scope.friend = $scope.friends[0];

	$scope.submitShare = function() {
		console.log($scope.friend);
		console.log($rootScope.socket);
		$rootScope.socket.emit('ShareSong', {receiver : $scope.friend.id, song_id : $scope.id_song});
		$scope.close();
	}

	$scope.close = function() {
		$location.path("/");
	}

});
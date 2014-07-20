playlistModule.controller('Search', function Search($scope, $timeout, $location, playlistStorage, $compile, $rootScope, $routeParams, $filter) {

	$scope.socket = playlistStorage.getSocket();
	$scope.oldMusics = $rootScope.musics;

	$scope.$watch('search_song', function (val) {
		if (val && val.length >= 3)
		{
			var found = $filter('filter')($scope.oldMusics, {author : val}, false);
			if (found.length)
			{
				$rootScope.musics = found;
				$timeout(function() {
					$scope.divholder.jPages("destroy");
					$scope.divholder.jPages({
						containerID : "tracksListMusics",
						perPage : 8,
					});
				}, 0);
			}
			else 
			{
				found = $filter('filter')($scope.oldMusics, {name : val}, false);
				if (found.length)
				{
					$rootScope.musics = found;
				}
				else
					console.log('no result');
			}
		}
		else
		{
			// il nous faut réactuliser la liste //
			$rootScope.musics = $scope.oldMusics;
		}
	});
});
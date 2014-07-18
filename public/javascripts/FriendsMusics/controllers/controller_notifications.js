playlistModule.controller('Notifications', function Notifications($scope, $location, playlistStorage, $compile, $rootScope, $routeParams) {

	$scope.notificationsList;
	$scope.socket = playlistStorage.getSocket();

	$scope.closeAlertInfo = function($event) {
		$location.path("/");
	}

	$scope.play = function(notif) {
		my_player.play_video_shared(notif.url);
	}

	$scope.addToCurrentPlaylist = function(notif, playlist_selected) {

		$rootScope.$broadcast('add_song_from_shared', notif, function() {
			// on remove la notification car le son a été ajouté //
			playlistStorage.removeSharedSongNotification(notif);
		});
	}

	$scope.closeThredMessages = function() {
		$('#thread_Tchatmessages').remove();
	}

	$scope.showTchatBoxMessages = function(friendThreadMessage) {

		$rootScope.$broadcast('showTchatBoxFromThreadMessages', friendThreadMessage, function() {
			console.log('thread message list with');
			console.log(friendThreadMessage);
		});
	}
});
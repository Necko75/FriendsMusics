playlistModule.controller('addNewSong', function addNewSong($routeParams, $scope, $location, playlistStorage, $rootScope, $compile) {

	$scope.editingSong = null;
	$scope.loader_black = '<div class = "section_loader_black"><span class = "loader_ loader_cercle_black"></span></div>';

	// si l'utilisateur décide d'ajouter un son à sa playlist depuis les notifications // => rf : controller notifications //
	$rootScope.$on('add_song_from_shared', function(event, args, callback) {

		var song = {"artist" : args.author, "name" : args.musicName, "url" : args.url};
		$scope.submit_add_song(song);
		$location.path("/");
		callback();
	});
	
	$scope.submit_add_song = function(song) {
		
		song.playlist_id = $scope.playlist_selected.id;
		if (song.artist != "" && song.name != '' && song.url != '')
		{
			playlistStorage.submitNewSong(song).success(function(back) {
				if (back.erreur == "ok")
				{
					$("#myModal").find('.modal-title').text("Song added to playlist !");
					if ($('#myModal').find('.delete_song').size() > 0)
						$('.delete_song').remove();
					$("#myModal").modal('show');
					setTimeout(function() {
						$("#myModal").modal('hide');
					}, 2000);

					playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
						$rootScope.musics = data;
					});
					$scope.close(); // on close le formulaire //
				}
			});
		}
		return (false);
	}

	$scope.removeMusic = function(music, $event, $index) {

		var modal = $("#myModal");
		$('.modal-title').text("Are you sure ?");
		if (modal.find('.delete_song').size() == 0)
			$('.modal-footer').append('<button type="button" class="btn btn-primary delete_song">Accept</button>');
		modal.modal('show');

		modal.find('.delete_song').on('click', function() {
			modal.modal('hide');
			playlistStorage.removeSong(music).success(function(back) {
				$rootScope.musics.splice($index, 1);
			});
			modal.modal('hide');
		});
	}

	$scope.close = function() {
		$location.path("/");
		$('#add_song_to_current_playlist').prop('disabled', false);
	}

	$scope.closeEditing = function($event) {

		$('.edit_song').remove();
	}

	/* récupère le template qui permet la modification de la musique selectionnée */
	/* on ne passe pas par les routes et ng-view car il n'est pas préférable de placer le formulaire de modification au même niveau que celui d'ajout */
	/* la div ng-view, pour le moment est unique, ainsi le formulaire récupéré de pourrait pas être placé à un autre endroit */
	$scope.editSong = function(song) {

		$scope.editingSong = song;
		console.log("edit_song ask");
	}

	$scope.submitEditSong = function(song) {

		playlistStorage.editSong(song.id, song.author, song.name).success(function(data) {
			$scope.editingSong = null;
		});
	}

	$scope.shareSongTemplateRequest = function(song, $event, index){
		
		playlistStorage.shareSongTemplateRequest(song).success(function(data) {
			$($event.target).parents('.row:first').after($compile(data)($scope));
		});
	}

	$scope.removeFromFavorite = function(music, index) {
		
		playlistStorage.removeFromFavorite(music.id).success(function(data) {

			if ($scope.playlist_selected === "favorites")
				$rootScope.musics.splice(index, 1);
			else
				$rootScope.musics[index].favorite = 0;
		});
	}

	$scope.addToFavorite = function(music, $event) {

		console.log('demande ajout au favoris');

		playlistStorage.addSongToFavorite(music.id).success(function(data) {
			for (var i = 0; i < $rootScope.musics.length; i++)
				if ($rootScope.musics[i].id == music.id)
					$rootScope.musics[i].favorite = 1;
			
		});
	}
})
var playlistModule = angular.module('playlistModule', ['ngRoute', 'ui.bootstrap'])
	.directive('myPostRepeatDirective', function() {
		return function(scope, element, attrs) {
			if (scope.$last) {
				scope.$emit('ngRepeatFinished');
			}
		}
	})

playlistModule.controller('playlistController', function playlistController($timeout, $scope, $location, playlistStorage, funcFactory, $rootScope, $templateCache, $compile, $cacheFactory) {

	$scope.playlist_selected = undefined;
	$scope.cache = $cacheFactory('cacheId');
	$rootScope.socket = io.connect('http://localhost:3000');
	$scope.divholder = angular.element('div.holder');
	$scope.soundSelected = undefined;
	$scope.paginator = undefined;

	playlistStorage.getUserPlaylists().success(function(data) {
		$scope.playlists = data;
		$scope.playlist_selected = $scope.playlists[0];
		playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
			$rootScope.musics = data;
		});
	});

	$scope.$on('$locationChangeStart', function(event, next, current) {
		if ($location.url() == "/notifications")
			$templateCache.removeAll();
	});

	// function lancé à chaque fois que le ng-repeat del la list de musique se termine //
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {

		console.log('ngreapeat');
		if ($scope.divholder.size() > 0 && $scope.paginator !== undefined)
			$scope.divholder.jPages("destroy");
		$scope.divholder.jPages({
			containerID : "tracksListMusics",
			perPage : 8,
			callback : function() {
				$scope.paginator = this;
			}
		});

		$('#tracksListMusics').find('.track').each(function() {
			if ($(this).index() % 2 > 0)
				$(this).removeClass('two').addClass('one');
		});

		// un son est peut être joué sur la playlist chargé //
		// en effet il s'agit dela fonction directive d'après chargement de liste de sons, mais elle a pu être déclenchée depuis la selectbox des playlists //
		if (my_player.id_playlist_played != undefined && my_player.id_song_played != undefined && (my_player.id_playlist_played == $scope.playlist_selected.id))
			my_player.recreateAnimation();

		// si un son est joué sur la playlist désormais sélectionné, bien replacer la pagination //
		if ($scope.soundSelected != undefined && my_player.id_playlist_played != undefined && (my_player.id_playlist_played == $scope.playlist_selected.id))
		{
			console.log("son actuellement joué sur cette playlist : ");
			console.log($scope.soundSelected.name + ' de ' + $scope.soundSelected.author);
			console.log('index de litem son ' + my_player.id_song_played);

			// fait change le jpage si besoin //
			funcFactory.findCurrentPaginationPage($scope.divholder);
		}
  	});

	// on charger uniquement les musiques favorites provenant de toutes ses playlists //
	$scope.getFavorites = function() {

		if ($scope.cache.get('favoritesLoaded') !== true)
		{
			playlistStorage.getMusicsFromPlaylist("fav").success(function(data) {
				$rootScope.musics = data;
				$scope.playlist_selected = "favorites";
				$scope.cache.put('favoritesLoaded', true);
			});
		}
	}

	// lorsque l'utilisateur clique sur le lien de la chanson (juste en dessous du lecteur média)
	$scope.targetSong = function(soundselected) {

		console.log(soundselected);
		console.log(my_player.id_playlist_played);
		console.log(my_player.id_song_played + 1);
		var index = my_player.id_song_played + 1;
		
		if ($scope.playlist_selected.id != my_player.id_playlist_played)
		{
			for (var i = 0; i < $scope.playlists.length; i++)
			{
				if ($scope.playlists[i].id == my_player.id_playlist_played)
				{
					$scope.playlist_selected = $scope.playlists[i];
					$scope.change_playlist();
				}
			}
		}
		else
			funcFactory.findCurrentPaginationPage($scope.divholder);
	}

	$scope.play_media = function(music, element, index) {

		if ($scope.musics[index]['type_source_id'] == 2) // soundcloud //
	        my_player.play_soundcloud($scope.musics[index]['url'], $(element.currentTarget), index, $scope.playlist_selected.id);
	    else // youtube //
	        my_player.play_video($scope.musics[index]['url'], $scope.musics[index]['type_source_id'], $(element.currentTarget), index, $scope.playlist_selected.id);
	    my_player.id_playlist_played = $scope.playlist_selected.id;
	    $scope.soundSelected = music;
	}

	$scope.change_playlist = function() {

		playlistStorage.getMusicsFromPlaylist($scope.playlist_selected.id).success(function(data) {
			$rootScope.musics = data;
			my_player.id_playlist_selected = $scope.playlist_selected.id;
			$scope.cache.remove('favoritesLoaded');
		});
	}

	$scope.getThreadListMessages = function($event) {

		var $fb = $('.facebook');
		var $a_ = $fb.find('#messages_received');
		console.log(parseInt($a_.text()));
		if ($a_.size() > 0 && parseInt($a_.text()) > 0 && $scope.cache.get('threadMessages') != undefined) // on a recu de nouveaux messages //
		{
			$scope.cache.remove('threadMessages');
			$a_.text('0');
			$fb.find('.notimesg').removeClass('notimesg').addClass('messagenormal');
		}

		if ($("#thread_Tchatmessages").size() > 0)
			return (false);
		if ($scope.cache.get('threadMessages'))
			$($event.target).parents(".facebook").after($compile($scope.cache.get('threadMessages'))($scope));
		else
		{
			playlistStorage.getThreadListMessages().success(function(template) {
				$scope.ThreadMessages = template;
				$($event.target).parents(".facebook").after($compile($scope.ThreadMessages)($scope));
				$scope.cache.put('threadMessages', template);
			});
		}
	}

});
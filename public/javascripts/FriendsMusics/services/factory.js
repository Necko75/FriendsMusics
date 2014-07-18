angular.module('playlistModule').factory('playlistStorage', function ($http) {
	
	var friendsList = [];
	var socket;

	return {

		setSocketUser : function(socket) {
			socket = socket;
		},

		getSocket : function() {
			return (socket);
		},

		setFriendsList : function(list) {
			friendsList = list;
		},

		getFriensList : function() {
			return (friendsList);
		},

		getUserPlaylists : function() {
			return ($http.get('/getUserPlaylists'));
		},

		getMusicsFromPlaylist : function(id_playlist) {
			if (id_playlist == "fav")
				return ($http.post('/getMusicsFromPlaylist', {"playlist_id" : "favorites"}));
			else
				return ($http.post('/getMusicsFromPlaylist', {"playlist_id" : id_playlist}));
		},

		editSong : function(id, author, name) {
			return ($http.post('/editSong', {"id" : id, "author" : author, "name" : name}));
		},

		chatBoxTemplateRequest : function(friend) {
			return ($http.post('/chatBoxTemplateRequest', friend));
		},

		submitNewSong : function(song) {
			return ($http.post('/submitNewSong', song));
		},

		removeSong : function(song) {
			return ($http.post('/removeSong', song));
		},

		shareSongTemplateRequest : function(song) {
			return ($http.post('/shareSongTemplateRequest', song));
		},

		removeSharedSongNotification : function(notif) {
			return ($http.post('/removeSharedSongNotification', notif));
		},

		getThreadListMessages : function() {
			return ($http.get('/getThreadListMessages'));
		},

		addSongToFavorite : function(id_song) {
			return ($http.post('/addSongToFavorite', {"id_song" : id_song}));
		},

		removeFromFavorite : function(id_song) {
			return ($http.post('/removeFromFavorite', {"id_song" : id_song}));	
		}
	};
});
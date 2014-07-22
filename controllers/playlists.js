
var PlayList = require('models/playlist/playlist_class.js');
var User_class = require('models/user_class.js');
var u = new User_class();
var Notifications = require('models/notifications/notifications_class.js');

module.exports.controller = function(app) {

	app.get('/playlists', function (req, res) {
		Notifications.getSharedSongNotifications(req.session, function(total_notifs) {
			u.getFriendsList(req.session, false, function(retour) {
				console.log(retour);
				console.log(total_notifs);
				res.render('playlists', {data : retour, notifs : total_notifs});
			});
		});
	});

	app.post('/getMusicsFromPlaylist', function (req, res) {
		PlayList.getMusicsFromPlaylist(req.body.playlist_id, req.session, function(list) {
			res.json(list);
		});
	});

	app.get('/getUserPlaylists', function (req, res) {
		PlayList.getUserPlaylists(req.session, function(list) {
			res.json(list);
		});
	});

	app.get('/searchTemplateRequest', function (req, res) {
		res.render('by_ajax/searchTemplateRequest', {});
	});

	app.post('/submitResearchSong', function (req, res) {
		console.log('research on playlist ID : ' + req.body.id_playlist);
		console.log('with pattern : ' + req.body.pattern);

		PlayList.findPatternIn(req.session, req.body, function (retour) {
			res.json(retour);
		});
	});
}
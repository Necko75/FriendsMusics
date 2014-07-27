
var Notifications = require('models/notifications/notifications_class.js');
var Tchat = require('models/tchat/tchat_class.js');

module.exports.controller = function(app) {

	app.get('/shareSongTemplateRequest', function (req, res) {
		res.render('by_ajax/shareSongTemplateRequest', {});
	});

	app.post('/chatBoxTemplateRequest', function (req, res) {
		Tchat.getOldMessages(req.body, req.session, function(messages) {
			res.render('by_ajax/chatbox', {data : req.body, messages : messages});
		});
	});

	app.get('/notificationsTemplateRequest', function (req, res) {
		Notifications.getSharedSongNotificationsToDisplay(req.session, function(notifications) {
			console.log(notifications);
			res.render('by_ajax/notificationsTemplate', {data : notifications});
		});
	});

	app.post('/removeSharedSongNotification', function (req, res) {
		Notifications.removeSharedSongNotification(req.session, req.body, function() {
			res.json({"erreur" : "ok"});
		});
	});

	app.get('/getThreadListMessages', function (req, res) {
		Tchat.getThreadListMessages(req.session, function(tchat_messages) {
			res.render('by_ajax/popover_messages.jade', {data : tchat_messages});	
		});
	});

	app.get('/modalConfirmAddNewSong', function (req, res) {
		res.render('by_ajax/modals/modalConfirmAddNewSong.jade', {});
	});
}
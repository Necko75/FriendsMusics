
var User_class = require('models/user_class.js');
var u = new User_class();

module.exports.controller = function(app) {

  app.get('/subscribe', function(req, res) {
      res.render('subscribe')
  });

  app.post('/subscribeProcess', function(req, res) {
	u.subscribeUser(req.body, function(message) {
		if (message == "ok")
			res.redirect('login');
		else if (message == "error")
			res.redirect('subscribe', {});
		});
  });

  app.get('/login', function(req, res) {
      res.render('login')
  });

  app.post('/loginProcess', function(req, res) {
	u.loginUser(req.body, function(retour) {
		if (retour['pseudo'] && retour['password'] && retour['id'])
		{
			req.session.pseudo = retour['pseudo'];
			req.session.user_id = retour['id'];
			res.redirect('/playlists/');
		}
		else if (retour == "error")
			res.redirect('login', {});
	})
  });
}
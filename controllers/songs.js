
var PlayList = require('models/playlist/playlist_class.js');

module.exports.controller = function(app) {

  app.get('/addNewSongTemplateRequest', function(req, res) {
      	res.render('by_ajax/addNewSongTemplateRequest', {});
  });

  app.post('/editSong', function(req, res) {
	  	console.log(req.body);
		PlayList.editSong(req.body, req.session, function(message) {
			res.json({"erreur" : message});
		});
  });

  app.post('/submitNewSong', function(req, res) {
  		console.log('submitting New Song : ' + req.body);
		PlayList.submitNewSong(req.session, req.body, function(message) {
			res.json({"erreur" : message});
		});
  });

  app.post('/removeSong', function(req, res) {
  		console.log('removing song');
		PlayList.removeSong(req.session, req.body, function(message) {
			res.json({'erreur' : message});
		});
  });

  app.post('/addSongToFavorite', function(req, res) {
    console.log('musique ' + req.body.id_song + ' ajoutée au favoris par ' + req.session.pseudo);
    PlayList.addSongToFavorite(req.session, req.body.id_song, function(message) {
      res.json({'erreur' : message});
    });
  });

  app.post('/removeFromFavorite', function(req, res) {
    console.log('musique ' + req.body.id_song + ' enlevée au favoris par ' + req.session.pseudo);
    PlayList.removeFromFavorite(req.session, req.body.id_song, function(message) {
      res.json({'erreur' : message});
    });
  })

}
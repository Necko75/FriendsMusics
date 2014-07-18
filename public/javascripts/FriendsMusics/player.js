/******* 
PLAYER FUNCTIONS CLASSE
********/

/*

my_player = {

	media_ : undefined,
	indice_id : 0,
	type_ : undefined,
	cible : undefined,
  index_cible : undefined, // index de la musique selectionnée dans le DOM //
  id_playlist : undefined,
  id_playlist_played : undefined,
	class_play : "glyphicon-play",
  class_pause : "glyphicon-pause",
  song_selected : undefined,
  is_playing : false,
  widget_soundcloud : undefined,
  has_changed_playlist : false,
  play_sound_animation : $('<section class = "play_sound_animation"><span></span><span></span><span></span></section>'),
  pause_sound_animation : $('<section class = "pause_sound_animation"><span>.</span><span>.</span><span>.</span></section>'),

	init : function() {
		var that = this;

    if (this.id_playlist == undefined || this.id_playlist == "")
      this.id_playlist = $('input[name="real_id_playlist"]').val();

    if (that.has_changed_playlist === false)
    {
      var iframeElement   = document.querySelector('iframe');
      var iframeElementID = iframeElement.id;
      this.widget_soundcloud = SC.Widget(iframeElement);
      this.initMediaPlayer('audio');
    }
    else
    {
      // on réaffiche l'animation css3 pour la musique sélectionnée préalablement si il y eu //
      if (that.cible != undefined)
        that.enable_animation_on_song_played_before();
    }
	},

  add_animation_current_playing : function() {
    var that = this;

    that.cible.find('.pause_sound_animation').remove();
    that.cible.append(that.play_sound_animation);
    that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
  },

  add_animation_current_pausing : function() {
    var that = this;

    that.cible.find('span:first').removeClass('playing').addClass('pause').removeClass(that.class_pause).addClass(that.class_play);
    that.cible.find('.play_sound_animation').remove();
    that.cible.append(that.pause_sound_animation);
  },

  enable_animation_on_song_played_before : function() {
    var that = this;

    console.log("index cible : " + that.index_cible);
    console.log("id_playlist played : " + that.id_playlist_played);
    console.log("actuel id playlist : " + that.id_playlist);

    if (that.id_playlist == that.id_playlist_played)
    {
      that.cible = $('.choose_music').eq(that.index_cible);
      that.add_animation_current_playing();
    }
  },

  play_soundcloud : function(url, target, index_) {

    var that = this;

    if (index_ === that.index_cible)
    {
      if (that.is_playing === true)
      {
        that.widget_soundcloud.pause();
        that.is_playing = false;
        that.add_animation_current_pausing();
      }
      else
      {
        that.widget_soundcloud.play();
        that.is_playing = true;
        that.add_animation_current_playing();
      }
      return (false);
    }

    if (that.indice_id !== 0)
      $('#mep_' + this.indice_id).remove();

    that.widget_soundcloud.bind(SC.Widget.Events.READY, function() {
      $('#sc-widget').show();
      that.widget_soundcloud.load(url, {
        show_artwork: true,
        auto_play : true,
      });
    });

    if (that.cible !== undefined)
    {
      that.cible.find('.play_sound_animation').remove();
      that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play);
      that.cible.removeClass('playing').removeClass('pause');
    }

    that.cible = target;
    that.index_cible = index_;
    that.is_playing = true;
    that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
    that.cible.append(that.play_sound_animation);

    // on branche l'evenement finish du son chargé //
    that.widget_soundcloud.bind(SC.Widget.Events.FINISH, function() {
      that.cible.removeClass('border-selected');
      that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
      var new_cible_parent = that.cible.parents('.track').next();
      that.cible = new_cible_parent.find('.choose_music');
      that.checkIfChangePage(index_);
      that.cible.trigger('click');
    });

  },

  checkIfChangePage : function(index_) {

    var last_index = parseInt($('.jp-current').text()) * 4;
    if (index_ == last_index)
    {
      var $currentPage = Math.ceil(index_ / 5);
      $("div.holder").jPages($currentPage + 1);
    }
  },

  play_video : function(url, type, target, index_) {

      console.log('ici');
      var that = this;

      if ((index_ == that.index_cible) && (that.id_playlist == that.id_playlist_played))
      {
        console.log('iic');
        // même item selectionné, on doit savoir si on met pause ou lecture //
        // si playing, mettre pause, sinon on play //
        if (that.is_playing === true)
        {
          // on met pause //
          that.pause();
        }
        else
        {
          // on met play //
          that.play();
        }
        // on return false pour ne pas aller plus loin //
        return false;
      }

      if (that.widget_soundcloud != undefined)
      {
        $('#sc-widget').hide();
        that.widget_soundcloud.pause();
      }

      that.type_ = "youtube_player";
      //that.build_player_video();
      $('#player_video').find('source').attr('src', url);
      this.initMediaPlayer('video', index_);
      $('#mep_0').hide();

      setTimeout(function() {
        that.autoplay_youtube_video(that);
      }, 1650);

      if (that.cible !== undefined)
      {
        that.cible.find('.play_sound_animation').remove();
        that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play);
        that.cible.removeClass('playing').removeClass('pause');
      }
      that.cible = target;
      that.index_cible = index_;
      that.is_playing = true;
      that.cible.find('span:first').removeClass('pause').addClass('playing').removeClass(that.class_play).addClass(that.class_pause);
      that.cible.append(that.play_sound_animation);
    },
    
   pause : function() {
      var that = this;

      that.media_.pause();
      that.is_playing = false;
      that.add_animation_current_pausing();
   },

   play : function() {
      var that = this;

      that.media_.play();
      that.is_playing = true;
      that.add_animation_current_playing();
   },

	 initMediaPlayer : function(type_, index_) {
      var that = this;

      console.log('rentre');
      console.log(type_);
      return (false);
      var $div = $('#player_audio');
      if (type_ == "video")
        $div = $('#player_video');

      $div = "#player_video";
      that.media_ = new MediaElementPlayer($div, {
        features : ['playpause','loop','current','progress','duration','volume'],
		  success : function(mediaElement, domObject) {

        console.log('création média');
        /*
        mediaElement.addEventListener('ended', function() {

            console.log('fin du media');
            if ($('#mep_' + that.indice_id).find('.mejs-controls').find('.mejs-loop-button').hasClass('mejs-loop-off'))
            {
              // on charge le prochain son //
              that.cible.removeClass('border-selected');
              that.cible.find('span:first').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
              var new_cible_parent = that.cible.parents('.track').next();
              that.cible = new_cible_parent.find('.choose_music');
              that.cible.trigger('click');
              that.checkIfChangePage(index_);
            }
          });
        }
      });
    },

    build_player_video : function() {
      var that = this;

      if (this.indice_id > 0 && $('#mep_' + this.indice_id).size() > 0)
        $('#mep_' + this.indice_id).remove();
      var type = "";
      if (that.type_ == "dailymotion_player")
        type = "video/dailymotion";
      else if (that.type_ == "youtube_player")
        type = "video/youtube";
      $('#mep_0').after('<video width="770" height="400" id="player_video"><source type="'+type+'" src="#" /></video>');
      this.indice_id++;
    },

    autoplay_youtube_video : function(obj) {

      $('.mejs-overlay-button').trigger('click');

      // on test si la musique s'est bien chargé et avance //
      setTimeout(function() {
        obj.checkIfPlaying(obj);
      }, 3200);
    },

    checkIfPlaying : function(obj) {

      if (obj.media_.media.duration <= 0 && obj.media_.media.currentTime <= 0)
      {
        obj.cible.removeClass('border-selected');
        obj.cible.find('span:first').removeClass(obj.class_pause).addClass(obj.class_play).removeClass('playing');
        var new_cible_parent = obj.cible.parents('.track').next();
        obj.cible = new_cible_parent.find('.choose_music');
        obj.cible.trigger('click');
      }
    },
}
*/

/********
END PLAYER FUNCTIONS
********/

my_player = {

  media_ : undefined,
  indice_lecteur : 0,
  cible_ : undefined,
  play_sound_animation : $('<section class = "play_sound_animation"><span></span><span></span><span></span></section>'),
  pause_sound_animation : $('<section class = "pause_sound_animation"><span>.</span><span>.</span><span>.</span></section>'),
  id_song_played : undefined,
  id_playlist_played : undefined,
  id_playlist_selected : undefined, // id de playlist selectionné mais pas forécément celle qui est joué, ex : lorsqu'on cherche un son sur une autre playlist //
  widget_soundcloud : undefined,
  class_play : "glyphicon-play",
  class_pause : "glyphicon-pause",

  first_time : true,

  // si l'utilisateur clique sur un lien provenant d'une notification //
  play_video_shared : function(url, type) {

      var that = this;
      
      if ($('#mep_' + this.indice_lecteur).size() > 0)
          $('#mep_' + this.indice_lecteur).remove();
      $('#contentPlayerVideo').append('<video width="770" height="400" id="player_video"><source type="video/youtube" src="#" /></video>');
      $('#player_video').find('source').attr('src', url);

      this.media_ = new MediaElementPlayer("#player_video", {
          features : ['playpause','loop','current','progress','duration','volume'],
          success : function(mediaElement, domObject) {
              setTimeout(function() {
                that.autoplay_youtube_video();
              }, 2000);
              if (that.first_time === true)
                  that.first_time = false;
              else
                  that.indice_lecteur++;
          }
      });
  },

  play_video : function(url, type, target, index, id_current_playlist)
  {
      var that = this;

      console.log('index de la musique : ' + index);
      console.log('id de la playlist : ' + id_current_playlist);
      console.log('id de la playlist du dernier son joué : ' + this.id_playlist_played);

      if (index === this.id_song_played && this.cible_ != undefined && ((id_current_playlist == this.id_playlist_played) || this.id_playlist_played == undefined))
      {
          this.removeAllAnimations();
          if (this.cible_.hasClass("playing"))
             this.pauseMedia();
          else if (this.cible_.hasClass("pausing"))
              this.playMedia();
      }
      else
      {
        if (this.cible_ != undefined)
            this.removeAllAnimations();
        if (this.widget_soundcloud != undefined)
        {
            $('#sc-widget').hide();
            this.widget_soundcloud.pause();
        }
        this.cible_ = target.parents('.row');
        this.beforeCreateMedia(url, type);
        this.createMedia();
        setTimeout(function() {
          that.autoplay_youtube_video();
        }, 2000);
        this.id_song_played = index;
        console.log(this.cible_.html());
        this.cible_.find('.span_reading').addClass(this.class_pause);
      }
  },

  play_soundcloud : function(url, target, index) {

      var that = this;

      $('#mep_' + this.indice_lecteur).remove();
      if (index === this.id_song_played && this.cible_ != undefined)
      {
          this.removeAllAnimations();
          if (this.cible_.hasClass("playing"))
             this.pauseMedia("soundcloud");
          else if (this.cible_.hasClass("pausing"))
              this.playMedia("soundcloud");
      }
      else
      {
          that.widget_soundcloud.bind(SC.Widget.Events.READY, function() {
              $('#sc-widget').show();
              that.widget_soundcloud.load(url, {
                show_artwork: true,
                auto_play : true,
              });
          });
          this.cible_ = target.parents('.row');
          this.id_song_played = index;
          this.play_animation();
          this.cible_.addClass("playing");

          // on branche l'evenement finish du son chargé //
          that.widget_soundcloud.bind(SC.Widget.Events.FINISH, function() {
            that.cible_.find('.span_reading').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
            that.cible_ = that.cible_.next();
            that.checkIfChangePage(index);
            that.cible_.find('.musicChosen').trigger('click');
          });
      }
  },

  getType : function(idtype) {

      if (idtype == 1)
        return ("video/youtube");
      else if (idtype == 3)
        return ("video/dailymotion");
  },

  beforeCreateMedia : function(url, type) {

      if ($('#mep_' + this.indice_lecteur).size() > 0)
          $('#mep_' + this.indice_lecteur).remove();
      $('#contentPlayerVideo').append('<video width="770" height="400" id="player_video"><source type="'+this.getType(type)+'" src="#" /></video>');
      $('#player_video').find('source').attr('src', url);
      this.play_animation();
  },

  createMedia : function() {

      var that = this;

      this.media_ = new MediaElementPlayer("#player_video", {
          features : ['playpause','loop','current','progress','duration','volume'],
          success : function(mediaElement, domObject) {
              if (that.first_time === true)
                  that.first_time = false;
              else
                  that.indice_lecteur++;
              mediaElement.addEventListener('ended', function() {                  
                    
                  // si l'utilisateur n'est pas sur sa playlist ou est joué l'actuel musique, alors il faut le rediriger vers elle //
                  $('#link_sound_selected').trigger('click');
                  setTimeout(function() {
                    // on charge le prochain son //
                    console.log('chargement du son suivant ..');
                    that.cible_.find('.span_reading').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
                    console.log(that.cible_);
                    that.cible_ = that.cible_.next();
                    console.log(that.cible_);
                    that.cible_.find('.musicChosen').trigger('click');
                    that.checkIfChangePage(that.id_song_played);
                  },500);
              });
          }
      });
  },

  autoplay_youtube_video : function() {

      $('.mejs-overlay-button').trigger('click');
      this.cible_.addClass("playing");
  },

  playMedia : function(filter) {

      if (filter == "soundcloud")
          this.widget_soundcloud.play();
      else
          this.media_.play();
      this.cible_.removeClass("pausing").addClass("playing");
      this.play_animation();
  },

  pauseMedia : function(filter) {

      if (filter == "soundcloud")
          this.widget_soundcloud.pause();
      else
          this.media_.pause();
      this.cible_.removeClass("playing").addClass("pausing");
      this.pause_animation();
  },

  play_animation : function() {

      this.cible_.find('.div_reading').append(this.play_sound_animation);
      this.cible_.find('.span_reading').removeClass(this.class_play).addClass(this.class_pause);
  },

  pause_animation : function() {

      this.cible_.find('.div_reading').append(this.pause_sound_animation);
      this.cible_.find('.span_reading').removeClass(this.class_pause).addClass(this.class_play);
  },

  removeAllAnimations : function() {

      $('.play_sound_animation, .pause_sound_animation').remove();
      this.cible_.find('span:first').removeClass(this.class_pause).addClass(this.class_play);
  },

  recreateAnimation : function() {

      console.log(this.id_song_played);
      this.cible_ = $('.choose_music').eq(this.id_song_played).addClass("playing");
      console.log(this.cible_);
      this.cible_.addClass("playing");
      this.play_animation();
  },

  checkIfChangePage : function(index_) {

    index_ -= 1;
    var last_index = parseInt($('.jp-current').text()) * 4;
    if (index_ == last_index)
    {
      var $currentPage = Math.ceil(index_ / 5);
      $("div.holder").jPages($currentPage + 1);
    }
  },

}

$(document).ready(function() {

  var iframeElement   = document.querySelector('iframe');
  var iframeElementID = iframeElement.id;
  my_player.widget_soundcloud = SC.Widget(iframeElement);
  $('#sc-widget').hide();

});







// FINN //
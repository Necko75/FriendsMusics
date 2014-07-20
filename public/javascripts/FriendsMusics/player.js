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

  play_video : function(musicClick, soundSelected, target)
  {
      var that = this;

      if (soundSelected === undefined || (musicClick.id !== soundSelected.id))
      {
          if (this.cible_ !== undefined)
          {
              this.cible_.removeClass('playing');
              this.removeAllAnimations();
          }
          this.stopSoundcloudPlayer();
          this.cible_ = target.parents('.track');
          this.beforeCreateMedia(musicClick.url, musicClick.type_source_id);
          this.createMedia();
          setTimeout(function() {
            that.autoplay_youtube_video();
          }, 2000);
          this.cible_.find('.span_reading').addClass(this.class_pause);
      }
      else
      {
          this.removeAllAnimations();
          $('#tracksListMusics').find('.track').each(function() {
              if ($(this).find('.choose_music').attr('id') == musicClick.id)
              {
                  if (that.cible_.hasClass("playing"))
                      that.pauseMedia();
                  else if (that.cible_.hasClass("pausing"))
                      that.playMedia();
              }
          });
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
            
            if (that.cible_.hasClass('choose_music'))
            {
               var parent = that.cible_.parents('.track');
               that.cible_ = parent.next();
            }
            else
              that.cible_ = that.cible_.next();

            //that.checkIfChangePage(index); NE MARCHE PAS
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
                    
                    // on charge le prochain son //
                    console.log('chargement du son suivant ..');
                    that.cible_.find('.span_reading').removeClass(that.class_pause).addClass(that.class_play).removeClass('playing');
                    console.log(that.cible_);
                    if (that.cible_.hasClass('choose_music'))
                    {
                       var parent = that.cible_.parents('.track');
                       that.cible_ = parent.next();
                    }
                    else
                      that.cible_ = that.cible_.next();
                    console.log(that.cible_);
                    that.cible_.find('.musicChosen').trigger('click');
                    //that.checkIfChangePage(that.id_song_played); NE MARCHE PAS
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
      this.cible_.find('.choose_music').find('.span_reading').removeClass(this.class_pause).addClass(this.class_play);
  },

  recreateAnimation : function(soundSelected) {
      var that = this;

      setTimeout(function() {
          if (soundSelected != undefined)
          {
            $('#tracksListMusics').find('.track').each(function() {
                if ($(this).find('.choose_music').attr('id') == soundSelected.id)
                {
                    $(this).addClass('playing');
                    that.cible_ = $(this);
                    that.play_animation();
                }
            });
          }
      }, 0);
  },

  stopSoundcloudPlayer : function() {
      var that = this;

      $('#sc-widget').hide();
      this.widget_soundcloud.pause();
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
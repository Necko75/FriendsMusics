angular.module('playlistModule').factory('funcFactory', function ($http) {

	return {
			findCurrentPaginationPage : function(divholder) {
				var page = 0;
				if ((my_player.id_song_played + 1) <= 8)
					page = 1;
				else
				{
					var page = (my_player.id_song_played + 1) / 8;
					var reste = (my_player.id_song_played + 1) % 8;
					if (reste > 0)
						page++;
					page = Math.floor(page);
				}
				divholder.jPages(page);
				return (true);
			}
		}
});

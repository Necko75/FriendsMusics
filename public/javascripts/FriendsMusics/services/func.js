angular.module('playlistModule').factory('funcFactory', function ($http, $rootScope) {

	return {

			paginator : undefined,

			findCurrentPaginationPage : function(divholder, index_) {
				var page = 0;
				if ((index_ + 1) <= 8)
					page = 1;
				else
				{
					var page = (index_ + 1) / 8;
					var reste = (index_ + 1) % 8;
					if (reste > 0)
						page++;
					page = Math.floor(page);
				}
				divholder.jPages(page);
				return (true);
			},

			createPagination : function (divholder) {
				var that = this;

				if (divholder.size() > 0 && this.paginator !== undefined)
					divholder.jPages("destroy");
				divholder.jPages({
					containerID : "tracksListMusics",
					perPage : 8,
					callback : function() {
						that.paginator = this;
					}
				});
			},

			getIndexOfSongSelected : function(soundSelected) {

				for (var i = 0; i < $rootScope.musics.length; i++)
					if (soundSelected.id === $rootScope.musics[i].id)
						return (i);
			}
		}
});

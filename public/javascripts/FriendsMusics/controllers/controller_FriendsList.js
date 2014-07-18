
playlistModule.directive('myPostNgInitDirective', function() {
		return function(scope, element, attrs) {
			scope.$emit('ngInitFinish');
		}
	});

playlistModule.controller('FriendsList', function FriendsList($scope, $location, playlistStorage, $compile, $rootScope) {

	$scope.friendList = [];
	$scope.array_chatboxes = new Array();

	$rootScope.socket.emit('new_user');

	$rootScope.socket.on('friendHasConnected', function(data) {
		console.log(data.user.pseudo + ' has connected');
		$('#friendslist').find('.infos_friend').each(function() {
			if ($(this).attr('index') == data.user.id)
				$(this).find('.state').removeClass('no_connected').addClass('connected');
		});
	});

	$rootScope.socket.on('friendHasDisconnected', function(data) {
		console.log(data.user.pseudo + ' has disconnected');
		$('#friendslist').find('.infos_friend').each(function() {
			if ($(this).attr('index') == data.user.id)
				$(this).find('.state').removeClass('connected').addClass('no_connected');
		});
	});

	$rootScope.socket.on('listFriendsConnected', function(data) {

		for (var i = 0; i < data.friends.length; i++)
		{
			$('#friendslist').find('.infos_friend').each(function() {
				if ($(this).attr('index') == data.friends[i])
					$(this).find('.state').removeClass('no_connected').addClass('connected');
			});
		}
	});

	// signal recu : nouveau message tchat recu d'un ami //
	$rootScope.socket.on('tchatMessage', function(data) {
		$scope.addMessage(data);
	});

	$rootScope.socket.on('friendIsTyping', function(data) {
		$scope.friendIsTyping(data, true);
	});

	$rootScope.socket.on('friendStopedTyping', function(data) {
		$scope.friendIsTyping(data, false);
	});

	$rootScope.socket.on('proposeShareSong', function(data) {
		console.log('proposition de son : ' + data.song_id);
		// on met à jour le total notif //
		var $NbN = $('#shared_song_');
		$NbN.text(parseInt($NbN.text()) + 1);
		$('.nottifinormal').addClass("notinotg");
	});

	$scope.$on('ngInitFinish', function() {
		playlistStorage.setFriendsList($scope.friendList);
	});

	// signal envoyé par le controller notifications, l'utilisateur à cliqué sur un thread de discussion d'un ami à lui //
	// on ouvre donc leur fenetre tchatbox de discussion //
	$rootScope.$on('showTchatBoxFromThreadMessages', function(event, args, callback) {

		$scope.popupFriendConversation(args);
		callback();
	});

	$scope.popupFriendConversation = function(friend, callback) {

		// on check si la chatbox est déjà apparente //
		for (var i = 0; i < $scope.array_chatboxes.length; i++)
			if ($scope.array_chatboxes[i] == friend.id)
				return (false);
		console.log(friend);

		playlistStorage.chatBoxTemplateRequest(friend).success(function(template) {

	    	var template = $(template);
			var decal_ = 20;
			if ($scope.array_chatboxes.length > 0)
				var decal_ = 250 * $scope.array_chatboxes.length;
			template.removeAttr("style").css({"bottom" : "0px", "right" : decal_ + 'px', "display" : "block"});
			$scope.array_chatboxes.push(friend.id);
			angular.element('#allChatBox').append($compile(template)($scope));

			// on scroll pour être situé sur les derniers messages //
			angular.forEach(angular.element('.chatbox_'), function(value, key) {
				var attr_private = angular.element(value).attr('attr_private');
				if (attr_private == friend.id)
					console.log(angular.element(value).find('.chatboxcontent').scrollTop(400)); // 400 = taille max du bloc chargé //
			});

			if (callback)
				callback(template);
		});
	}

	// lorsque l'utilisateur recoit un nouveau message tchat //
	$scope.addMessage = function(data) {
		var iduserFrom = data.iduserFrom;
		var message = data.message;
		var pseudo = data.pseudo;

		console.log('message recu : ' + data.message);

		var $box = undefined;
		$('.chatbox_').each(function() {
			var attr_private = $(this).attr('attr_private');
			if (attr_private == iduserFrom)
			{
				$box = $(this);
				return ;
			}
		});

		if ($box === undefined) // on ouvre une fenêtre de discussion //
			$scope.popupFriendConversation({id:iduserFrom, pseudo:pseudo}, function(box) {});
		else
		{
			$box.find('.chatboxcontent').append('<p><b style ="color:red;">'+ pseudo +' : </b>' + message + '</p>');
			var $conT = $box.find('.chatboxcontent');
			$conT.scrollTop($conT.offset().top + 50);
		}

		// on met à jour la div messages_received sur la barre de notifs (div facebook maindiv) //
		var $d = $('.facebook').find('#messages_received');
		$d.text(parseInt($d.text()) + 1);
		$('.facebook').find('.messagenormal').removeClass('messagenormal').addClass('notimesg');
	}

	$scope.friendIsTyping = function(data, is) {

		var iduserFrom = data.iduserFrom;
		var pseudo = data.pseudo;

		$('.chatbox_').each(function() {
			var attr_private = $(this).attr('attr_private');
			if (attr_private == iduserFrom)
				$box = $(this);
		});

		if (is)
		{
			if ($box.find('.chatboxcontent').find('.typing').size() > 0)
				return;
			$box.find('.chatboxcontent').append('<p class = "typing"><b>'+ pseudo +' : </b>is typing something ...</p>');
		}
		else
			$box.find('.chatboxcontent').find('.typing').remove();
	}
});
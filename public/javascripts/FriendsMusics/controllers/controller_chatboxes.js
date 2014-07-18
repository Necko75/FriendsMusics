
angular.module('playlistModule').directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event, element) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });
                    event.preventDefault();
                }
            });
        };
    });

playlistModule.controller('chatBoxes', function chatBoxes($scope, $location, playlistStorage) {

	$scope.emitMessage = function($event, message, event) {

        $scope.socket.emit('message', {id_user_to_speak : $(event.target).attr("attr_private"), message : message});
        var $b = $(event.target).parent().parent().find('.chatboxcontent');
        $b.append('<p><b>Moi : </b>'+ $scope.message +'</p>');
        $b.scrollTop($b.offset().top + 100);
        $scope.message = "";
	}

    $scope.closeTchatBox = function($event, event) {

        var p = $($event.target).parents(".chatbox_");
        var attr = p.attr("attr_private");
        var indice = $scope.array_chatboxes.indexOf(attr);
        p.remove();
        $scope.array_chatboxes.splice(indice, 1);
    }

    // event fired by keypress //
    $scope.isTypingAMessage = function(message, $event, event) {

        return (false); // un bug survient sur le tchat avec la socket typing ... //
        var p = $($event.target).parents(".chatbox_");
        var attr = p.attr("attr_private");
        var indice = $scope.array_chatboxes.indexOf(attr);

        if (message != '')
            $scope.socket.emit('isTyping', {id_user_to_speak : $($event.target).attr("attr_private")});
        else if (message == "") // suppression du message ou alors envoie du message //
        {
            $scope.socket.emit('isOverTyping', {id_user_to_speak : $($event.target).attr("attr_private")});
        }
    }
});
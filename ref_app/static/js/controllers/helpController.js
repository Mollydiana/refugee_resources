function helpController($scope, $firebase) {
    var ref = new Firebase("https://refugeeresources.firebaseio.com/");
    $scope.messages = $firebase(ref).$asArray();
    $scope.username = "guest" + Math.floor(Math.random() * 101);

    function updateScroll(){
        $('#example-message').scrollTop($('#example-message')[0].scrollHeight());
    }

    //ADD MESSAGE METHOD
    $scope.addMessage = function (e) {

        //LISTEN FOR RETURN KEY
        if (e.keyCode === 13 && $scope.msg) {
            //ALLOW CUSTOM OR ANONYMOUS USER NAMES
            var name = $scope.name || $scope.username;
            $scope.messages.$add({from: name, body: $scope.msg});
            //RESET MESSAGE
            $scope.msg = "";
            updateScroll();
        }
    }

}
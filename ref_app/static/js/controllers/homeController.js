function homeController($scope, $translate) {
    window.ModalEffects();

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);

    };


//    $scope.switches = {
//        sidebar: false,
//        language: false,
//        health: false,
//        housing: false,
//        help: false
//    };
//
//    $scope.toggle = function (btnIcon) {
//        $scope.switches[btnIcon] = !$scope.switches[btnIcon]
//    };

}

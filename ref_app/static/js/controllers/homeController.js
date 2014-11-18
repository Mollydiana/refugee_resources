function homeController($scope, $translate) {
    window.ModalEffects();

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);

    };
    $scope.languages = [
      {name: 'en'},
      {name:'sp'},
      {name: 'ar'},
      {name:'so'},
      {name:'hy'},
      {name:'ne'}
    ];

    $scope.appLang = $scope.languages[0];

    $scope.newLanguage = function(){
    $lang.name = $scope.appLang;
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

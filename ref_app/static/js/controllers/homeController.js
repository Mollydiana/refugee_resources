function homeController($scope) {

    $scope.switches = {
        sidebar: false,
        language: false,
        health: false,
        housing: false,
        help: false
    };

    $scope.toggle = function (btnIcon) {
        $scope.switches[btnIcon] = !$scope.switches[btnIcon]
    };

}

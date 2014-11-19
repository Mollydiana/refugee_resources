function languageController($scope, $translate, $location, $log) {
    $scope.appLang = null;

    $scope.languages = [
        {name: 'en'},
        {name: 'sp'},
        {name: 'ar'},
        {name: 'so'},
        {name: 'hy'},
        {name: 'ne'},
        {name: 'fr'}

    ];


    $scope.newLanguage = function () {
        console.log($scope.appLang);
        $translate.use($scope.appLang.name);
        $location.path('/');
    };

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}
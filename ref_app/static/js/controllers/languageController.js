function languageController($scope, $translate, $location, $log) {
    $scope.appLang = null;

    $scope.languages = [
        {
            language: 'English',
            shortKey: 'en'
        },
        {
            language: 'Spanish',
            shortKey: 'sp'
        },
        {
            language: 'Arabic',
            shortKey: 'ar'
        },
        {
            language: 'Somali',
            shortKey: 'so'
        },
        {
            language: 'Armenian',
            shortKey: 'hy'
        },
        {
            language: 'Nepali',
            shortKey: 'ne'
        },
        {
            language: 'French',
            shortKey: 'fr'
        }

    ];


    $scope.newLanguage = function () {
        console.log($scope.appLang);
        $translate.use($scope.appLang.shortKey);
        $location.path('/language/');
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
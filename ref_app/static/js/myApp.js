var app = angular.module('myApp', ["ngRoute", "firebase", "mobile-angular-ui"]);

    app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController}).
        when('/language/', {templateUrl: '/static/js/views/language.html', controller: languageController}).
//        when('/housing/', {templateUrl: '/static/js/views/housing.html', controller: housingController}).
        when('/help/', {templateUrl: '/static/js/views/help.html', controller: helpController}).
        when('/health/', {templateUrl: '/static/js/views/health.html', controller: healthController}).
        when('/modal/', {templateUrl: '/static/js/views/modal.html', controller: function() {window.ModalEffects()}}).
        otherwise({redirectTo: '/'});
}]);

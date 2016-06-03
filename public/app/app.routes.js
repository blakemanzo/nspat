var router = angular.module('app.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // notfound
    $urlRouterProvider.otherwise('/');

    // define states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/views/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .state('list', {
            url: '/list',
            templateUrl: '/app/views/list.html'
        });

    $locationProvider.html5Mode(true);

});
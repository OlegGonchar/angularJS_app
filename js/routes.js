(function(){
'use strict'
angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home'); 

    $stateProvider 
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })

    .state('add', {
        url: '/add',
        templateUrl: 'templates/add.html'
    })
    .state('edit', {
        url: '/edit',
        templateUrl: 'templates/edit.html'
    })

    .state('ukr', {
        url: '/ukr',
        templateUrl: 'templates/ukr.html'
    })
    .state('uk-add', {
        url: '/uk-add',
        templateUrl: 'templates/uk-add.html'
    })
    .state('uk-edit', {
        url: '/uk-edit',
        templateUrl: 'templates/uk-edit.html'
    });
    
    $locationProvider.html5Mode(true);
}
})()
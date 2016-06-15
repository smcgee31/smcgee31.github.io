angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'public/home/home.html',
        controller: 'homeCtrl'
    })
    .state('work', {
        url: '/work',
        templateUrl: 'public/work/work.html',
        controller: 'workCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'public/about/about.html',
        controller: 'aboutCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'public/contact/contact.html',
        controller: 'contactCtrl'
    });



});

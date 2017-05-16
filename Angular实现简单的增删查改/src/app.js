var app = angular.module("demoApp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: 'list',
        controller: 'listController'
    }).when("/add", {
        templateUrl: 'add',
        controller: 'addController'
    }).otherwise({
        redirectTo: '/'
    })
})

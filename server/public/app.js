var app = angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when ('/home', {
                templateUrl: 'home.html'
            })
            .when ('/products', {
                templateUrl: 'products.html'
            })
            .when ('/shopping', {
                templateUrl: 'shopping.html'
            })
            .when ('/contacts', {
                templateUrl: 'contacts.html'
            })
            .otherwise ({
                redirectTo: 'home.html'
            })
    })
angular.module('products.catalog', []).controller('catalogController', ['$scope', '$http', function ($scope, $http) {
    $http.get('categories.json').success(function (data) {
        $scope.categoriesList = data;
    });
}]);
angular.controller('SlideController', function ($scope) {
    $scope.slides = [
        {'image': 'img/dark_slide_image.jpg'},
        {'image': 'img/light_slide_image.jpg'}
    ];
    $scope.next = function () {
        var total = $scope.slides.length;
        if(total > 0) {
            $scope.$slideIndex = ($scope.slideIndex == total - 1);
        }
        else {
            $scope.$slideIndex + 1;
        }
    }
    $scope.play = function () {
        timeOut = $timeout (function () {
            $scope.next();
            $scope.play();
        }, 2000);
    }
});

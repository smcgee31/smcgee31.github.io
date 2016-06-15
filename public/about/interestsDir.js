angular.module('app')
.directive('interestsDir', function() {

    return {
        templateUrl: 'public/about/interests.html',
        restrict: 'AE',
        controller: function($scope, aboutSvc) {
            $scope.interests = aboutSvc.getInterests();
        }
    };



});

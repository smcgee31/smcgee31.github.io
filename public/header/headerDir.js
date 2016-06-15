angular.module('app')
.directive('headerDir', function() {

    return {
        templateUrl: 'public/header/header.html',
        restrict: 'AE',
        controller: function($scope) {

            $scope.visible  = false;
            $scope.thanks = false;

            // $scope.toggleContact = function() {
            //     $scope.contactsON = !$scope.contactsON;
            // };

            $scope.toggleEmail = function() {
                $scope.email = !$scope.email;
            };

            $scope.thanks = function() {
                $scope.visible = !$scope.visible;
                $scope.thanks = !$scope.thanks;
            };

        }
    };




});

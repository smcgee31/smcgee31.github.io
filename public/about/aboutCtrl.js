angular.module('app')
.controller('aboutCtrl', function($scope, aboutSvc) {

    $scope.skills = aboutSvc.getSkills();



});

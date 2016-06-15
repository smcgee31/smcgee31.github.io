angular.module('app')
.controller('workCtrl', function($scope, workSvc) {

    $scope.projects = workSvc.getProjects();



});

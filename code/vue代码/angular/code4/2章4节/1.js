/**
 * Created by Administrator on 2017/4/13.
 */

var myapp = angular.module('myapp', ['ui.router']);
var controller11 = function ($scope) {
    $scope.hehe = false;
    $scope.isshow = function () {
        $scope.hehe = !$scope.hehe
    }
};

myapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('1111');
    $stateProvider
        .state('1111', {
            url: '/1111',
            templateUrl: 'tpls/11.html',
            controller: controller11
        })
        .state('1111.list', {
            url: '/b',
            templateUrl: 'tpls/11.list.html'
        })

});

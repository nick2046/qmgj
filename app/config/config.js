var app = angular.module('qmgj',['ui.router']);
app.config(['$stateProvider',"$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('index');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'app/view/index.html',
			controller:'indexController'
		})
		.state('reg',{
			url:'/reg',
			templateUrl:'app/view/reg.html'
		})
}]);
app.controller('indexController',["$scope",function($scope){

}]);
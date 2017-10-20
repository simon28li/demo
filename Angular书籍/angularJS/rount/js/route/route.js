var app=angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/homePage',{
		templateUrl:'page/homePage.html',//定义模板
		controller:'homePageCtrl'//定义控制器
	})
	.when('/stuInfo',{
		templateUrl:'page/stuInfo.html',//定义模板
		controller:'stuInfoCtrl'//定义控制器
	})
	.when('/collect',{
		templateUrl:'page/collect.html',//定义模板
		controller:'collectCtrl'//定义控制器
	})
	.when('/removeRepeat',{
		templateUrl:'page/removeRepeat.html',//定义模板
		controller:'removeRepeatCtrl'//定义控制器
	})
	.when('/listCheck',{
		templateUrl:'page/listCheck.html',//定义模板
		controller:'listCheckCtrl'//定义控制器
	})
	.otherwise({//可以进行重定向  ，一般重定向到主页或登录页注册页
		//重定向的优势： 首先 ，首页自动显示了，其次，如果url地址出错  或者找不到会自动定位到首页
		redirectTo:'/homePage'
	});
	
}]);
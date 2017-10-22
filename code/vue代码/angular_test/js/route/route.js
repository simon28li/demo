define(['app'],function(app){
	return app.config(['$routeProvider',function($routeProvider){
			$routeProvider
				.when('/',{
					//营业网店的页面的路由
					templateUrl:'js/views/wd/list.html',	//相对应index.html的路径
					controller:'wdListCtrl'
				})
				.when('/wdxq/:num',{
					//网店详情页面
					templateUrl:'js/views/wd/wd.html',
					controller:'wdxqCtrl'
				});
		}]);	
});


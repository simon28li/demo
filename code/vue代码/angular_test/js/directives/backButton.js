define(['jquery','app'],function($,app){
	//自定义回退按钮的指令
	app.directive('backButton',['$window',function($window){
		return {
			restrict:'A',
			link:function(scope,ele,attr){
				$(ele).on('click',function(){
					//回退功能	
					console.log($window);
					$window.history.back();//回到上一页
				});
			}		
		}
	}]);
	
});
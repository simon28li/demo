//第一个参数：当前模块要依赖的其他模块列表
//第二个参数：依赖模块加载完成后的回调函数，该函数内要将当前模块返回
define(['app'],function(app){
	return app.controller('wdxqCtrl',['$scope','$http','$sce','$rootScope','$routeParams',function($scope,$http,$sce,$rootScope,$routeParams){
		$rootScope.headTitle=$rootScope.title="网点详情";
		$rootScope.backBol=$rootScope.favBol=true;
		
		$scope.xq={};
		$scope.myHTML='';	//表格文本
		
		///////////////////////////////////////
		$scope.boxShow=false;	//控制电话对话框显示和隐藏的变量
		$scope.toggleShow=function(){
			//切换拨号对话框
			$scope.boxShow=true;
		}
		
		//获取路由参数
		var num=$routeParams.num;
		if(!(num<=2&&num>=0)){
			num='';
		}
		///////////////////////////////////////
		$http.get('json/wdxq'+num+'.json').success(function(data){
			//console.log(data);
			$scope.xq=data;
			$scope.myHTML=$sce.trustAsHtml(data.branch_remark);//表格数据
		})
	}]);	
});
define(['app'],function(app){
	return app.controller('wdListCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
			$scope.branchs=[];
			//http://localhost/www/phpdata/data/getWdListData.php?callback=JSON_CALLBACK
			/*
			 接口文档：
			 	url
			 	请求方式：GET
			 	参数：
			 		参数名称		参数含义
			 	返回的数据：
			 		数据名称      		数据含义
			 	
			 * 
			 * */
			
			$http.get('json/yywd.json').success(function(data){
				$scope.branchs=data.branchs;
			});		
			var i=4;
			$scope.getMore=function(){
				i++;
				var obj= {
				            "branch_id": i,
				            "branch_type": "社区支行",
				            "branch_name": "平安银行广州奥林匹克花园社区支行",
				            "branch_logo": "http://pic.baike.soso.com/p/20140211/20140211112444-1429123385.jpg",
				            "branch_tel": "020-38889807,020-38889808",
				            "branch_addr": "广州市番禺区桥南街市良路9号番禺奥林匹克花园运动城21号商铺"
				       };
				//请求更多的数据
				$scope.branchs.push(obj);
			}
			
			//headTitle / title / backBol /favBol
			$rootScope.headTitle=$rootScope.title='营业网点';
			$rootScope.backBol=$rootScope.favBol=false;
			
		}]);	
});

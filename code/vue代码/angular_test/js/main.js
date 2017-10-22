//配置要加载的模块路径
require.config({
	paths:{
		"angular":"libs/angular.min",
		"jquery":"libs/jquery203",
		"angular-route":"libs/angular-route.min",
		
		"app":"app",
		"route":"route/route",
		"wdListCtrl":"controllers/wdListCtrl",
		"wdxqCtrl":"controllers/wdxqCtrl",
		"backButton":"directives/backButton",
		"favBtn":"directives/favBtn",
		
		"geo":"directives/geo",
		"geoFactory":"services/geoFactory",
		"geoFactory2":"services/geoFactory2"
	},
	shim:{
		"angular":{
			exports:"angular"
		},
		"angular-route":{
			exports:"angular-route",//定义当前模块输出名称
			deps:["angular"]	//定义当前模块依赖的其他模块列表，也就意味者当前模块会在所依赖模块后面执行
		}
	}	
});
//开始程序的入口逻辑
require(['jquery',"angular","angular-route",'app','route','wdListCtrl','wdxqCtrl','backButton','favBtn','geo','geoFactory','geoFactory2'],function($,angular){
	$(function(){
		//注册模块
		angular.bootstrap(document,['pinganApp']);
	})
});

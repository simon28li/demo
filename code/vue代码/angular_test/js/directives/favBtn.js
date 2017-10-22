define(['jquery','app'],function($,app){
	//自定义favBtn指令
	app.directive('favBtn',function(){
		return {
			restrict:'EA',
			template:'<a ng-show="favBol" class="btn-fav"><span><span></a>',
			replace:true,
			link:function(scope,elem,attr){
				$(elem).on('click',function(){
					//console.log('aaa');
					//第一步：将当前背景切换成实心图
					$(elem).toggleClass('btn-fav-select');
					//第二步：将当前页面的数据通过http发送给后台记住当前为收藏状态
				});
			}
		}
		
	});
	
});
//alert(66666);
//require配置: 配置模块路径
require.config({
	paths:{
		//配置各个模块的下载路径
		"angular":'libs/angular.min',	//文件后缀不要写
		"jquery":"libs/jquery203",
		"person":"myObject"
	},
	//原有插件，没有遵循AMD规范的插件，需要通过shim来指定依赖关系
	shim:{
		"angular":{
			exports:"angular"	//表示当前模块的输出名称
		}
	}
});
//使用模块
//第一个参数：当前模块所要依赖的其他模块列表
//第二个参数：模块加载完成后的回调函数
require(['jquery','angular','person'],function($,angular,person){
	//模块加载完成后回调的函数
	$(function(){
		console.log(angular);
		
		person.show();
	});
});

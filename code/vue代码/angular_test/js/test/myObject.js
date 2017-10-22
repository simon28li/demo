//第一个参数：当前模块所要依赖的其他模块列表
//第二个参数：函数内返回当前模块对象
define([],function(){
	return {
			name:'hello',
			show:function(){
				alert(this.name);
			}	
		}
})
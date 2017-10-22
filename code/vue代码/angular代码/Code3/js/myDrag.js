//自定义指令
angular.module('myDragModule',[])
.directive('myDrag',function(){
	return {
		restrict:'A',
		link:function($scope,element,attr){
			//DOM操作
			//设置元素的定位属性
			$(element).css('position','absolute');
			
			$(element).on('mousedown',function(ev){
				var disX=ev.pageX-$(element).offset().left;
				var disY=ev.pageY-$(element).offset().top;
				
				//鼠标按下
				$(document).on('mousemove',function(ev){
					var x=ev.pageX;
					var y=ev.pageY;
					$(element).css({
						left:x-disX,
						top:y-disY
					})
				});
				//鼠标抬起时，取消鼠标移动事件
				$(document).on('mouseup',function(){
					$(document).off();//取消事件
				});
			});
		}
	}
});

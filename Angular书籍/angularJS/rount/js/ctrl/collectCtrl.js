app.directive('mySc', function() {
	return {
		restrict: 'EA',
		scope: {
			myId: '@',
			myData: '='

		},
		link: function(scope, element, attr) {
			var onoff = true;
			element.delegate('button', 'click', function() {

				if(onoff) {
					$(this).html('已收藏').css('background', 'red');
					onoff = false;
				} else {
					$(this).html('收藏').css('background', '');
					onoff = true;
				}

			});

		},

		replace: true,
		template: '<li class="list-group-item" id="{{myId}}"><span ng-repeat="data in myData" >{{data.title}}</span><button class="btn btn" ng-repeat="data in myData">{{data.content}}</button></li>' //添加模板文件
	}
});
app.controller('collectCtrl', ['$scope', '$location', '$routeParams',function($scope, $location, $routeParams) {

	$scope.$location = $location;
	//console.log($routeParams);
	//$scope.num = $routeParams.num;
	$scope.data1 = [
		{ "title": "a、震惊！温州老板带着他的小姨子跑了！！", "content": "收藏" }

	];
	$scope.data2 = [
		{ "title": "b、这篇文章改变了30万人的命运！！不看后悔终生。。。", "content": "收藏" }

	];
	$scope.data3 = [
		{ "title": "c、中国最厉害的20个最美景点，知道一个算你牛!", "content": "收藏" }

	];
	$scope.data4 = [
		{ "title": "d、万万没想到，这样吃鸡蛋对身体竟然有害处!。。", "content": "收藏" }

	];

}]);
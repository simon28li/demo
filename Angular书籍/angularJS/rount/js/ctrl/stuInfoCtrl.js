app.controller('stuInfoCtrl',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
	
	$scope.$location = $location;
	//console.log($routeParams);
	//$scope.num = $routeParams.num;
	$scope.arr = [{ name: '谢大大', age: 22, sex: '男', address: '湖南' },
				{ name: '王二小', age: 30, sex: '男', address: '广东' },
				{ name: '李狗嗨', age: 32, sex: '女', address: '广西' },
				{ name: '刘全蛋', age: 17, sex: '男', address: '海南' },
				{ name: '彭酱', age: 20, sex: '女', address: '江西' },
				{ name: '刘sir', age: 27, sex: '男', address: '湖北' },
				{ name: '杨十郎', age: 32, sex: '男', address: '河南' },
				{ name: '黄尚', age: 19, sex: '男', address: '北京' },
				{ name: '毛毛', age: 22, sex: '女', address: '天津' },
				{ name: '吴阿三', age: 30, sex: '男', address: '四川' },
				{ name: '张非', age: 26, sex: '男', address: '湖南' },
				{ name: '成是', age: 20, sex: '女', address: '湖北' },
				{ name: '杜子腾', age: 27, sex: '女', address: '江西' },
				{ name: '关二爷', age: 20, sex: '男', address: '广东' }
			];
			$scope.param = 'name';
			$scope.order = '';
			$scope.flag = true;
			$scope.change = function(param) {
				$scope.param = param;
				if($scope.order == '') {
					$scope.order = '-';
					$scope.flag = false;
				} else {
					$scope.order = '';
					$scope.flag = true;
				}
			}

		
	
}]);

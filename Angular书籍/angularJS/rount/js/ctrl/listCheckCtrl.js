app.controller('listCheckCtrl',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
	
	$scope.$location = $location;
	//console.log($scope.$location);
	//$scope.num = $routeParams.num;
		
			
				
				$scope.regText = {
					regVal:'default',
					regList:[
						{'name':'default','tips':'请输入用户名'},
						{'name':'required','tips':'用户名不能为空'},
						{'name':'pattern','tips':'用户名必须以字母开头'},
						{'name':'minlength','tips':'用户名长度需要小于6位'},
						{'name':'maxlength','tips':'用户名长度不能大于12位'},
						
						{'name':'pass','tips':'√'}
					]
				};
				//密码
				$scope.regPsw = {
					regVal:'default',
					regList:[
						{'name':'default','tips':'请输入密码'},
						{'name':'required','tips':'密码不能为空'},
						{'name':'pattern','tips':'密码不能包含特殊字符'},
						{'name':'minlength','tips':'密码长度需要大于等于6'},
						{'name':'pass','tips':'√'}
					]
				};
				
				//电话号码
				$scope.regTel={
					regVal:'default',
					regList:[
						{'name':'default','tips':'请输入您的电话号码'},
						{'name':'required','tips':'电话不能为空'},
						{'name':'pattern','tips':'你的电话号码位数不正确'},
						{'name':'pass','tips':'√'}
					]
				};
				//邮箱
				
					$scope.regEmail={
					regVal:'default',
					regList:[
						{'name':'default','tips':'请输入您的邮箱地址'},
						{'name':'required','tips':'邮箱不能为空'},
						{'name':'pattern','tips':'你的邮箱不合法'},
						{'name':'pass','tips':'√'}
					]
				};
				
				$scope.change = function(reg,err){
				    for(var attr in err){
						if(err[attr] == true){
							$scope[reg].regVal = attr;
							return ;
						}	
					}
			
					$scope[reg].regVal  = 'pass';
				}
			}]);

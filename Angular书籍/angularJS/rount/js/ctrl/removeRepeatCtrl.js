app.factory('arrRemove',function(){
				return{
					remove:function(data){
						var arr=data.split(',');
						for (var i=0;i<arr.length;i++) {
							for (var j=i+1;j<arr.length;j++) {
								if (arr[i]==arr[j]) {
									arr.splice(j,1);
									j--;
								} 
							}
						}
						return  arr.join() ;
					}
				}
			})



app.controller('removeRepeatCtrl',['$scope','$location','$routeParams','arrRemove',function($scope,$location,$routeParams,arrRemove){
	
	$scope.$location = $location;
	//console.log($routeParams);
	//$scope.num = $routeParams.num;
            $scope.data='';
			$scope.flag=true;
	   
		    //  alert(arrRemove.remove($scope.data))  
		      
		       $scope.change=function(str){
		       	 $scope.flag=true;
		       	$('#div').html(arrRemove.remove(str))
		     
	       }
			
}]);
	

//自定义指令
define(['app'], function (app) {
    app.directive('geo', ['geoFactory2', function (geoFactory2) {
        return {
            restrict: 'AE',//使用方式
            templateUrl: 'js/views/geo.html',
            replace: true,
            scope: {
                //隔离作用域
            },
            link: function (scope, elem, attr) {
                function geo() {
                    scope.a = geoFactory2().then(function (result) {
                        //成功回调段函数
                        console.log(result);
                        console.log(scope.a);
                        $('.geo').html(result.result.formatted_address);
                    });

                }


                scope.myRefresh = geo;
                geo();//直接调用一次
            }

        }

    }]);
});
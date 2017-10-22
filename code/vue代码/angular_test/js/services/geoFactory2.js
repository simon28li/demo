//自定义服务：
//	通过factory方法定义
//	通过provider方法定义
//  通过service方法定义
//	通过constant/value方法
define(['app'], function (app) {
    //自定义服务
    return app.factory('geoFactory2', ["$http", "$q", function ($http, $q) {
        //实现定位功能
        //1.发起地理位置信息的请求，得到当前的谷歌经纬度
        //	navigator.geoLocation.getCurrentPostion	//获取一次位置
        //	navigator.geoLocation.watchPosition	//每间隔一段时间获取一次位置
        //2.将谷歌的经纬度转换为百度经纬度
        //请求百度接口得到百度地理坐标
        //3.将百度经纬度通过百度api请求到实际的详细地址信息：中国广东省深圳市南山区大冲国际中心

        return function () {
            //创建异步对象
            var def = $q.defer();
            console.log(1)
            //1.发起地理位置请求
            navigator.geolocation.getCurrentPosition(function (pos) {
                //成功回调的函数
                var lng = pos.coords.longitude;//经度
                var lat = pos.coords.latitude;
                console.log(2)
                //2.将上面火星坐标转换为百度坐标
                $http.jsonp('http://api.map.baidu.com/geoconv/v1/?coords=' + lng + ',' + lat + '&from=1&to=5&ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=JSON_CALLBACK')
                    .success(function (data) {
                        console.log(3)
                        //坐标转换成功
                        //	data.result[0].y//经度	data.result[0].x//纬度
                        //3.将百度坐标转换详细地址信息
                        $http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=?&location=' + data.result[0].y + ',' + data.result[0].x + '&output=json&pois=0&callback=JSON_CALLBACK')
                            .success(function (result) {
                                console.log(4)
                                //result-->详细地址信息
                                def.resolve(result);//成功回调
                            })
                            .error(function (data, status) {
                                //弹出地址信息获取失败
                                alert('请求详细地址信息失败，状态码' + status);
                            });
                    })
                    .error(function (data, status) {
                        //弹出地址信息获取失败
                        alert('请求百度坐标失败，状态码' + status);
                    });

            }, function (error) {
                //失败回调函数
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("请打开定位功能！");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("不支持定位服务！");
                        break;
                    case error.TIMEOUT:
                        alert("请求超时！");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("未知异常！");
                        break;
                }

            }, {
                //timeout:5000,
                //enableHighAccuracy:true
            });

            //返回异步对象
            console.log(def.promise);
            return def.promise;

        }
    }]);
});
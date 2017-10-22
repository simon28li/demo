//自定义指令
angular.module('myTab', []).directive('myTab', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/tab.html',
        replace: true,
        scope: {
            datas: '=tabData'
        },
        link: function ($scope, elem, attr) {
            console.log(elem);
            //设置input的点击事件
            $(elem).delegate('input', 'click', function (ev) {
                //ev.target;//代表事件源
                //ev.delegateTarget 代表事件代理者
                //点击对应按钮时
                $(ev.target).addClass('active').siblings('input').removeClass('active');
                $(ev.delegateTarget).find('div').eq($(ev.target).index()).addClass('active').siblings('div').removeClass('active');
            });
        }
    }
});	
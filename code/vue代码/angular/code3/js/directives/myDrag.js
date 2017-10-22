angular.module('myDrag', [])
    .directive('myDrag', function () {
        //自定义指令
        return {
            restrict: 'A',
            link: function ($scope, elm, attr) {
                //设置元素为绝对定位
                elm.css('position', 'absolute');

                //DOM操作
                elm.on('mousedown', function (ev) {
                    //获取鼠标按下的坐标
                    var disX = ev.pageX - $(this).offset().left;
                    var disY = ev.pageY - $(this).offset().top;

                    //鼠标移动
                    $(document).on('mousemove.drag', function (ev) {
                        var x = ev.pageX;
                        var y = ev.pageY;
                        $(elm).css({
                            left: x - disX,
                            top: y - disY
                        })
                    });
                    //鼠标抬起
                    $(document).on('mouseup.drag', function () {
                        $(this).off('.drag');
                    });
                });
            }
        }
    });
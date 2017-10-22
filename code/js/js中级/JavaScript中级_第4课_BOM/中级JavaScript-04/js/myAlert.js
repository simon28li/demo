/**
 * 
 * 该插件用来组装登录框和遮罩
 *
 * @param {Object} width 请添加你的弹出层宽度
 * @param {Object} height 请添加你的弹出层高度
 * @param {Object} bgColor 请添加你的弹出层背景颜色
 */
var oLogin = document.createElement('div');
function showLogin(width, height, bgColor) {
	oLogin.setAttribute('id', 'login');
	oLogin.innerHTML = '<p>用户名<input type="text" /><p/>' +
		'<p>密　码<input type="password" /></p>' +
		'<input type="button" value="登录">' +
		'<div id="closeBtn">X</div>';
	oLogin.setAttribute("style", 'width: ' + width + ';height: ' + height + ';border: 1px solid black;position: absolute;z-index:20;background: ' + bgColor + ';');
	document.body.appendChild(oLogin);

	oLogin.style.top = (viewHeight() - oLogin.offsetHeight) / 2 + 'px';
	oLogin.style.left = (viewWidth() - oLogin.offsetWidth) / 2 + 'px';

	console.log(window.innerWidth);
	console.log(window.innerHeight);

	//1.遮罩可以放到body上,给他一个类名;
	//2.遮罩可以做一个fixed属性.一个跟着跑
	var oMark = document.createElement('div');
	oMark.setAttribute('id', 'mark');
	document.body.appendChild(oMark);
	var oClose = document.getElementById('closeBtn');
	//window.innerWidth,window.innerHeight;
	//document.documentElement.clientWidth;
	/**
	 * 关闭方法
	 */
	
	oClose.onclick = function(){
		document.body.removeChild(oLogin);
		document.body.removeChild(oMark);
	}
}

//我滑动也好,窗体大小变化也好 都会触发该方法
//当浏览器窗口发生变化的时候会触发该事件
window.onscroll = window.onresize = function() {
	oLogin.style.left = (viewWidth() - oLogin.offsetWidth) / 2 + getScrollX() + 'px';
	oLogin.style.top = (viewHeight() - oLogin.offsetHeight) / 2 + getScrollY() + 'px';
}
	/**
	 * 该方法用来拿到当前浏览器的宽度
	 */
function viewWidth() {
	return window.innerWidth || document.documentElement.clientWidth;
}

/**
 * 该方法用来拿到当前浏览器的高度
 */
function viewHeight() {
	return window.innerHeight || document.documentElement.clientHeight;
}

/*
 * 该方法用来拿到浏览器卷去的高度
 */
function getScrollY() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

/**
 * 该方法用来拿到浏览器卷去的宽度
 */
function getScrollX() {
	return window.pageXOffset || document.documentElement.scrollLeft;
}
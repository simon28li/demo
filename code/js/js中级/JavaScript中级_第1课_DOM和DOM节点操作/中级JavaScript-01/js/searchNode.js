/*本js文件封装用来查找元素或节点的方法*/

/**
 * 拿到第一个子元素节点
 * @param {Object} par 父元素节点
 */
function firstElement(par) {
	if(!par.firstChild){
		return false;
	}
	return par.firstElementChild ||
		(par.firstChild.nodeType == 1 ? par.firstChild : nextElement(par.firstChild));
}

/**
 * 拿到最后一个子元素节点
 * @param {Object} par 父元素节点
 */
function lastElement(par) {
	if(!par.lastChild){
		return false;
	}
	return par.lastElementChild ||
		(par.lastChild.nodeType == 1 ? par.lastChild : previousElement(par.lastChild));
}

/**
 * 拿到该对象的下一个元素节点
 * @param {Object} elem 操作的元素
 */
function nextElement(elem) {
	if(!elem.nextSibling){
		return false;
	}
	return elem.nextElementSibling ||
		(elem.nextSibling.nodeType == 1 ? elem.nextSibling : nextElement(elem.nextSibling));
}

/**
 * 拿到该对象的上一个元素节点
 * @param {Object} elem 操作的元素
 */
function prevElement(elem) {
	if(!elem.previousSibling){
		return false;
	}
	return elem.previousElementSibling ||
		(elem.previousSibling.nodeType == 1 ? elem.previousSibling : prevElement(elem.previousSibling));
}
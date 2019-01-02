/**
 * 设置元素类名
 */
export function setClass(ele, cls) {
	if (ele.hasOwnProperty('className')) {
		ele.className = cls;
	} else {
		ele.setAttribute('class', cls);
	}
}

/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
export function hasClass(ele, cls) {
	return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}
/**
 *
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */
export function addClass (el, cls) {
	if (el.classList) {
		const clsArr = cls.split(' ')
		clsArr.map(cl => el.classList.add(cl))
	} else {
		var cur = ' ' + (el.getAttribute('class') || '') + ' '
		if (cur.indexOf(' ' + cls + ' ') < 0) {
			setClass(el, (cur + cls).trim())
		}
	}
}

/**
 *
 * @param {HTMLElement} el dom元素
 * @param {String} cls 类名
 */
export function removeClass (el, cls) {
	if (el.classList) {
		el.classList.remove(cls)
	} else {
		var cur = ' ' + (el.getAttribute('class') || '') + ' '
		var tar = ' ' + cls + ' '
		while (cur.indexOf(tar) >= 0) {
			cur = cur.replace(tar, ' ')
		}
		setClass(el, cur.trim())
	}
	if (!el.className) {
		el.removeAttribute('class')
	}
}

/**
 *
 * @desc   现金额转大写
 * @param  {Number, String} n
 * @return {String}
 */
export const upcaseMoney = (n) => {
  n = parseFloat(n)
  var fraction = ['角', '分'];
  var digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  var head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  var s = ''
  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整')
}

/**
  * @desc XSS字符转义，将html标记转为 实体html编码
  * @param {String} markupStr [要转义的字符串]
 */
export const replaceXSS = (markupStr) => {
  var _ENCODE_HTML_RULES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  }
  var _MATCH_HTML = /[&<>'"]/g
  function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c
  }
  return markupStr === undefined ? '' : String(markupStr).replace(_MATCH_HTML, encode_char)
}

/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export const parseQueryString = (url) => {
  url = url == null ? window.location.href : url
  var search = url.substring(url.lastIndexOf('?') + 1)
  if (!search) {
    return {}
  }
  while (search[search.length - 1] == '&') {
    search = search.slice(0, search.length - 1)
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

/**
 * @desc unicode字符串base64编码
 * @param {String} str
 */
export const b64EncodeUnicode = (str) => {
	return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
		  return String.fromCharCode('0x' + p1)
    })
  )
}

/**
 * @desc unicode字符串base64解码
 * @param {String} str
 */
export const b64DecodeUnicode = (str) => {
  return decodeURIComponent(
    atob(str).split('').map((c) => {
		  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join('')
  )
}

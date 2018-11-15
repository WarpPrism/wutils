/**
  * @desc XSS字符转义
  * @param {String} markupStr [要转义的字符串]
 */
export const replaceXSS = (markupStr) => {
  var _ENCODE_HTML_RULES = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  };
  var _MATCH_HTML = /[&<>'"]/g;
  function encode_char(c) {
      return _ENCODE_HTML_RULES[c] || c;
  };
  return markupStr === undefined ? '' : String(markupStr).replace(_MATCH_HTML, encode_char);
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
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

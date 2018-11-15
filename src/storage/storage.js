// 本地存储相关模块
/**
 * 存储cookie值
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 * @param {String} path
 * @param {String} domain
 * @param {Boolean} secure
 */
export const setCookie = (name, value, days, path, domain, secure) => {
  if (!name || !value) return false;
  let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (days) {
    let exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    cookieText += "; expires=" + exp.toGMTString();
  }
  if (path) {cookieText += "; path=" + path;}
  if (domain) {cookieText += "; domain=" + domain;}
  if (secure) {cookieText += "; secure";}
  document.cookie = cookieText;
  return true;
}

/**
 * 根据name获取cookie value
 * @param {String} name
 */
export const getCookie = (name) => {
  if (!name) return ''
  let cookieName = encodeURIComponent(name) + "=";
  let cookieStart = document.cookie.indexOf(cookieName);
  let cookieValue = null;
  if (cookieStart > -1) {
    let cookieEnd = document.cookie.indexOf(";", cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);
  }
  return cookieValue;
}

/**
 * 移除cookie
 */
export const removeCookie = (name, path, domain, secure = false) => {
  if (!name) return false;
  let value = "";
  let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  let exp = new Date();
  exp.setTime(exp.getTime() + 0);
  cookieText += "; expires=" + exp.toGMTString();
  if (path) {cookieText += "; path=" + path;}
  if (domain) {cookieText += "; domain=" + domain;}
  if (secure) {cookieText += "; secure";}
  document.cookie = cookieText;
  return true;
}
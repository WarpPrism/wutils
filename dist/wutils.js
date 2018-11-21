(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.wutils = factory());
}(this, (function () { 'use strict';

  /**
   * 彩色控制台打印
   * @param {*} str
   * @param {*} colorStyle
   */
  var chalkPrint = function chalkPrint(str) {
    var colorStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'green';

    if (str && typeof str === 'string') {
      console.log('%c' + str, "font-weight: bold; color: ".concat(colorStyle));
    }
  };

  var _print = /*#__PURE__*/Object.freeze({
    chalkPrint: chalkPrint
  });

  /**
   *
   * @desc 随机生成颜色
   * @return {String}
   */
  var randomColor = function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  };
  /**
   *
   * @desc 生成指定范围随机数
   * @param  {Number} min
   * @param  {Number} max
   * @return {Number} integer
   */

  var randomInt = function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  };
  /**
   * @desc 生成指定长度的随机字符串
   * @param {*} len
   */

  var randomString = function randomString(len) {
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var tmp = '';

    for (var i = 0; i < len; i++) {
      tmp += str.charAt(Math.round(Math.random() * str.length));
    }

    return tmp;
  };

  var _random = /*#__PURE__*/Object.freeze({
    randomColor: randomColor,
    randomInt: randomInt,
    randomString: randomString
  });

  /**
   * 数组判断
   */

  var isArray = function isArray() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (Array.isArray) {
      return Array.isArray(arr);
    } else {
      return Object.prototype.toString.call(arr) === '[object Array]';
    }
  };
  /**
   * @description 数组快速排序
   * @param {Array} arr
   * @param {String} key 按对象的属性进行排序
   */

  var quickSortArr = function quickSortArr() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!isArray(arr)) {
      chalkPrint('[quickSortArr] argument is not Array.', 'red');
      return [];
    } else if (arr.length <= 1) {
      return arr;
    } else {
      var middle = Math.floor(arr.length / 2);
      var pivot = arr.splice(middle, 1)[0];
      var left = [];
      var right = [];

      for (var i = 0; i < arr.length; i++) {
        if (key && pivot.hasOwnProperty(key)) {
          if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        } else {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
      }

      return quickSortArr(left, key).concat([pivot], quickSortArr(right, key));
    }
  };
  /**
   * 数组去重
   * @param {*} arr
   */

  var uniqueArr = function uniqueArr() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!isArray(arr)) {
      chalkPrint('[uniqueArr] argument is not Array.', 'red');
      return [];
    } else if (arr.length <= 1) {
      return arr;
    } else {
      var result = [];
      var hash = {};

      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var exist = false;
        Object.keys(hash).forEach(function (k) {
          if (item === hash[k]) {
            exist = true;
            return;
          }
        });

        if (!exist) {
          hash[i] = item;
          result.push(item);
        }
      }

      return result;
    }
  };
  /**
   * @desc 随机乱序
   * @param {Array} arr
   * @return {Array}
   */

  var shuffleArr = function shuffleArr() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!isArray(arr)) {
      chalkPrint('[shuffleArr] argument is not Array.', 'red');
      return [];
    }

    var _arr = arr.slice();

    for (var i = 0, len = _arr.length; i < len; i++) {
      var j = randomInt(0, i);
      var temp = _arr[i];
      _arr[i] = _arr[j];
      _arr[j] = temp;
    }

    return _arr;
  };
  /**
   * 数组二分搜索算法，二分搜索适合在大量数据中搜索。如果数组长度小，直接用arr.indexOf()即可
   * @param {Array} arr 要搜索的数组
   * @param {Any} target 目标值
   * @return {Number} 数组下标
   */

  var binarySearchArr = function binarySearchArr() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var target = arguments.length > 1 ? arguments[1] : undefined;

    if (!isArray(arr)) {
      chalkPrint('[binarySearchArr] argument is not Array.', 'red');
      return -1;
    } // arr前提要是从小到大排列的数组


    arr = quickSortArr(arr);
    var bottom = 0;
    var top = arr.length - 1;
    var position;

    while (bottom < top) {
      var middle = Math.floor((bottom + top) / 2);

      if (arr[middle] === target) {
        position = middle; // console.log("Find target at position: " + position);

        return position;
      } else if (arr[middle] < target) {
        bottom = middle + 1;
      } else if (arr[middle] > target) {
        top = middle;
      }
    }

    return position;
  };

  var _array = /*#__PURE__*/Object.freeze({
    isArray: isArray,
    quickSortArr: quickSortArr,
    uniqueArr: uniqueArr,
    shuffleArr: shuffleArr,
    binarySearchArr: binarySearchArr
  });

  /**
   *
   * @param {*} timestamp
   * @param {*} format
   * @param {*} isPhpTimeStamp
   */
  var formatDate = function formatDate(timestamp, format) {
    var isPhpTimeStamp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (isPhpTimeStamp) {
      date = date * 1000;
    }

    var date = new Date(timestamp);
    var map = {
      // 'y': date.getFullYear(),
      'M': date.getMonth() + 1,
      'd': date.getDate(),
      'h': date.getHours(),
      'm': date.getMinutes(),
      's': date.getSeconds(),
      'S': date.getMilliseconds(),
      'q': Math.floor((date.getMonth() + 3) / 3) // 季度

    };
    format = format.replace(/([yMdhmsSq])+/g, function (all, t) {
      var v = map[t];

      if (v !== undefined) {
        if (all.length > 1) {
          v = '0' + v;
          v = v.substr(v.length - 2);
        }

        return v;
      } else if (t === 'y') {
        return (date.getFullYear() + '').substr(4 - all.length);
      }

      return all;
    });
    return format;
  };

  var _date = /*#__PURE__*/Object.freeze({
    formatDate: formatDate
  });

  /**
   *
   * @desc 判断元素是否有某个class
   * @param {HTMLElement} ele
   * @param {String} cls
   * @return {Boolean}
   */
  function hasClass(ele, cls) {
    return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
  }
  /**
   *
   * @param {HTMLElement} el dom元素
   * @param {String} cls 类名
   */

  function addClass(el, cls) {
    if (el.classList) {
      var clsArr = cls.split(' ');
      clsArr.map(function (cl) {
        return el.classList.add(cl);
      });
    } else {
      var cur = ' ' + (el.getAttribute('class') || '') + ' ';

      if (cur.indexOf(' ' + cls + ' ') < 0) {
        setClass(el, (cur + cls).trim());
      }
    }
  }
  /**
   *
   * @param {HTMLElement} el dom元素
   * @param {String} cls 类名
   */

  function removeClass(el, cls) {
    if (el.classList) {
      el.classList.remove(cls);
    } else {
      var cur = ' ' + (el.getAttribute('class') || '') + ' ';
      var tar = ' ' + cls + ' ';

      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }

      setClass(el, cur.trim());
    }

    if (!el.className) {
      el.removeAttribute('class');
    }
  }

  var _dom = /*#__PURE__*/Object.freeze({
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass
  });

  // throttle: pls. use lodash.throttle
  // debounce: pls. use lodash.debounce

  var _function = /*#__PURE__*/Object.freeze({

  });

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var _arguments = arguments;

  /**
   * 判断是否是纯对象
   * @param {*} value
   */
  var isPlainObject = function isPlainObject(value) {
    if (_typeof(value) != 'object' || Object.prototype.toString.call(value) != '[object Object]') {
      return false;
    }

    if (Object.getPrototypeOf(value) === null) {
      return true;
    }

    var proto = value;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(value) === proto;
  };
  /**
   * 判断是否是空对象
   * @param {*} obj
   */

  var isEmptyObj = function isEmptyObj() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!isPlainObject(obj)) {
      return false;
    }

    for (var prop in obj) {
      return false;
    }

    return true;
  };
  /**
   * @desc jQuery extend method
   * @desc jQuery.extend( [deep ], target, object1 [, objectN ] )
   * @desc 该方法会修改target对象本身
   */

  var extend = function extend() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = _arguments[0] || {},
        i = 1,
        length = _arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = _arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && typeof target !== 'function') {
      target = {};
    } // Extend jQuery itself if only one argument is passed
    // No jQuery, let this = {}


    if (i === length) {
      target = {};
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = _arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name]; // Prevent never-ending loop

          if (target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            target[name] = extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };
  /**
   *
   * @desc   对象转换成 查询字符串
   * @param  {Object} obj
   * @return {String}
   */

  var stringfyQueryString = function stringfyQueryString(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
      var value = obj[key];

      if (value instanceof Array) {
        for (var i = 0; i < value.length; ++i) {
          pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
        }

        continue;
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return pairs.join('&');
  };

  var _object = /*#__PURE__*/Object.freeze({
    isPlainObject: isPlainObject,
    isEmptyObj: isEmptyObj,
    extend: extend,
    stringfyQueryString: stringfyQueryString
  });

  /**
   * 获取操作系统类型
   */
  var getOS = function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';
    if (/mac/i.test(appVersion)) return 'MacOSX';
    if (/win/i.test(appVersion)) return 'windows';
    if (/linux/i.test(appVersion)) return 'linux';
  };
  /**
   * 获取浏览器类型
   */

  var getBrowser = function getBrowser() {
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0; // 根据关系进行判断

    if (sys.ie) return 'IE: ' + sys.ie;
    if (sys.edge) return 'EDGE: ' + sys.edge;
    if (sys.firefox) return 'Firefox: ' + sys.firefox;
    if (sys.chrome) return 'Chrome: ' + sys.chrome;
    if (sys.opera) return 'Opera: ' + sys.opera;
    if (sys.safari) return 'Safari: ' + sys.safari;
    return 'Unkonwn';
  };
  /**
   * 判断是否是微信环境
   */

  var isWeixin = function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  };

  var _platform = /*#__PURE__*/Object.freeze({
    getOS: getOS,
    getBrowser: getBrowser,
    isWeixin: isWeixin
  });

  /**
   *
   * @desc   判断是否为邮箱地址
   * @param  {String}  str
   * @return {Boolean}
   */
  function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
  }
  /**
   *
   * @desc  判断是否为身份证号
   * @param  {String|Number} str
   * @return {Boolean}
   */

  function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
  }
  /**
   *
   * @desc   判断是否为手机号
   * @param  {String|Number} str
   * @return {Boolean}
   */

  function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
  }
  /**
   *
   * @desc   判断是否为URL地址
   * @param  {String} str
   * @return {Boolean}
   */

  function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
  }

  var _regexp = /*#__PURE__*/Object.freeze({
    isEmail: isEmail,
    isIdCard: isIdCard,
    isPhoneNum: isPhoneNum,
    isUrl: isUrl
  });

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
  var setCookie = function setCookie(name, value, days, path, domain, secure) {
    if (!name || !value) return false;
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    if (days) {
      var exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + exp.toGMTString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }

    if (domain) {
      cookieText += "; domain=" + domain;
    }

    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
    return true;
  };
  /**
   * 根据name获取cookie value
   * @param {String} name
   */

  var getCookie = function getCookie(name) {
    if (!name) return '';
    var cookieName = encodeURIComponent(name) + "=";
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;

    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);

      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }

      cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);
    }

    return cookieValue;
  };
  /**
   * 移除cookie
   */

  var removeCookie = function removeCookie(name, path, domain) {
    var secure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!name) return false;
    var value = "";
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    var exp = new Date();
    exp.setTime(exp.getTime() + 0);
    cookieText += "; expires=" + exp.toGMTString();

    if (path) {
      cookieText += "; path=" + path;
    }

    if (domain) {
      cookieText += "; domain=" + domain;
    }

    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
    return true;
  };

  var _storage = /*#__PURE__*/Object.freeze({
    setCookie: setCookie,
    getCookie: getCookie,
    removeCookie: removeCookie
  });

  /**
    * @desc XSS字符转义
    * @param {String} markupStr [要转义的字符串]
   */
  var replaceXSS = function replaceXSS(markupStr) {
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
    }
    return markupStr === undefined ? '' : String(markupStr).replace(_MATCH_HTML, encode_char);
  };
  /**
   *
   * @desc   url参数转对象
   * @param  {String} url  default: window.location.href
   * @return {Object}
   */

  var parseQueryString = function parseQueryString(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf('?') + 1);

    if (!search) {
      return {};
    }

    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  };

  var _string = /*#__PURE__*/Object.freeze({
    replaceXSS: replaceXSS,
    parseQueryString: parseQueryString
  });

  var wutils = Object.assign({}, _array, _date, _dom, _function, _object, _platform, _print, _random, _regexp, _storage, _string);

  return wutils;

})));

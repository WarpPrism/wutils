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

  var printModule = /*#__PURE__*/Object.freeze({
    chalkPrint: chalkPrint
  });

  /**
   *
   * @desc 随机生成颜色
   * @return {String}
   */
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
   * 数组判断
   */

  var isArray = function isArray() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return Array.isArray(arr);
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

  var shuffleArr = function shuffleArr(arr) {
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
   * 数组二分搜索算法
   * @param {Array} arr 要搜索的数组
   * @param {Any} target 目标值
   * @return {Number} 数组下标
   */

  var binarySearchArr = function binarySearchArr(arr, target) {
    if (!isArray(arr)) {
      return;
    } // arr前提要是从小到大排列的数组


    arr = quickSort(arr);
    var bottom = 0;
    var top = arr.length - 1;
    var position;

    while (bottom < top) {
      var middle = Math.floor((bottom + top) / 2);

      if (arr[middle] == target) {
        position = middle;
        console.log("Find target at position: " + position);
        return position;
      } else if (arr[middle] < target) {
        bottom = middle + 1;
      } else if (arr[middle] > target) {
        top = middle;
      }
    }

    return position;
  };

  var arrayModule = /*#__PURE__*/Object.freeze({
    isArray: isArray,
    quickSortArr: quickSortArr,
    uniqueArr: uniqueArr,
    shuffleArr: shuffleArr,
    binarySearchArr: binarySearchArr
  });

  var wutils = Object.assign({}, arrayModule, printModule);

  return wutils;

})));

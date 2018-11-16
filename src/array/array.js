import { chalkPrint } from '../print/print.js'
import { randomInt } from '../random/random.js'

/**
 * 数组判断
 */
export const isArray = (arr = []) => {
  if (Array.isArray) {
    return Array.isArray(arr)
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
}

/**
 * @description 数组快速排序
 * @param {Array} arr
 * @param {String} key 按对象的属性进行排序
 */
export const quickSortArr = (arr = [], key = '') => {
  if (!isArray(arr)) {
    chalkPrint('[quickSortArr] argument is not Array.', 'red');
    return [];
  } else if (arr.length <= 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let pivot = arr.splice(middle, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
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
}

/**
 * 数组去重
 * @param {*} arr
 */
export const uniqueArr = (arr = []) => {
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
}

/**
 * @desc 随机乱序
 * @param {Array} arr
 * @return {Array}
 */
export const shuffleArr = (arr = []) => {
  if (!isArray(arr)) {
    chalkPrint('[shuffleArr] argument is not Array.', 'red');
    return [];
  }
  let _arr = arr.slice();
  for (let i = 0, len = _arr.length; i < len; i++) {
    let j = randomInt(0, i)
    let temp = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = temp
  }
  return _arr
};

/**
 * 数组二分搜索算法，二分搜索适合在大量数据中搜索。如果数组长度小，直接用arr.indexOf()即可
 * @param {Array} arr 要搜索的数组
 * @param {Any} target 目标值
 * @return {Number} 数组下标
 */
export const binarySearchArr = (arr = [], target) => {
  if (!isArray(arr)) {
    chalkPrint('[binarySearchArr] argument is not Array.', 'red');
    return -1;
  }
  // arr前提要是从小到大排列的数组
  arr = quickSortArr(arr);
  let bottom = 0;
  let top = arr.length - 1;
  let position;

  while (bottom < top) {
    let middle = Math.floor((bottom + top) / 2);
    if (arr[middle] === target) {
      position = middle;
      // console.log("Find target at position: " + position);
      return position;
    } else if (arr[middle] < target) {
      bottom = middle + 1;
    } else if (arr[middle] > target) {
      top = middle;
    }
  }

  return position;
}

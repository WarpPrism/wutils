import { chalkPrint } from '../print/print.js'
import { randomInt } from '../random/random.js'

/**
 * @description 数组快速排序
 * @param {Array} arr
 * @param {String} key 按对象的属性进行排序
 */
export const quickSortArr = (arr = [], key = '') => {
  if (!Array.isArray(arr)) {
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
  if (!Array.isArray(arr)) {
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
export const shuffleArr = (arr) => {
  if (!Array.isArray(arr)) {
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

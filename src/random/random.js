/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
export const randomColor = () => {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 *
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number} integer
 */
export const randomInt = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
}

/**
 * @desc 生成指定长度的随机字符串
 * @param {*} len
 */
export const randomString = (len) => {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var tmp = '';
  for(var i = 0; i < len; i++) {
    tmp += str.charAt(Math.round(Math.random() * str.length));
  }
  return tmp;
}

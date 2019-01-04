// 黑科技、奇技淫巧

/**
 * 给所有dom元素增加彩色边框
 */
export const $outlineAnything = () => {
  if (window && window.document) {
    [].forEach.call($$("*"),function(a){
      a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
    })
  }
}

/**
 * 单行写一个评级组件
 * @param {*} rate 评几分 0-10
 */
export const $getRate = (rate) => {
	return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
}

/**
 * 生成动态不重复的一个32位的唯一标识
 */
export const $uuid = () => {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0;
    let v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}

/**
 * 判断质数
 * @param {Number} n 数字
 */
export const $isPrime = (n) => {
  return !(/^.?$|^(..+?)\1+$/).test('1'.repeat(n))
}

/**
 * 睡眠 e.g. await sleep(1000);
 * @param {Number} time 毫秒
 */
export const $sleep = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
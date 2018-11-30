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
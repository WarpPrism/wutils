/**
 * @desc underscore 防抖，在等待n秒后，触发函数。如果在n秒内再次触发了这个函数，则重新计时，直到n秒后触发
 * @param {Function} func
 * @param {Number} wait 延迟：毫秒
 * @param {Boolean} immediate 是否立即执行，等同lodash的leading
 */
export function _debounce(func, wait, immediate) {
  let timeout
  let result
  let debounced = function() {
    let context = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}
/**
 * @desc underscore 节流 如果你持续触发事件，每隔一段时间，只执行一次事件。
 * @param {Function} func
 * @param {Number} wait
 * @param {Object} options  leading 代表首次是否执行，trailing 代表结束后是否再执行一次
 */
export function _throttle(func, wait, options) {
  let timeout, context, args, result
  let previous = 0
  if (!options) options = {}

  let later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  let throttled = function() {
    let now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
          clearTimeout(timeout)
          timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
    }
    return result
  }
  throttled.cancel = function() {
    clearTimeout(timeout)
    previous = 0
    timeout = context = args = null
  }
  return throttled
}
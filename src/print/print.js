/**
 * 彩色控制台打印
 * @param {*} str
 * @param {*} colorStyle
 */
export const chalkPrint = (str, colorStyle = 'green') => {
  if (str && typeof str === 'string') {
    console.log('%c' + str, `font-weight: bold; color: ${colorStyle}`);
  }
}

/**
 * 彩色控制台打印
 * @param {*} str
 * @param {*} colorStyle
 */
export const chalkPrint = (str, colorStyle = 'green') => {
  str = toString(str) || ''
  console.log('%c' + str, `font-weight: bold; color: ${colorStyle}`);
}

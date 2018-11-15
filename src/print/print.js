export const chalkPrint = (str, colorStyle = 'green') => {
  console.log('%c' + str, `font-weight: bold; color: ${colorStyle}`);
}
/**
 *
 * @param {*} timestamp
 * @param {*} format
 * @param {*} isPhpTimeStamp
 */
export const formatDate = (timestamp, format = 'yyyy.MM.dd hh:mm:ss', isPhpTimeStamp = false) => {
  if (isPhpTimeStamp) {
		date = date * 1000;
	}
  let date = new Date(timestamp)
  let map = {
    // 'y': date.getFullYear(),
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
    'S': date.getMilliseconds(),
    'q': Math.floor((date.getMonth() + 3) / 3) // 季度
  }
  format = format.replace(/([yMdhmsSq])+/g, (all, t) => {
    var v = map[t];
		if(v !== undefined){
			if(all.length > 1){
				v = '0' + v;
				v = v.substr(v.length-2);
			}
			return v;
		}else if(t === 'y'){
			return (date.getFullYear() + '').substr(4 - all.length);
		}
		return all;
  })
  return format;
}
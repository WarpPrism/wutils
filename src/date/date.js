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

/**
 * @desc 解析时间戳，并返回年月日等信息
 * @param {*} timestamp
 */
export const getDateObj = (timestamp) => {
  if (!timestamp || typeof timestamp !== 'number' || typeof timestamp !== 'string') {
    timestamp = +new Date()
  }
  let date = new Date(timestamp)
  return {
    'year': date.getFullYear(),
    'month': date.getMonth() + 1,
    'day': date.getDate(),
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds(),
    'millsecond': date.getMilliseconds(),
    'quarter': Math.floor((date.getMonth() + 3) / 3)
  }
}

/**
 * 时间格式化
 * 这里传入的参数是日期和格式化字符串的类型，默认可以传入date类型或者字符类型的日期，cFormat为格式化模板字符串,
 * 如果是日期时间戳，则转换为标准date日期格式并预先转换成年月日时分秒这种格式化对象。再针对这个对象的年月日时分秒星期来通过正则匹配和替换。
 * 
 * 使用方法:
 * console.log(formatParseTime(new Date()))                          //print 2019-12-16 11:10:31
 * console.log(formatParseTime(new Date(),'{y}-{m}-{d}'))            //print 2019-12-16
 * console.log(formatParseTime(new Date(),'{y}/{m}/{d}'))            //print 2019/12/16
 * console.log(formatParseTime(new Date(),'{y}'))                    //print 2019
 * console.log(formatParseTime(new Date(),'{h}:{i}:{s}'))            //print 11:14:31
 * console.log(formatParseTime(new Date(),'{y}-{m}-{d} 星期 {a}'))   //print 2019-12-16 星期 一
 * console.log(formatParseTime(new Date('2019/12/11')))              //print 2019-12-11 
 * console.log(formatParseTime('2019-12-11 12:00:00'))               //print 2019-12-11 12:00:00
 * console.log(formatParseTime(new Date().getTime()))                //print 2019-12-16 11:20:17
 * 
 * @author joyceZhang 迁移
 * @date 2019-12-24 09:54
 * @param {date|number} time date类型或者字符类型的日期或者时间戳  
 * @param {String} cFormat  格式化模板字符串
 * 
 * @return {*}
 */
const formatParseTime = (time, cFormat) => {
	if (arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if (('' + time).length === 10) time = parseInt(time) * 1000
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}
/**
 * 获取时间是一位数，则补一个0
 * @author joyceZhang 迁移
 * @param {Sting}  
 * @return {String}
 */
const formatAppendZero = str => {
	return (String(str).length == 1 ? '0' : '') + str;
}
/**
 * 获取N久之前的时间
 * @author joyceZhang 迁移
 * @param {Number} time 时间戳
 * 
 * @return {String}
 */
const formatTimeLine = timestamp => {

	let curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
	let timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

	let curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
	let tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

	let Y = tmDate.getFullYear(),
		m = tmDate.getMonth() + 1,
		d = tmDate.getDate();
	let H = tmDate.getHours(),
		i = tmDate.getMinutes(),
		s = tmDate.getSeconds();

	if (timestampDiff < 60) { // 一分钟以内
		return "刚刚";
	} else if (timestampDiff < 3600) { // 一小时前之内
		return Math.floor(timestampDiff / 60) + "分钟前";
	} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
		return '今天' + formatAppendZero(H) + ':' + formatAppendZero(i);
	} else {
		let newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
		if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
			return '昨天' + formatAppendZero(H) + ':' + formatAppendZero(i);
		} else if (curDate.getFullYear() == Y) {
			return formatAppendZero(m) + '月' + formatAppendZero(d) + '日 ' + formatAppendZero(H) + ':' + formatAppendZero(i);
		} else {
			return Y + '年' + formatAppendZero(m) + '月' + formatAppendZero(d) + '日 ' + formatAppendZero(H) + ':' +
				formatAppendZero(i);
		}
	}
}

/**
 * 将时间转成时间戳
 * @param {String} str 时间
 */
const formatDateToTimestamp = str => {
	return new Date(time.replace(/-/g, '/')).getTime()
}

export {
	formatParseTime,
	formatTimeLine,
	formatDateToTimestamp
}

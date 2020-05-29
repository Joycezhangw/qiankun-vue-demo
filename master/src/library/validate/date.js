import {isNaN} from "./number"

/**
 * 判断是否是时间格式
 * @param {Object} date
 */
export function isDate(date){
     Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())
}
/**
 * 比较时间,时间1是否小于时间2
 * @param {Object} timeOne 时间
 * @param {Object} timeTwo 时间
 */
export function compareTimeOneLessTwo(timeOne, timeTwo) {
	// 判断 timeOne 和 timeTwo 是否
	return new Date(timeOne.replace(/-/g, '/')).getTime() < new Date(timeTwo.replace(/-/g, '/')).getTime()
}
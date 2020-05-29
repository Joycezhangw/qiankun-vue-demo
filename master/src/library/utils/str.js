/**
 * 计算字符的长度
 * @author joyceZhang 迁移
 * @param {String} str 字符 
 * @return {Number}
 */
const strLen = str => {
	if (!str) return 0;
	//返回字符串中全角字符的数组，然后用length计算出数目，如果没有匹配的则返回null，这个时候就使用空字符""，然后再加上字符串的length就是区分中英文的字符串的长度了
	var len = str.match(/[^\x00-\xff]/g); //匹配Ascii码大于255字符
	return str.length + (len ? len.length : 0)

}

/**
 * 去掉字符串左右空格
 * 
 * @author joyceZhang 迁移
 * 
 * @param {String} str 字符 
 * 
 * @return {String}
 */
const strTrimLOrR = str => {
	if (!str) return '';
	return str.replace(/(^\s*)|(\s*$)/g, "")
}

/**
 * 去除字符串所有空格
 * 
 * @author joyceZhang 迁移
 * @param {String}   str 字符串
 * 
 * @return {String}
 */
const strAllTrim = str => {
	if (!str) return '';
	return str.replace(/\s|\xA0/g, "")
}

/**
 * 全局替换某个字符为另一个字符
 * 
 * @author joyceZhang 迁移
 * 
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 * 
 * @return {String}
 */
const strReplace = (str, valueOne, valueTwo) => {
	if (!str) return '';
	return str.replace(new RegExp(valueOne, 'g'), valueTwo)
}

/**
 * 判断字符是否是最小和最大之间
 * @param {String} val 
 * @param {number} min 
 * @param {number} max 
 */
const strLenLimit = (str, min, max) => {
	let len = strLen(str);
	return !(len < min || len > max)
}


export {
	strLen,
	strTrimLOrR,
	strReplace,
	strAllTrim
}

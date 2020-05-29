/**
 * 仅显示银行卡号后四位,其他*代替
 * 
 * @author joyceZhang 迁移
 * @param {String} str 银行卡号
 * 
 * @return {String}
 */
const strHideBankNo = str => {
    if (!str) return '';
    return str.replace(/\s/g, '').replace(/(\d{4})\d+(\d{4})$/, "**** **** **** $2")
}

/**
 * 字符每4位数一个间隔
 * 
 * @author joyceZhang 迁移
 * 
 * @param {String} str 字符串  
 * 
 * @return {String}
 */
const strFourSeparate = str => {
    if (!str) return '';
    return str.replace(/(\s)/g, '').replace(/(\d{4})/g, '$1 ').replace(/\s*$/, '');
}

/**
 * 友好显示数字排名，或者点赞数量，浏览数量
 * @param {*} num 
 */
const strRankToString = (num = 0) => {
    if (num >= 10000) {
        return Math.floor(num / 10000 * 100) / 100 + 'w'
    } else if (num >= 1000) {
        return Math.floor(num / 1000 * 100) / 100 + 'k'
    } else {
        return num;
    }
}


export {
    strHideBankNo,
    strFourSeparate,
    strRankToString
}

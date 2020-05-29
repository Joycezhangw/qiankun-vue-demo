import {
    strLen,
    strTrimLOrR
} from "@/library/utils/str"
/**
 * 判断18位身份证上面的出生日期是否正确
 */
const isBrithBy18IdCard = idCard => {
    let year = idCard.substring(6, 10),
        month = idCard.substring(10, 12),
        day = idCard.substring(12, 14),
        temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题   
    if (temp_date.getFullYear() != parseFloat(year) ||
        temp_date.getMonth() != parseFloat(month) - 1 ||
        temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 验证是否是中国公民身份证号
 * 
 * @author joyceZhang 迁移
 * 
 * @param {String}  str 公民身份证号
 * 
 * @return {Boolean} 
 */
const is18IdCard = str => {
    const WI_ID_CODE = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子   
    const VALIDE_ID_CODE = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0; // 声明加权求和变量   
    if (str[17].toLowerCase() == 'x') {
        str[17] = 10; // 将最后位为x的验证码替换为10方便后续操作   
    }
    for (let i = 0; i < 17; i++) {
        sum += WI_ID_CODE[i] * str[i]; // 加权求和   
    }
    let valCodePosition = sum % 11; // 得到验证码所位置   
    if (str[17] == VALIDE_ID_CODE[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}

/**
 * 验证中国公民身份证号 - 对外
 * 
 * @return {Boolean} 
 */
const isIdCardValidate = idCard => {
    idCard = strTrimLOrR(idCard); //去掉字符串头尾空格                     
    if (strLen(idCard) == 18) {
        let a_idCard = idCard.split(""); // 得到身份证数组   
        if (isBrithBy18IdCard(idCard) && is18IdCard(a_idCard)) { //进行18位身份证的基本验证和第18位的验证
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
export {
    isIdCardValidate
}

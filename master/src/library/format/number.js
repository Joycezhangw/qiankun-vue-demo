/**
 * 格式化数字,是否支持小数点
 * @author joyceZhang 迁移
 * @param {String} value  要格式化得数值
 * @param {Object} type   格式化类型: number(带有小数点) | digit(纯数字没有任何小数点)
 * @return String
 */
export function formatNumber(value, type) {
    if (type === "number" || type === "digit") {
        value = value.toString()
        const allowDot = type === 'number'
        if (allowDot) {
            const dotIndex = value.indexOf('.');
            if (dotIndex > -1) {
                value = value.slice(0, dotIndex + 1) + value.slice(dotIndex).replace(/\./g, '');
            }
        }
        const regExp = allowDot ? /[^0-9.]/g : /\D/g;
        return value.replace(regExp, '')
    } else {
        return value
    }
}

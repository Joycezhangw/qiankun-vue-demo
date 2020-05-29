export default class DataType {
    /**
     * 判断当前目标是否是对象
     * @param {*} obj 
     */
    static isObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]"
    }

    /**
     * 检测目标是否是为空对象
     * @param {*} obj 
     */
    static isEmptyObject(obj) {
        return this.isObject(obj) && Object.keys(obj).length === 0
    }

    /**
     * 检测当前目标是否为数组
     * @param {*} arr 
     */
    static isArray(arr) {
        return Array.isArray(arr)
    }

    /**
     * 检测当前目标是否为空数组
     * @param {*} arr 
     */
    static isEmptyArray(arr) {
        return this.isArray(arr) && arr.length === 0
    }
}
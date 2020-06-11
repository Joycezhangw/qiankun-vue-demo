import DataType from "@/library/utils/dataType"
import {
    Button, Menu, Submenu, Input, MenuItem, MenuItemGroup, Scrollbar, Loading, Message, MessageBox, Avatar, Badge, Dropdown,
    DropdownMenu,
    DropdownItem,
    Breadcrumb,
    BreadcrumbItem
} from "element-ui"

/**
 * message 方法，默认可关闭
 * @param {*} options 消息 | 配置项
 */
export function ElMessage(options) {
    DataType.isObject(options) ? Message({ showClose: true, ...options }) : Message({ showClose: true, message: options })
}

/**
 * 确认框，默认确定取消按钮，警告状态
 * @param {*} msg 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
export function ElConfirm(msg, title = "提示", options = {}) {
    let _options = {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        ...options
    }
    return MessageBox.confirm(msg, title, _options)
}

export default {
    components: [
        Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar, Input, Badge,
        Avatar, Dropdown,
        DropdownMenu,
        DropdownItem,
        Breadcrumb,
        BreadcrumbItem
    ],
    serve: [Loading],
    methods: [ElMessage, ElConfirm]
}

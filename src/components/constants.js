import NormalInput from './NormalInput/index.vue'
import NormalSelect from './NormalSelect/index'
import NormalCascader from './NormalCascader/index'
import NormalDate from './NormalDate/index.vue'
import NormalPicker from './NormalPicker/index.vue'
import NormalRadio from './NormalRadio/index.vue'
import NormalCheckbox from './NormalCheckbox/index.vue'
import NormalInputNumber from './NormalInput/inputNumber.vue'

export const DATE_FORMAT = {
    year: 'yyyy',
    month: 'yyyy-MM',
    week: '',
    date: 'yyyy-MM-dd',
    datetime: 'yyyy-MM-dd',
    datetimerange: 'yyyy-MM-dd HH:mm:ss',
    daterange: 'yyyy-MM-dd'
}
export const EVENT_NAME = ['click', 'change', 'input', 'clear', 'clear', 'blur', 'focus']
export const TYPE_COMPONENTS_NAME = {
    Img: 'NormalImg'
}
export const COMPONENTS_NAME = {
    'Input': NormalInput,
    'Select': NormalSelect,
    'DatePicker': NormalPicker,
    'Upload': 'NormalUpload',
    'Date': NormalDate,
    'Cascader': NormalCascader,
    'Radio': NormalRadio,
    'InputNumber': NormalInputNumber,
    'Switch': 'el-switch',
    'Checkbox': NormalCheckbox
}

export const COMPONENTS_PLACEHOLDER = {
    'Input': '请输入',
    'Select': '请选择',
}
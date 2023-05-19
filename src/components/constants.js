import NormalInput from './NormalInput/index'
import NormalSelect from './NormalSelect/index'
import NormalCascader from './NormalCascader/index'
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
    'DatePicker': 'NormalPicker',
    'Upload': 'NormalUpload',
    'Date': 'NormalDate',
    'Cascader': NormalCascader,
    'Radio': 'NormalRadio',
    'InputNumber':'el-input-number',
    'Switch': 'el-switch',
    'Checkbox': 'NormalCheckbox'
}
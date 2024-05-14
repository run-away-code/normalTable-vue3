import {
  ref,
  reactive,
  computed
} from "vue";
import type { FormInstance } from 'element-plus'
export const fromData = reactive({})
// form下ref
export const ruleFormRef = ref<FormInstance>()
export const useForm = (props) => {
  const handleUpdateValue = it => val => {
    fromData[it.prop] = val
  }
  // formitem属性
  const formItemAttrs = computed(() => it => ({
    placeholder: it.label,
    prop: it.prop,
    ...it
  }))
  // 根据rule类型（boolean,string,Array)
  const useRules = computed(() => {
    return props.items.reduce((obj, it) => {
      // 过滤rule为空数据
      if (!it.rule) return obj
      const isArray = Array.isArray(it.rule)
      // 数组则直接赋值
      obj[it.prop] = isArray ? it.rule : [{
        trigger: ['blur', 'change'],
        required: true,
        message: typeof it.rule === 'string' ? it.rule : `${it.label}不可为空`,
      }]
      return obj
    }, {})
  })
  return {
    fromData,
    handleUpdateValue,
    formItemAttrs,
    useRules: useRules.value,
    ruleFormRef
  }
}
export const updateValues = (keyValues) => {
  if (!keyValues) return
  // 如果是数组，则使用数组的值
  if (Array.isArray(keyValues)) {
    keyValues.forEach(it => updateValues(it))
    return
  }
  // 否则使用对象的值
  const { key, value } = keyValues
  fromData[key] = value
}
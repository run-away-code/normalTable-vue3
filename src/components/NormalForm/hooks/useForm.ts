import {
  ref,
  reactive,
  computed
} from "vue";
import type { FormInstance } from 'element-plus'
export const fromData = reactive({})
// form中dom
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
    return props.list.reduce((obj, it) => {
      // 过滤rule为空数据
      if (!it.rule) return obj
      const isArray = Array.isArray(it.rule)
      // 数组则直接赋值
      obj[it.prop] = isArray ? it.rule : [{
        trigger: ['blur', 'change'],
        required: true,
        message: typeof it.rule === 'string' ? it.rule : '不可为空',
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
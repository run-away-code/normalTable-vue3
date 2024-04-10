import {
  reactive,
  computed,
  toRefs,
} from "vue";
import { fromData, ruleFormRef } from './useForm'
import { deepClone } from "@/utils/index";
type Params = {
  title?: string;
  data?: object
}
export const useSubmit = (props, emit) => {
  const dialogForm = reactive({
    value: false,
  });
  const { items: refItems, diaLog } = toRefs(props)

  const dialogBind = computed(() => {
    return {
      ...diaLog.value,
    }
  })
  // items为函数or数组
  const useList = computed(() => {
    const items = refItems.value
    if (typeof items === 'function') {
      return items(fromData)
    }
    return items
  })
  // 确认
  const handleSubmit = async () => {
    try {
      await ruleFormRef.value.validate()
      emit('submit', fromData)
      useClose()
    } catch (error) {
      console.error(error, 'submit出错了')
    }

  }
  // 关闭弹窗
  const useClose = () => {
    dialogForm.value = false;
  }
  // 打开弹窗
  const useOpen = (params: Params) => {
    const { title, data = {} } = params
    Object.keys(data).forEach(k => {
      fromData[k] = data[k]
    })
    dialogForm.value = true;
  };
  // 传入form中参数
  const formBind = computed(() => {
    const binds = { items: useList.value }
    return binds
  })
  return {
    dialogForm,
    handleSubmit,
    useOpen,
    useClose,
    dialogBind,
    formBind: formBind.value
  }
}
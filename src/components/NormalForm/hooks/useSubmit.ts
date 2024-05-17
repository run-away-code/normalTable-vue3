import {
  ref,
  reactive,
  computed,
  toRefs,
  watch,
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
  // 传入form中参数
  const formBind = ref({ items: [] })
  const { items: refItems, diaLog } = toRefs(props)
  // 是否显示dialog-默认false
  const hideDialog = computed(() => {
    return !!diaLog.value?.hide
  })
  const dialogBind = computed(() => {
    return {
      ...diaLog.value,
    }
  })
  // items为函数or数组
  const useList = computed(() => {
    return updateParams => {
      const items = refItems.value
      if (typeof items === 'function') {
        return items(updateParams)
      }
      return items
    }
  })
  watch(() => fromData,
    (newValue) => {
      const updateParams = deepClone(newValue)
      formBind.value.items = useList.value(updateParams)
    }, {
    deep: true,
    immediate: true
  })
  // 确认
  const handleSubmit = async () => {
    try {
      await ruleFormRef.value.validate()
      // 暴露出去的数据需深拷贝
      const res = emit('submit', deepClone(fromData), useClose)
    } catch (error) {
      console.error(error, 'submit出错了')
    }

  }
  const handleCancel = () => {
    ruleFormRef.value.resetFields()
    emit('cancel')
    useClose()
  }
  // 关闭dialog前回调
  const beforeCloseDialog = (done) => {
    ruleFormRef.value.resetFields()
    done()
  }
  // 关闭弹窗
  const useClose = () => {
    dialogForm.value = false;
  }
  // 打开弹窗
  const useOpen = (params: Params) => {
    const { title, data = {} } = params || {}
    Object.keys(data).forEach(k => {
      fromData[k] = data[k]
    })
    // data为空则清空数据
    if (!Object.keys(data).length) {
      Object.keys(fromData).forEach(k => {
        fromData[k] = null
      })
    }
    dialogForm.value = true;
  };
  return {
    dialogForm,
    hideDialog,
    handleSubmit,
    handleCancel,
    useOpen,
    useClose,
    dialogBind,
    beforeCloseDialog,
    formBind: formBind.value
  }
}
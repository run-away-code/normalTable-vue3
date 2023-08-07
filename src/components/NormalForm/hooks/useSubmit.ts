import {
  reactive,
  computed
} from "vue";
import { fromData, ruleFormRef } from './useForm'
const dialogBind = reactive({
  title: '提示',
})
export const useSubmit = (props) => {
  const dialogForm = reactive({
    value: false,
  });
  const { items, submit } = props
  // items为函数or数组
  const useList = computed(() => {
    if (typeof items === 'function') {
      return items(fromData)
    }
    return items
  })
  // 确认
  const handleSubmit = async () => {
    try {
      await ruleFormRef.value.validate()
      await submit(fromData)
      useClose()
    } catch (error) {
      console.error(error, 'submit出错了')
    }

  }
  // 关闭弹窗
  const useClose = () => {
    dialogForm.value = false;
  }
  type Params = {
    title?: string;
    data?: object
  }
  // 打开弹窗
  const useOpen = (params: Params) => {
    const { title, data = {} } = params
    Object.keys(data).forEach(k => {
      fromData[k] = data[k]
    })
    dialogBind.title = title
    dialogForm.value = true;
  };
  // 传入form中参数
  const formBind = computed(() => {
    // TODO：这里还缺深拷贝
    const binds = { ...props, items: useList.value }
    binds.submit = null
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
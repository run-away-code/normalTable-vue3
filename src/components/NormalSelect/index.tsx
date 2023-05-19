import { defineComponent, computed, ref, isRef } from 'vue'
const selectProps = {
  options: Array,
  modelValue: String,
  onChange: Function
}
export default defineComponent({
  name: 'NormalSelect',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 判断是否ref对象，是则返回.value
    const options = computed(() => {
      return isRef(props.options) ? props.options.value : props.options
    })
    const internalValue = computed({
      get() {
        return props.modelValue
      },
      set(newVal) {
        emit("update:modelValue", newVal);
        props?.onChange?.(newVal)
      }
    })
    return () => <>
      <el-select {...props} vModel={internalValue.value}>
        {
          options.value?.map(it => {
            return <el-option {...it} />
          })
        }
      </el-select>
    </>
  }
})
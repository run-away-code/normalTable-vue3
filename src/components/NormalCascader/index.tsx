import {
  defineComponent,
  computed,
} from "vue";
const inputProps = {
  modelValue: '',
  onChange: () => {}
}
export default defineComponent({
  name: "NormalCascader",
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { onChange } = props
    const internalValue = computed({
      get() {
        return props.modelValue
      },
      set(newVal) {
        emit("update:modelValue", newVal);
        onChange?.(newVal)
      }
    })
    return () => (
      <>
        <el-cascader
          v-model={internalValue.value}
        />
      </>
    );
  },
});

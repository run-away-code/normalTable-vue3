import { defineComponent, computed, isRef, useAttrs } from "vue";
const inputProps = {
  modelValue: "",
  onChange: () => {},
  options: Array,
};
export default defineComponent({
  name: "NormalCascader",
  props: inputProps,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 判断是否ref对象，是则返回.value
    const options = computed(() => {
      return isRef(props.options) ? props.options.value : props.options;
    });
    const { onChange } = props;
    const internalValue = computed({
      get() {
        return props.modelValue;
      },
      set(newVal) {
        emit("update:modelValue", newVal);
        onChange?.(newVal);
      },
    });
    return () => (
      <>
        <el-cascader
          {...useAttrs()}
          options={options.value}
          v-model={internalValue.value}
        />
      </>
    );
  },
});

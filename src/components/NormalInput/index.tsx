import { defineComponent, computed, ref, reactive, PropType } from "vue";
const inputProps = {
  modelValue: String,
  onChange: Function,
};
export default defineComponent({
  name: "NormalInput",
  props: inputProps,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { onChange } = props;
    const internalValue = computed({
      get() {
        return props.modelValue;
      },
      set(newVal) {
        console.log(newVal, "newVal");
        emit("update:modelValue", newVal);
        onChange?.(newVal);
      },
    });
    return () => (
      <>
        <el-input v-model={internalValue.value} />
      </>
    );
  },
});

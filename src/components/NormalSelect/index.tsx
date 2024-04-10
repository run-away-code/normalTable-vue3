import { defineComponent, computed } from "vue";
import { disposeRef } from "@/utils/index";
const selectProps = {
  options: Array,
  modelValue: [String, Number],
  onChange: Function,
};
export default defineComponent({
  name: "NormalSelect",
  props: selectProps,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 判断是否ref对象，是则返回.value
    const options = computed(() => {
      return disposeRef(props.options);
    });
    const internalValue = computed({
      get() {
        return props.modelValue;
      },
      set(newVal) {
        emit("update:modelValue", newVal);
        props?.onChange?.(newVal);
      },
    });
    return () => (
      <>
        <el-select {...props} vModel={internalValue.value} style="width: 100%">
          {options.value?.map((it) => {
            return <el-option {...it} />;
          })}
        </el-select>
      </>
    );
  },
});

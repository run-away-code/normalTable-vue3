<template>
  <Render></Render>
</template>

<script lang="tsx" setup>
import { computed, ref } from "vue";
import { datePickerProps } from "./type";
const modeValueKey = "update:modelValue";
const props = defineProps<datePickerProps>();
const emit = defineEmits([modeValueKey]);
const internalValue = computed({
  get() {
    return props.modelValue || "";
  },
  set(newVal) {
    console.log(newVal, "newVal");
    emit(modeValueKey, newVal);
    props.onChange?.(newVal);
  },
});
// 默认属性
const initAttributes = computed(() => {
  return {
    placeholder: "选择日期",
    ...props,
  };
});
const Render = () => {
  return (
    <>
      <el-date-picker {...initAttributes.value} v-model={internalValue.value} />
    </>
  );
};
</script>

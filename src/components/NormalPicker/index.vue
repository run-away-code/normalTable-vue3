<template>
  <Render></Render>
</template>

<script lang="tsx" setup>
// NormalDatePicker
import { computed, useAttrs } from "vue";
import { datePickerProps } from "./type";
const modeValueKey = "update:modelValue";
const props = defineProps<datePickerProps>();
const emit = defineEmits([modeValueKey]);
const internalValue = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    emit(modeValueKey, newVal);
    props.onChange?.(newVal);
  },
});
// 默认属性
const initAttributes = computed(() => {
  return {
    type: "daterange",
    startPlaceholder: "开始时间",
    endPlaceholder: "结束时间",
    rangeSeparator: "至",
    valueFormat: "YYYY-MM-DD",
    ...useAttrs(),
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

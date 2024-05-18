<template>
  <Render></Render>
</template>

<script lang="tsx" setup>
import { computed, useAttrs } from "vue";
import { inputProps } from "./type";
const modeValueKey = "update:modelValue";
const props = withDefaults(defineProps<inputProps>(), {
  modelValue: "",
});
const emit = defineEmits([modeValueKey]);
const internalValue = computed({
  get() {
    return props.modelValue || "";
  },
  set(newVal) {
    emit(modeValueKey, newVal);
    props.onChange?.(newVal);
  },
});
const Render = () => {
  return <el-input-number {...useAttrs()} v-model={internalValue.value} />;
};
</script>

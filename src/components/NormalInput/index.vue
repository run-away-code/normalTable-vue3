<template>
  <Render></Render>
</template>

<script lang="tsx" setup>
import { computed } from "vue";
import { inputProps } from "./type";
const modeValueKey = "update:modelValue";
const props = defineProps<inputProps>();
const emit = defineEmits([modeValueKey]);
const internalValue = computed({
  get() {
    return props.modelValue;
  },
  set(newVal) {
    console.log(newVal, "newVal");
    emit(modeValueKey, newVal);
    props.onChange?.(newVal);
  },
});
const Render = () => {
  return <el-input v-model={internalValue.value} />;
};
</script>

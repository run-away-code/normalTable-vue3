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
const getOptionsVNode = () => {
  return props.options?.map((it) => {
    return <el-radio value={it.value}>{it.label}</el-radio>;
  });
};
const Render = () => {
  return (
    <el-radio-group v-model={internalValue.value}>{getOptionsVNode()}</el-radio-group>
  );
};
</script>

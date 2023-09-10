<template>
  <Render></Render>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import { pageProps } from "../types";
import style from "../index.module.scss";
const props = defineProps<pageProps>();
console.log(props, "props");
// const slots = useS;
const Render = () => {
  return (
    <div class={style.flexContent}>
      <el-pagination {...props} layout="prev, pager, next" />
    </div>
  );
};
</script>

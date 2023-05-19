<template>
  <div>
    <!-- <NormalTable :data="tableData"></NormalTable> -->
    <NormalForm :items="FormData.list" :submit="FormData.submit" ref="formRef" />
    <ElButton @click="openForm">打开form</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, ref, markRaw, onMounted } from "vue";
// import NormalTable from "@/components/NormalTable";
import NormalForm from "@/components/NormalForm";

import { filters } from "./constant";
const formRef = ref(null);
const options = ref([]);
onMounted(() => {
  setTimeout(() => {
    options.value = [
      { label: "选择1", value: 1 },
      { label: "选择2", value: 2 },
    ];
  }, 1000);
});
const FormData = shallowRef({
  list: (data) => {
    return [
      {
        tag: "Select",
        label: "状态",
        prop: "stat1us",
        rule: "状态不能为空",
        bind: {
          options,
        },
        // render(row) {
        //   return "文字展示";
        // },
      },
      {
        tag: "Input",
        label: "跟进信息",
        prop: "content",
        rule: true,
        bind: {
          // input: (val) => {
          //   console.log(val);
          // },
        },
      },
      {
        tag: "Cascader",
        label: "状态",
        prop: "status",
        // render(row) {
        //   return "文字展示";
        // },
      },
    ];
  },
  async submit(values) {
    console.log(values, "点击确认执行");
  },
});
const tableData = shallowRef({
  ...filters,
  onSearch: async ({ filterValue, pagination }) => {
    return {
      ...pagination,
      page: 1,
      total: 1000,
      pageSize: 100,
      list: [
        {
          ddd: "测试",
          img: "呵呵",
        },
      ],
    };
  },
});
const openForm = () => {
  // open函数接口data进行赋值
  formRef.value.open({
    title: "这是一个提1示",
    data: {
      stat1us: "",
      content: "这是一个 提示语",
    },
  });
};
</script>

<style></style>

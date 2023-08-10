<template>
  <div>
    <!-- <ElButton @click="openForm">打开form</ElButton> -->
    <!-- <NormalTable
      :filter="tableData.filter"
      :columns="tableData.columns"
      :onSearch="tableData.onSearch"
    ></NormalTable> -->
    <el-table :data="data1">
      <NormalColumns :columns="columns"></NormalColumns>
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="tsx" setup>
import { shallowRef, ref, markRaw, onMounted } from "vue";
// import { NormalTable, NormalColumns } from "el-normaltable-vue3";
import NormalForm from "@/components/NormalForm";
import { NormalColumns } from "@/components/index";

import { filters } from "./constant";
const columns = [
  {
    prop: "date",
    label: "date",
    width: "140px",
  },
  {
    prop: "name",
    label: "name",
    render: (it) => {
      console.log(it, "ttt");
      return <div>123123</div>;
    },
  },
  {
    prop: "address",
    label: "address",
    // type: "Img",
  },
];
const data1 = [
  {
    date: "2016-05-03",
    name: "100000",
    address: "No. 189, Grove St, Los Angeles",
  },
];
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
          width: "100px",
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
  onSearch: ({ filterValue, pagination }) => {
    return {
      ...pagination,
      page: 1,
      total: 1000,
      pageSize: 100,
      list: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "To1m",
          address: "No. 189, Grove St, Los Angeles",
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

<template>
  <div>
    <!-- <ElButton @click="openForm">打开form</ElButton> -->
    <NormalTable
      :filter="tableData.filter"
      :columns="columns"
      :onSearch="tableData.onSearch"
      :pagination="pagination"
    ></NormalTable>
    <!-- <el-table :data="data1">
      <NormalColumns :columns="columns">
      </NormalColumns>
    </el-table> -->
  </div>
</template>

<script lang="tsx" setup>
import { shallowRef, ref, markRaw, onMounted } from "vue";
import NormalTable from "@/components/NormalTable";
import NormalForm from "@/components/NormalForm";
import { NormalColumns } from "@/components/index";

import { filters } from "./constant";
const pagination = {
  pageSizes: [10, 20, 30, 40, 50, 100],
  disabled: true,
  // currentChange: () => {
  //   console.log(123123)
  // }
};
const columns = [
  {
    type: "index",
    label: "序号",
  },
  {
    prop: "date",
    label: "date",
    width: "140px",
    children: [
      {
        prop: "num",
        label: "数量",
        children: [
          {
            prop: "num",
            label: "数量",
            type: "money",
          },
          {
            prop: "num",
            label: "数11量",
            type: "money",
          },
        ],
      },
      {
        prop: "price",
        label: "金额",
        type: "money",
      },
      {
        prop: "hhh",
        label: "金额1",
        type: "money",
      },
    ],
  },
  {
    prop: "name",
    label: "name",
    render: (it) => {
      return <div class="red">456456456</div>;
    },
  },
  {
    prop: "address",
    label: "address",
  },
  {
    label: "操作",
    width: "180px",
    btns: (row) => {
      // 可为数组可为函数
      const isShowAdd = row.id !== 1;
      return [
        {
          // hasAuth: false,
          label: "确认",
          // type: "text",
          call: (row) => {}, // row参数为当前行数据
        },
        {
          label: "添加",
          // type: "text",
          confirm: "确定移除吗？", // 二次确认弹窗
          call: (row) => {
            console.log(123123);
            // row = JSON.parse(JSON.stringify(row));
          },
        },
        // {
        //   label: "确认",
        //   type: "text",
        //   children: [
        //     {
        //       label: "测试123",
        //       call: () => {
        //         console.log("测试123");
        //       },
        //     },
        //     {
        //       label: "测试456",
        //       call: () => {
        //         console.log("测试456");
        //       },
        //     },
        //   ],
        // },
      ];
    },
  },
];
const data1 = [
  {
    date: "2016-05-03",
    name: "100000",
    address: "No. 189, Grove St, Los Angeles",
    price: -9991000,
    num: 99999,
    hhh: undefined,
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
    console.log(filterValue, "filterValue");
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

<style scoped>
.red {
  color: red;
}
</style>

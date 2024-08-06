<template>
  <div>
    <NormalForm
      :diaLog="diaLog"
      :items="FormData.items"
      @submit="submit"
      ref="formRef"
    ></NormalForm>
    <NormalTable
      :filter="tableData.filter"
      :columns="columns"
      :onSearch="tableData.onSearch"
      :pagination="pagination"
    ></NormalTable>
    <!-- <el-table :data="data1">
      <NormalColumns :columns="columns"> </NormalColumns>
    </el-table> -->
  </div>
</template>

<script lang="tsx" setup>
import { shallowRef, ref, markRaw, onMounted } from "vue";
import NormalTable from "@/components/NormalTable";
import NormalForm from "@/components/NormalForm";
import { NormalColumns } from "@/components/index";

import { filters } from "./constant";
const valueInput = ref(null);
const pagination = ref({
  pageSizes: [10, 20, 30, 40, 50, 100],
  disabled: true,
  // currentChange: () => {
  //   console.log(123123)
  // }
});
const diaLog = {
  title: "标题",
  width: "600px",
};
const aaaName = ref("这是固定的");
setTimeout(() => {
  aaaName.value = "这是动态的";
}, 3000);
const columns = () => {
  return [
    {
      type: "index",
      label: "序号",
    },
    {
      prop: "date",
      label: "date",
      width: "140px",
      fixed: "right",
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
          editable: true,
        },
        {
          prop: "hhh",
          label: "金额1",
          type: "money",
          render(scope) {
            console.log(scope, "scope");
            const aaa = (val) => {
              const a = {
                ...data1.value[scope.$index],
                hhh: val,
              };
              data1.value[scope.$index] = a;
            };
            return (
              <el-input model-value={scope.row.hhh} onInput={aaa} style="width: 100px" />
            );
          },
        },
      ],
    },
    {
      prop: "name",
      label: aaaName.value,
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
            text: true,
            hide: true,
            type: "primary",
            call: (row) => {}, // row参数为当前行数据
          },
          {
            label: "添加",
            text: true,
            type: "primary",
            confirm: "确定移除吗？", // 二次确认弹窗
            call: (row) => {
              console.log(123123);
              // row = JSON.parse(JSON.stringify(row));
            },
          },
          {
            label: "确认",
            type: "text",
            children: [
              {
                label: "测试123",
                call: () => {
                  console.log("测试123");
                },
              },
              {
                label: "测试456",
                call: () => {
                  console.log("测试456");
                },
              },
            ],
          },
        ];
      },
    },
  ];
};
const data1 = ref([
  {
    date: "2016-05-03",
    name: "100000",
    address: "No. 189, Grove St, Los Angeles",
    price: -9991000,
    num: 99999,
    hhh: 123,
  },
]);
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
const Cascaderoptions = [
  {
    value: "zujian",
    label: "组件",
    children: [
      {
        value: "basic",
        label: "Basic",
        children: [
          {
            value: "layout",
            label: "Layout 布局",
          },
          {
            value: "color",
            label: "Color 色彩",
          },
        ],
      },
    ],
  },
];
const FormData = shallowRef({
  items: (data) => {
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
        label: "姓名",
        prop: "content",
        rule: true,
        bind: {
          type: "textarea",
          rows: 2,
          // input: (val) => {
          //   console.log(val);
          // },
        },
      },
      {
        tag: "Cascader",
        label: "状态",
        prop: "status",
        bind: {
          options: Cascaderoptions,
        },
      },
      {
        tag: "Date",
        label: "日期",
        prop: "date",
      },
      {
        tag: "DatePicker",
        label: "日期区间",
        prop: "dat123e",
      },
      {
        tag: "Radio",
        label: "日期区1间",
        prop: "reado",
        bind: {
          options,
        },
      },
      {
        tag: "text",
        label: "日期区1间",
        prop: "aaa",
      },
    ];
  },
});
const submit = (values) => {
  console.log(values, "点击确认执行");
};
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
  // formRef.value.open();
  formRef.value.open({
    data: {
      stat1us: 1,
      aaa: "111aaa",
      // content: "这是一个 提示语",
    },
  });
};
</script>

<style scoped>
.red {
  color: red;
}
/* :root {
  --flexDirection: row;
  --flexWrap: wrap;
  --item-basis: 100px;
  --gap: 10px;
  --columns: 5;
  --width: 332px;
}
.a {
  width: var(--width);
  display: flex;
  flex-flow: wrap;
  gap: var(--gap);
}
.a div {
  width: 100px;
  height: 100px;
  border: 2px solid red;
} */
</style>

<template>
  <div>
    <ElButton @click="openForm">打开1form</ElButton>
    <NormalForm :items="FormData.items" @submit="submit" ref="formRef"></NormalForm>
  </div>
</template>

<script lang="tsx" setup>
import { shallowRef, ref, markRaw, onMounted } from "vue";
import NormalForm from "@/components/NormalForm";
const diaLog = {
  title: "标题",
  width: "600px",
};
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
const openForm = () => {
  // open函数接口data进行赋值
  // formRef.value.open();
  console.log(11111);
  formRef.value.open({
    data: {},
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

export const filters = {
  filter: [
    {
      tag: "Select", // 驼峰方式
      label: "状态",
      prop: "status",
      bind: {
        options: [{ label: "测试1", value: 1 }],
      },
    },
    {
      tag: "Input",
      label: "性别",
      prop: "name",
    },
    {
      tag: "Select", // 驼峰方式
      label: "身份证",
      prop: "id",
      bind: {
        options: [{ label: "测试1", value: 1 }],
      },
    },
    {
      tag: "Input",
      label: "age",
      prop: "age",
    },
  ],
  columns: [
    {
      prop: "date",
      label: "date",
      width: "140px",
    },
    {
      prop: "name",
      label: "name",
      // type: "Img",
    },
    {
      prop: "address",
      label: "address",
      // type: "Img",
    },
  ],
}
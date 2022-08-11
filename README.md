## 动态table

- 动态table用法
```js
<NormalTable ref="NormalTable" :tables="tables" />
export default {
  name: 'App',
  data() {
    return {
      tables: {
        isShowFilterLabel: false, // filter中始终显示label
        filter: [
          {
            tag: 'Select',  // 驼峰方式
            label: '状态',
            prop: 'status',
            bind: { // 可传入element任意属性
              options: this.getList // 可为数组或函数，可同步可异步
              defaultValue: 1 // 初始化参数
            }
          },
          {
            tag: 'Select',
            label: '状态1',
            prop: 'statu1s',
            bind: {
              options: [{ value: 1, label: '同步方式'}] // 同步方式返回
            }
          },
          {
            tag: 'Checkbox',
            label: '状态',
            prop: 'status',
            bind: {
                options: [{ value: 1, label: '同步方式'}] // 同步方式返回
            }
          },
          {
            tag: 'DatePicker',
            label: '测试稍等稍等都是开始日期:',
            prop: 'time',
            bind: { // 可传入element任意属性
              type: 'datetimerange',
              // valueFormat: 'yyyy-MM-dd: HH-mm-ss' // value格式
              startPlaceholder:"空档开1始日期",
              endPlaceholder: "空档结111束日期",
              // defaultValue: [new Date('2022-07-10'), new Date('2022-07-20')] // 默认值
            }
          },
        ],
        operations: [{
          label: '测试123',
          type: 'success',
          call: () => {
            // 点击后执行call
          },
          bind: { // 非必须，可传入element任意属性
            circle: true,
            icon: 'el-icon-search'
          }
        }],
        columns: [
          {
            type: 'selection'
          },
          {
            prop: 'snowId',
            label: 'ID',
            render: (h, row) => { // 需计算或文字不满足可利用render， 第一个参数为h函数，第二个参数为当前行数据
              const onchange = (value) => {
                this.value = value
              }
              return (<div>
                <el-input value={this.value} onInput={onchange} placeholder="请输入内容"></el-input>
              </div>)
            }
          },
          {
            prop: 'ddd',
            label: '测12222试',
            width: '140px',
            render: (row) => {
              return row.snowId === 1 ? '测试1' : '测试2'
            }
          },
          {
            prop: 'img',
            label: '测12222试',
            type: 'Img'
          },
          {
            label: '操作',
            btns: (row) => { // 可为数组可为函数
              const isShowAdd = row.id !== 1
              return [
                {
                  label: '确认',
                  call:(row) => {} // row参数为当前行数据
                },
                {
                  label: '添加',
                  hide: isShowAdd, // 是否隐藏该button
                  // type: 'text',
                  // confirm: '确定移除吗？', // 二次确认弹窗
                  call: (row) => {
                    row = JSON.parse(JSON.stringify(row))
                  }
                }
              ]
            }
          }
        ],
        onSearch: async({ filterValue, pagination }) => {
          // filterValue为选中参数，pagination为分页数据
          return {
            ...pagination,
            page: 1,
            total: 1000,
            pageSize: 100,
            list: []
          }
        }
      }
    }
  },
  methods: {
    getList() {
      // 异步方式
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{value: 1, label: '张三'}] )
        }, 1000);
      })
    }
  }
}

tag配置：{
    'Input': 'el-input',
    'Select': 'NormalSelect',
    'DatePicker': 'NormalPicker',
    'Upload': 'NormalUpload',
    'Date': 'NormalDate',
    'Cascader': 'el-cascader',
    'Radio': 'NormalRadio',
    'InputNumber':'el-input-number',
    'Switch': 'el-switch',
    'Checkbox': 'NormalCheckbox'
}
  ```


## 动态表单
- 动态表单用法
```js
<NormalForm ref="NormalForm" :normalForm="normalForm" />

normalForm: {
  dialogBind: {
    width: '600px',
  },
  list: (data) => {
    // const isStatusShow = data.id === 1
    return [
      {
        label: '状态',
        // hide: isStatusShow,
        prop: 'status',
        render(row) {
          return '文字展示'
        }
      },
      {
        tag: 'Input',
        label: '跟进信息',
        prop: 'content',
        bind: { // 非必须，可传入input支持属性
          input: (val) => {
            console.log(val)
          }
        }
      },
      {
        tag: 'Upload',
        label: '跟进信息',
        prop: 'img',
        bind: {
          action: 'https://jsonplaceholder.typicode.com/posts/'
        }
      },
    ]
  },
  async submit (values) {
    console.log(values, '点击确认执行')
  }
}

import NormalTable from './NormalTable/index.vue'
import NormalForm from './NormalForm/index.vue'

const Components = {
  NormalTable,
  NormalForm
}
// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 参考：https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
// 此处注意，组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
const install = function (Vue) {
  // 判断是否安装
  // if (install.installed) return
  // 遍历注册全局组件
  Object.keys(Components).forEach(key => {
    const component = Components[key]
    Vue.component(component.name, component)
  })
}
// 判断是否是直接引入文件
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
export {
  Components,
  install
}
export default {
  Components,
  install
}
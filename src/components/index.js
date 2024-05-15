import NormalTable from './NormalTable/index'
import NormalForm from './NormalForm/index'
import NormalColumns from './NormalTable/coms/columns'
const components = [
  NormalTable,
  NormalForm,
  NormalColumns
]
//注册
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export {
  NormalForm,
  NormalColumns,
  NormalTable
}
export default {
  install
}
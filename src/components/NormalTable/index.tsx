import { defineComponent, onMounted, ref, reactive, PropType } from 'vue'
import Tables from './coms/table'
import Filter from './coms/filter'
import Pagination from './coms/pagination'
import type { FormInstance, FormRules } from 'element-plus'


const gatherProps = {
  data: {
    type: Object,
    filter: [Array, Function],
    colums: Array,
    onSearch: Function as PropType<(...args: any[]) => any | PromiseLike<any>>,
  }
}
export default defineComponent({
  name: 'NormalTable',
  props: gatherProps,
  setup(props) {
    const { filter, colums } = props?.data as any
    // 点击查询
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    // 筛选项
    const filterVNode = (filter) => {
      if (!filter) return ''
      return <Filter filter={filter} />
    }
    // table
    const tableVNode = (colums) => {
      if (!colums) return ''
      return <Tables data={colums}></Tables>
    }
    // 分页
    const paginationVNode = () => {
      return <Pagination></Pagination>
    }
    return () => <>
      {/* 筛选项 */}
      {filterVNode(filter)}
      {/* table */}
      {tableVNode(colums)}
      {/* 分页 */}
      {paginationVNode()}
    </>
  }
})
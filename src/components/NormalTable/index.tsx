import { defineComponent, onMounted, ref, reactive, PropType } from 'vue'
import Tables from './coms/table'
import Filter from './coms/filter'

const gatherProps = {
  data: {
    type: Object,
    filter: [Array, Function],
    colums: Array,
    onSearch: Function as PropType<(...args: any[]) => any | PromiseLike<any>>,
  }
}
export default defineComponent({
  name: 'Normaltable',
  props: gatherProps,
  setup(props) {
    const { filter, colums } = props?.data as any
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
    return () => <>
      {/* 筛选项 */}
      {filterVNode(filter)}
      {/* table */}
      {tableVNode(colums)}
    </>
  }
})
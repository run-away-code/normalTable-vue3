import { defineComponent, onMounted, ref, reactive } from 'vue'
import Tables from './coms/table.vue'
const buttonProps = {
  data: {
    colums: Object
  }
}
export default defineComponent({
  name: 'Normaltable',
  props: buttonProps,
  setup(props) {
    
    // 筛选项
    const filterVNode = () => {

    }
    const { filter, colums, onSearch} = props.data
    return () => <>
      <Tables data={colums}></Tables>
      {/* {filterVNode()} */}
    </>
  }
})
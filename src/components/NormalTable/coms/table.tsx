import { defineComponent, onMounted, ref, reactive } from 'vue'
import { isFunction } from '@/utils'
import { COMPONENTS_NAME } from '@/components/constants'
const filterProps = {
  filter: [Array, Function]
}
export default defineComponent({
  name: 'Normaltable',
  props: filterProps,
  setup(props) {
    const filterVNode = filter => {
      // 数组
      if (Array.isArray(filter)) {
        return filter.map(it => {
          return <el-form-item label={it.label}>
          </el-form-item>
          // return <component is={COMPONENTS_NAME[it.tag]}></component>
        })
      }
      // 函数
      if (isFunction(filter)) {
        const ArrayFilter = filter()
        return ArrayFilter.map(it => {
          return 'fff'
        })
      }
    }
    return () => <>
      <el-form label-width="120px">
        {filterVNode(props.filter)}
      </el-form> 
    </>
  }
})
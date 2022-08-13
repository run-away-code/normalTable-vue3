import { defineComponent, onMounted, ref, reactive, resolveComponent, h } from 'vue'
import { isFunction } from '@/utils'
import { COMPONENTS_NAME } from '@/components/constants'
import NormalSelect from '@/components/NormalSelect/index'
const filterProps = {
  filter: [Array, Function]
}
export default defineComponent({
  name: 'Normaltable',
  components: { NormalSelect },
  props: filterProps,
  setup(props) {
    const filterVNode = filter => {
      let newFilter = []
      // filter为函数
      if (isFunction(filter)) {
        newFilter = filter()
      }
      // 数组
      if (Array.isArray(filter)) {
        return filter.map(it => {
          console.log(it, 'ttt')
          return <el-form-item label={it.label}>
            {h(resolveComponent(COMPONENTS_NAME[it.tag]), it.bind)}
          </el-form-item>
        })
      }
      return '数据格式错误，应为数组or函数'
    }
    return () => <>
      <el-form label-width="120px">
        {filterVNode(props.filter)}
      </el-form> 
    </>
  }
})
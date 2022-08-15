import { defineComponent, onMounted, ref, reactive, resolveComponent, h } from 'vue'
import { isFunction } from '@/utils'
import { COMPONENTS_NAME } from '@/components/constants'
import NormalSelect from '@/components/NormalSelect/index'
import type { FormInstance, FormRules } from 'element-plus'

const filterProps = {
  filter: [Array, Function]
}
export default defineComponent({
  name: 'Normaltable',
  components: { NormalSelect },
  props: filterProps,
  setup(props) {
    const ruleFormRef = ref<FormInstance>()
    // 是否有render
    const isRender = it => {
      if (it.render && isFunction(it.render)) {
        return it.render()
      }
      return h(resolveComponent(COMPONENTS_NAME[it.tag]), { ...it, ...it?.bind })
    }
    const filterVNode = filter => {
      // filter为函数
      if (isFunction(filter)) {
        filter = filter()
      }
      // 数组
      if (Array.isArray(filter)) {
        return filter.map(it => {
          return <el-form-item label={it.label} prop={it.prop}>
            {isRender(it)}
          </el-form-item>
        })
      }
      return '数据格式错误，应为数组or函数'
    }
    // 查询&&充值按钮
    const filterButtonVNode = () => {
      return <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button onClick={resetForm}>重置</el-button>
      </el-form-item>
    }
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    return () => <>
      <el-form ref={ruleFormRef} labelWidth="100px" inline={true}>
        {filterVNode(props.filter)}
        {filterButtonVNode()}
      </el-form> 
    </>
  }
})
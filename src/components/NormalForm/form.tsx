import {
  defineComponent,
  resolveComponent,
  h,
  markRaw,
  ref,
  reactive,
  PropType,
} from "vue";
import { useForm } from './hooks/useForm'
import { COMPONENTS_NAME } from '@/components/constants'
export const formItemProps = () => ({
   list: Array
});
export default defineComponent({
  name: "Form",
  props: formItemProps(),
  slots: [""],
  setup(props, { slots }) {
    const { fromData, handleUpdateValue, formItemAttrs, useRules, ruleFormRef } = useForm(props)
    const componentRender = it => {
      // render优先级最高，有render则直接执行
      if (it?.render) {
        return it.render()
      }
      // 无render&无tag则配置错误
      if (!it?.tag) return <>tag配置错误</>
      return (
        <>
          {h(COMPONENTS_NAME[it?.tag], {...it.bind, modelValue: fromData[it.prop], 'onUpdate:modelValue': handleUpdateValue(it) })}
        </>
      )

    }
    return () => (
      <>
        <el-form ref={ruleFormRef} model={fromData} rules={useRules} label-width="100px">
          {props.list.map(it => {
            return <el-form-item {...formItemAttrs.value(it)}>
              {componentRender(it)}
          </el-form-item>
          })}
          
        </el-form>
      </>
    );
  },
});

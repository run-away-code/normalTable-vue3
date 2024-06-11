import { defineComponent, PropType, getCurrentInstance } from "vue";
import { useForm } from "./hooks/useForm";
import {
  COMPONENTS_NAME,
  COMPONENTS_PLACEHOLDER,
} from "@/components/constants";
import { disposeRef } from "@/utils/index";
export const formItemProps = () => ({
  items: {
    type: Array as PropType<FormItemProps[]>,
    required: true,
  },
  inline: Boolean,
  style: String,
});
export default defineComponent({
  name: "Form",
  props: formItemProps(),
  // slots: [""],
  setup(props, { slots }) {
    const { proxy } = getCurrentInstance();
    const {
      fromData,
      handleUpdateValue,
      formItemAttrs,
      useRules,
      ruleFormRef,
    } = useForm(props);
    proxy.ref = ruleFormRef;
    const componentRender = (it) => {
      // render优先级最高，有render则直接执行
      if (it?.render) {
        return it.render();
      }
      // 无render&无tag则配置错误
      if (!it?.tag) return <>tag配置错误</>;
      // tag存在则渲染
      const Tag = COMPONENTS_NAME[it.tag];
      // 为选择器则进行处理数据
      const options = it.bind?.options && disposeRef(it.bind.options);
      const placeholder = it.placeholder || COMPONENTS_PLACEHOLDER[it.tag];
      const bind = {
        ...it.bind,
        ...(it.bind?.options && { options }),
        modelValue: fromData[it.prop],
        ...(!!placeholder && { placeholder: placeholder + it.label }),
      };
      // tag不存在则返回文本
      if (!Tag) return <div>{fromData[it.prop]}</div>;
      // fromData[it.prop] = null;
      return (
        <>
          <Tag {...bind} v-model:modelValue={fromData[it.prop]}></Tag>
        </>
      );
    };
    return () => (
      <>
        <el-form
          ref={ruleFormRef}
          model={fromData}
          rules={useRules.value}
          {...props}
        >
          {props.items.map((it) => {
            return (
              <el-form-item label-width="120px" {...formItemAttrs.value(it)}>
                {componentRender(it)}
              </el-form-item>
            );
          })}
        </el-form>
      </>
    );
  },
});

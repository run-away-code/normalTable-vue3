import { defineComponent, h } from "vue";
import { useForm } from "./hooks/useForm";
import { COMPONENTS_NAME } from "@/components/constants";
export const formItemProps = () => ({
  items: Array,
  inline: Boolean,
  style: String,
});
export default defineComponent({
  name: "Form",
  props: formItemProps(),
  slots: [""],
  setup(props, { slots }) {
    const {
      fromData,
      handleUpdateValue,
      formItemAttrs,
      useRules,
      ruleFormRef,
    } = useForm(props);
    const componentRender = (it) => {
      // render优先级最高，有render则直接执行
      if (it?.render) {
        return it.render();
      }
      // 无render&无tag则配置错误
      if (!it?.tag) return <>tag配置错误</>;
      return (
        <>
          {h(COMPONENTS_NAME[it?.tag], {
            ...it.bind,
            width: "100%",
            modelValue: fromData[it.prop],
            "onUpdate:modelValue": handleUpdateValue(it),
          })}
        </>
      );
    };
    return () => (
      <>
        <el-form ref={ruleFormRef} model={fromData} rules={useRules} {...props}>
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

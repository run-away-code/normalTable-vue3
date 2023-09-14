import { defineComponent, onMounted, ref, reactive, h } from "vue";
import { isFunction } from "@/utils";
import { COMPONENTS_NAME } from "@/components/constants";
import NormalSelect from "@/components/NormalSelect/index";
import type { FormInstance, FormRules } from "element-plus";
import { useBCTResizable } from "../hooks/useResizable";
const filterProps = {
  filter: [Array, Function],
  onSearch: Function,
};
export default defineComponent({
  name: "Normaltable",
  components: { NormalSelect },
  props: filterProps,
  setup(props) {
    const { layout } = useBCTResizable();
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive({});
    const isRender = (it) => {
      // 是否有render
      if (it.render && isFunction(it.render)) {
        return it.render();
      }
      // 无render
      const childernProps = {
        ...it,
        ...it?.bind,
        modelValue: ruleForm[it.prop],
        clearable: true,
        onChange: (value) => {
          ruleForm[it.prop] = value;
        },
      };
      const Tag = COMPONENTS_NAME[it.tag];
      return <Tag {...childernProps} />;
      // return h(COMPONENTS_NAME[it.tag], childernProps);
    };
    const filterVNode = (filter) => {
      // filter为函数
      if (isFunction(filter)) {
        filter = filter();
      }
      // 数组
      if (Array.isArray(filter)) {
        return filter.map((it) => {
          return (
            <el-col span={layout.span}>
              <el-form-item
                label={it.label}
                prop={it.prop}
                style="display: flex; align-items: center"
              >
                {isRender(it)}
              </el-form-item>
            </el-col>
          );
        });
      }
      return "数据格式错误，应为数组or函数";
    };
    // 查询&&重置
    const filterButtonVNode = () => {
      return (
        <el-form-item>
          <el-button type="primary" onClick={submitForm(ruleFormRef.value)}>
            查询
          </el-button>
          <el-button onClick={resetForm(ruleFormRef.value)}>重置</el-button>
        </el-form-item>
      );
    };
    // 点击查询
    const submitForm = (formEl: FormInstance | undefined) => async () => {
      if (!formEl) return;
      await formEl?.validate((valid, fields) => {
        if (valid) {
          props.onSearch();
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const resetForm = (formEl: FormInstance | undefined) => () => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return () => (
      <>
        <el-form
          ref={ruleFormRef}
          model={ruleForm}
          labelWidth="100px"
          inline={true}
        >
          <el-row>
            {filterVNode(props.filter)}
            <div style="margin-left:auto;">{filterButtonVNode()}</div>
          </el-row>
        </el-form>
      </>
    );
  },
});

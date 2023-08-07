import {
  defineComponent,
  getCurrentInstance,
  defineExpose,
  computed,
  ref,
  reactive,
  PropType,
} from "vue";
import Form from "./form";
import { useSubmit } from "./hooks/useSubmit";
const gatherProps = () => ({
  items: [Array, Function],
  submit: Function as PropType<(...args: any[]) => any | PromiseLike<any>>,
});
export default defineComponent({
  name: "NormalForm",
  props: gatherProps(),
  setup(props, { slots }) {
    const { proxy } = getCurrentInstance();
    const { handleSubmit, dialogForm, useOpen, dialogBind, formBind } =
      useSubmit(props);
    proxy.open = useOpen;
    return () => (
      <>
        <el-dialog v-model={dialogForm.value} {...dialogBind}>
          <Form {...formBind}></Form>
          <el-button type="primary" onClick={handleSubmit}>
            确认
          </el-button>
        </el-dialog>
      </>
    );
  },
});

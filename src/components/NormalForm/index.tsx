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
  diaLog: Object,
});
export default defineComponent({
  name: "NormalForm",
  props: gatherProps(),
  emits: ["submit"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { handleSubmit, dialogForm, useOpen, dialogBind, formBind } =
      useSubmit(props, emit);
    proxy.open = useOpen;
    return () => (
      <>
        <el-dialog v-model={dialogForm.value} {...dialogBind.value}>
          <Form {...formBind}></Form>
          <el-button type="primary" onClick={handleSubmit}>
            确认
          </el-button>
        </el-dialog>
      </>
    );
  },
});

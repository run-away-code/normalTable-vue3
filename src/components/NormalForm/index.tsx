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
import { updateValues } from "./hooks/useForm";
import styles from "./index.module.scss";
const gatherProps = () => ({
  items: [Array, Function],
  diaLog: Object,
});
export default defineComponent({
  name: "NormalForm",
  props: gatherProps(),
  emits: ["submit", "cancel"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const {
      handleSubmit,
      handleCancel,
      dialogForm,
      useOpen,
      dialogBind,
      formBind,
      hideDialog,
      beforeCloseDialog,
    } = useSubmit(props, emit);
    proxy.open = useOpen;
    proxy.close = handleCancel;
    proxy.updateValues = updateValues;

    const buttonClass = [styles.flexContent, styles.gap60];
    // form表单
    const getFormVNode = () => {
      return <Form {...formBind.value}></Form>;
    };
    const getDialogFormVNode = () => {
      return (
        <el-dialog
          v-model={dialogForm.value}
          before-close={beforeCloseDialog}
          {...dialogBind.value}
        >
          {getFormVNode()}
          <div class={buttonClass}>
            <el-button onClick={handleCancel}>取消</el-button>
            <el-button type="primary" onClick={handleSubmit}>
              确认
            </el-button>
          </div>
        </el-dialog>
      );
    };
    const currentVNode = hideDialog.value ? getFormVNode : getDialogFormVNode;
    return () => <>{currentVNode()}</>;
  },
});

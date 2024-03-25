import { defineComponent, computed } from "vue";
import { useBtns } from "../hooks/useBtns";
import styles from "../index.module.scss";
const btnsProps = {
  btns: {
    type: [Array, Function],
  },
  scope: {},
};
export default defineComponent({
  name: "NormalBtns",
  props: btnsProps,
  setup(props) {
    const { initBtns, confirm, elDropdown } = useBtns(props);
    const getbtns = () => {
      return initBtns.value.map((it) => {
        if (it.children?.length) {
          return elDropdown.value(it, props.scope);
        }
        return (
          <el-button text={!!it.text} {...it} onClick={confirm(it)}>
            {it.label}
          </el-button>
        );
      });
    };
    return () => {
      return (
        <>
          <div className={styles.center}>{getbtns()}</div>
        </>
      );
    };
  },
});

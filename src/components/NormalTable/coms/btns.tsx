import { defineComponent, computed } from "vue";
import { isFunction } from "@/utils";
import { useConfirm } from "@/hooks/useHooks";
import { wholeComponents } from "@/components/wholeComponents/index";
const btnsProps = {
  btns: {
    type: [Array, Function],
  },
  scope: {},
};
// hasAuth:true显示，false隐藏
const filterHasAuth = (it) => {
  return 'hasAuth' in it && it?.hasAuth
}
export default defineComponent({
  name: "NormalBtns",
  props: btnsProps,
  setup(props) {
    const initBtns = computed(() => {
      const btnsMap = isFunction(props.btns)
        ? props.btns(props.scope)
        : props.btns;
      return btnsMap?.filter(filterHasAuth)
    });
    // 获取更多按钮
    const elDropdown = computed(() => {
      return wholeComponents.get("elDropdown");
    });
    // conform
    const confirm = (it) => async () => {
      // 二次确认
      if (it.confirm) {
        await useConfirm({ message: it.confirm });
        it.call();
        return;
      }
      it.call();
    };
    const getbtns = () => {
      return initBtns.value.map((it) => {
        if (it.children?.length) {
          return elDropdown.value(it, props.scope);
        }
        return (
          <el-button {...it} onClick={confirm(it)}>
            {it.label}
          </el-button>
        );
      });
    };
    return () => {
      return (
        <>
          <div class="flex">{getbtns()}</div>
        </>
      );
    };
  },
});

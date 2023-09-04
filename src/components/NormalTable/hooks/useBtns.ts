import { computed } from 'vue'
import { isFunction } from "@/utils";
import { useConfirm } from "@/hooks/useHooks";
import { wholeComponents } from "@/components/wholeComponents/index";

// hasAuth不存在 or 存在且为true
const filterHasAuth = (it) => {
  return !('hasAuth' in it) || it?.hasAuth
}
export const useBtns = (props) => {
  const initBtns = computed(() => {
    const btnsMap = isFunction(props.btns)
      ? props.btns(props.scope)
      : props.btns;
    return btnsMap?.filter(filterHasAuth)
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
  // 获取更多按钮
  const elDropdown = computed(() => {
    return wholeComponents.get("elDropdown");
  });
  return {
    elDropdown,
    initBtns,
    confirm
  }
}
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import { useThrottle } from 'vue-ahooks'
export function useBCTResizable(renderFormOptions) {
  // 判断函数
  const [responsiveFn] = useThrottle(() => {
    const w = window.innerWidth;
    const formItemList = renderFormOptions.value.formItemList;
    if (w > 1440) {
      formItemList.forEach((item, index) => {
        item.span = 6;
        item.offset = 0;
      });
    } else if (w > 992) {
      formItemList.forEach((item, index) => {
        item.span = 12;
        item.offset = 0;
      });
    } else {
      formItemList.forEach((item, index) => {
        item.span = 24;
        item.offset = 0;
      });
    }
  }, 300);

  onMounted(() => {
    responsiveFn();
  });

  window.addEventListener('resize', responsiveFn, false);
  onBeforeUnmount(() => {
    window.removeEventListener('resize', responsiveFn);
  });

  return {
    renderFormOptions,
  };
}

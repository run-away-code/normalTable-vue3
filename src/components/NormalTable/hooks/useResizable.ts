import { reactive, onMounted, onBeforeUnmount } from 'vue';
import { useThrottle } from 'vue-ahooks'
export function useBCTResizable() {
  const layout = reactive({
    span: 6,
    offset: 0
  })
  // 判断函数
  const [responsiveFn] = useThrottle(() => {
    const w = window.innerWidth;
    if (w > 1440) {
      layout.span = 6
    } else if (w < 992) {
      layout.span = 12
    } else {
      layout.span = 8
    }
  }, 300);
  onMounted(() => {
    window.addEventListener('resize', responsiveFn, false);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', responsiveFn);
  });

  return {
    layout,
  };
}

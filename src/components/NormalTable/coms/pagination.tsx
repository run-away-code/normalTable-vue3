import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  resolveComponent,
  h,
} from "vue";

const filterProps = {
  filter: [Array, Function],
  onSearch: Function,
};
export default defineComponent({
  name: "NormalPagination",
  props: filterProps,
  setup(props) {
    return () => (
      <div>
        {/* <el-color-picker /> */}
        <el-pagination total="5" layout="prev, pager, next" />
      </div>
    );
  },
});

import { defineComponent, onMounted, ref, reactive, h } from "vue";

const filterProps = {
  filter: [Array, Function],
  onSearch: Function,
};
export default defineComponent({
  name: "NormalPagination",
  props: filterProps,
  setup(props) {
    const total = 50;
    return () => (
      <div>
        <el-pagination total={total} layout="prev, pager, next" />
      </div>
    );
  },
});

import {
  defineComponent,
  onMounted,
  nextTick,
  ref,
  toRefs,
  PropType,
} from "vue";
import Tables from "./coms/table";
import Filter from "./coms/filter";
import Pagination from "./coms/pagination";

const gatherProps = {
  type: Object,
  filter: [Array, Function],
  colums: Array,
  onSearch: Function as PropType<(...args: any[]) => any | PromiseLike<any>>,
};
export default defineComponent({
  name: "NormalTable",
  props: gatherProps,
  setup(props) {
    const tableData = ref([]);

    // 查询
    const handleSearch = async () => {
      const params = {
        filterValue: {},
        pagination: {},
      };
      try {
        const { list } = await props.onSearch(params);
        tableData.value = list;
      } catch (error) {
        console.error("onSearch出错");
      }
    };
    onMounted(() => {
      nextTick(() => {
        // 首次执行onsearch
        handleSearch();
      });
    });
    // 筛选项
    const filterVNode = (filter) => {
      if (!filter || !filter.length) return "";
      return <Filter filter={filter} onSearch={handleSearch} />;
    };
    // table
    const tableVNode = (colums) => {
      if (!colums) return "";
      return <Tables colums={colums} tableData={tableData.value}></Tables>;
    };
    // 分页
    const paginationVNode = () => {
      console.log("paginationVNode");
      return <Pagination></Pagination>;
    };
    return () => {
      const { filter, colums } = toRefs(props);
      console.log(filter, "filter");
      return (
        <>
          {/* 筛选项 */}
          {filterVNode(filter.value)}
          {/* table */}
          {tableVNode(colums.value)}
          {/* 分页 */}
          {paginationVNode()}
        </>
      );
    };
  },
});

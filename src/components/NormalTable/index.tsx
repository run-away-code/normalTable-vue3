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
  columns: Array,
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
    const tableVNode = (columns) => {
      if (!columns) return "";
      return <Tables columns={columns} tableData={tableData.value}></Tables>;
    };
    // 分页
    const paginationVNode = () => {
      return <Pagination></Pagination>;
    };
    return () => {
      const { filter, columns } = toRefs(props);
      console.log(columns, "columns");
      return (
        <>
          {/* 筛选项 */}
          {filterVNode(filter.value)}
          {/* table */}
          {tableVNode(columns.value)}
          {/* 分页 */}
          {paginationVNode()}
        </>
      );
    };
  },
});

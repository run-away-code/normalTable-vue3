import {
  defineComponent,
  onMounted,
  nextTick,
  ref,
  toRefs,
  PropType,
  isRef,
  shallowRef,
} from "vue";
import Tables from "./coms/table";
import Filter from "./coms/filter";
import Pagination from "./coms/pagination.vue";
import "./common.scss";
interface ColumnProps {
  type: string;
  label: string;
  [key: string]: any;
}
const gatherProps = {
  type: Object,
  filter: [Array, Function],
  columns: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
  onSearch: Function as PropType<(...args: any[]) => any | PromiseLike<any>>,
  pagination: [Object, Boolean],
};
export default defineComponent({
  name: "NormalTable",
  props: gatherProps,
  setup(props) {
    const tableData = ref([]);
    const pageData = shallowRef({
      page: 1,
      total: 0,
    });
    // 查询
    const handleSearch = async () => {
      const params = {
        filterValue: {},
        pagination: {
          page: 1,
        },
      };
      try {
        const { list, ...pagination } = await props.onSearch(params);
        tableData.value = list;
        pageData.value = pagination;
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
    const paginationVNode = () => {
      // pagination为false
      if ("pagination" in props && !props.pagination) {
        return null;
      }
      return <Pagination {...props.pagination} {...pageData.value} />;
    };
    return () => {
      const { filter, columns } = toRefs(props);
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

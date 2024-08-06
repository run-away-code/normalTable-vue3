import { defineComponent, PropType, toRefs, reactive } from "vue";
import Columns from "./columns";
const TableProps = {
  columns: {
    type: [Array, Function] as PropType<ColumnProps[] | (() => ColumnProps[])>,
    required: true,
  },
  tableData: Array,
};
export default defineComponent({
  name: "Normaltable",
  props: TableProps,
  setup(props) {
    return () => {
      return (
        <>
          <el-table data={props.tableData} style="width: 100%">
            <Columns columns={props.columns} />
          </el-table>
        </>
      );
    };
  },
});

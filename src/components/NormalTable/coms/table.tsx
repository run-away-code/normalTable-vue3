import { defineComponent, onMounted, toRefs, reactive } from "vue";
const TableProps = {
  colums: [],
  tableData: Array,
};
export default defineComponent({
  name: "Normaltable",
  props: TableProps,
  setup(props) {
    return () => {
      console.log(props, "dddd");
      return (
        <>
          <el-table data={props.tableData} style="width: 100%">
            {props.colums?.map((it) => (
              <el-table-column {...it} prop={it.prop} label={it.label} />
            ))}
          </el-table>
        </>
      );
    };
  },
});

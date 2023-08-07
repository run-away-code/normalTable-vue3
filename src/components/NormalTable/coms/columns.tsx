import { defineComponent } from "vue";

const columnsProps = {
  columns: [],
};
export default defineComponent({
  name: "NormalCloumns",
  props: columnsProps,
  setup(props) {
    // 默认场景
    const defaultColumn = (it) => {
      return <el-table-column {...it} prop={it.prop} label={it.label} />;
    };
    // 返回columns
    const getColumns = () => {
      return props.columns?.map((it) => {
        if (it.type) {
          return columnsActions[it.type];
        }
        return defaultColumn(it);
      });
    };
    return () => {
      return getColumns();
    };
  },
});

const columnsActions = {
  img: (it) => {
    return <el-table-column></el-table-column>;
  },
  btns: (it) => {
    return <el-table-column></el-table-column>;
  },
};

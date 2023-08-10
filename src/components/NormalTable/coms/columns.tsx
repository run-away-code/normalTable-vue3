import { defineComponent } from "vue";
import { formatMoney } from "@/utils/format";
const columnsProps = {
  columns: [],
};
const defaultParam = {
  align: "center",
};
export default defineComponent({
  name: "NormalCloumns",
  props: columnsProps,
  setup(props, { slots }) {
    // 默认场景
    const defaultColumn = (it) => {
      return (
        <el-table-column
          {...defaultParam}
          {...it}
          prop={it.prop}
          label={it.label}
        >
          {(scope) => {
            if (it.type) {
              return columnsActions[it.type](it, scope);
            }
            if (it.render) {
              return columnsActions["render"](it, scope);
            }
            const value = scope.row[it.prop];
            return <span>{value}</span>;
          }}
        </el-table-column>
      );
    };
    // 返回columns
    const getColumns = () => {
      return props.columns?.map((it) => {
        return defaultColumn(it);
      });
    };
    return () => {
      return <>{getColumns()}</>;
    };
  },
});

const columnsActions = {
  money: (it, scope) => {
    const value = scope.row[it.prop];
    return <span>{formatMoney(value)}</span>;
  },
  render: (it, scope) => {
    return <>{it.render(scope)}</>;
  },
  img: (it, scope) => {
    const value = scope.row[it.prop];
    return <img src={value}></img>;
  },
  btns: (it, scope) => {
    return <el-table-column></el-table-column>;
  },
};

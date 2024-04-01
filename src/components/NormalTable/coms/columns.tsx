import { defineComponent, PropType } from "vue";
import { defaultColumn } from "../hooks/useColumns";

const columnsProps = {
  columns: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
};

export default defineComponent({
  name: "NormalCloumns",
  props: columnsProps,
  setup(props, { slots }) {
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

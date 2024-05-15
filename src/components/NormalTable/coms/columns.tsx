import { defineComponent, PropType, computed } from "vue";
import { defaultColumn } from "../hooks/useColumns";

const columnsProps = {
  columns: {
    type: [Array, Function],
    // type: Array as PropType<ColumnProps[]>,
    required: true,
  },
};

export default defineComponent({
  name: "NormalCloumns",
  props: columnsProps,
  setup(props, { slots }) {
    const columns = computed(() => {
      if (typeof props.columns === "function") {
        return props.columns();
      }
      return props.columns || [];
    });
    // 返回columns
    const getColumns = () => {
      return columns.value.map((it) => {
        return defaultColumn(it);
      });
    };
    return () => {
      return <>{getColumns()}</>;
    };
  },
});

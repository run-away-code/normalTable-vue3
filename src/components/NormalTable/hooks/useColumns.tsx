import { formatMoney } from "@/utils/format";
import type { TypeDefaultColumn } from "../types";
import NormalBtns from "../coms/btns";
import { columnDefaultTypes } from '../constants'
const defaultParam = {
  align: "center",
};
export const columnsActions = new Map([
  [
    "render",
    (it, scope) => {
      return <>{it.render(scope)}</>;
    },
  ],
  [
    "children",
    (it) => {
      return it.children.map((curColumn) => {
        return defaultColumn(curColumn);
      });
    },
  ],
  [
    "money",
    (it, scope) => {
      const value = scope.row[it.prop];
      return <span>{formatMoney(value)}</span>;
    },
  ],
  [
    "template",
    (it) => {
      return (
        <el-table-column
          {...defaultParam}
          {...it}
          prop={it.prop}
          label={it.label}
        ></el-table-column>
      );
    },
  ],
  [
    "img",
    (it, scope) => {
      const value = scope.row[it.prop];
      return <img src={value}></img>;
    },
  ],
  [
    "btns",
    (it, scope) => {
      return <NormalBtns btns={it.btns} scope={scope}></NormalBtns>;
    },
  ],
]);

export const defaultColumn = (it: TypeDefaultColumn) => {
  const templateKeys = columnsActions.keys();
  const key = [...templateKeys].find((k) => it[k]);
  if (columnDefaultTypes.includes(it.type)) {
    const columnTemplate = columnsActions.get('template')
    return columnTemplate(it, {});
  }
  return (
    <el-table-column {...defaultParam} {...it} prop={it.prop} label={it.label}>
      {(scope) => {
        const currentFunc = columnsActions.get(key || it.type);
        if ((key || it.type) && currentFunc) {
          return currentFunc(it, scope);
        }
        const value = scope.row[it.prop];
        return <span>{value}</span>;
      }}
    </el-table-column>
  );
};
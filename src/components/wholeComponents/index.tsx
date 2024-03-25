const dropdownSlots = (list, scope) => {
  return {
    dropdown: () => {
      return (
        <el-dropdown-menu>
          {list.children.map((it) => (
            <el-dropdown-item
              {...(it.bind || {})}
              onClick={() => it.call(scope)}
            >
              {it.label}
            </el-dropdown-item>
          ))}
        </el-dropdown-menu>
      );
    },
  };
};

export const wholeComponents = new Map([
  [
    "elDropdown",
    (it, scope) => {
      return (
        <>
          <el-dropdown v-slots={dropdownSlots(it, scope)}>
            <span class="el-dropdown-link">
              <span style="font-size: 22px; color: var(--custom-color-primary); font-weight: bold">
                ···
              </span>
            </span>
          </el-dropdown>
        </>
      );
    },
  ],
]);

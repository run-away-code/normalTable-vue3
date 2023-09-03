export const wholeComponents = new Map([
  [
    "elDropdown",
    (it, scope) => {
      console.log('elDropdownelDropdown')
      return (
        <>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span style="font-size: 22px; color: var(--custom-color-primary); font-weight: bold">
                ···
              </span>
            </span>
            {(aaa) => {
              console.log(scope, 'scope')
              return <div>123123</div>
            }}
            {/* <template>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template> */}
          </el-dropdown>
        </>
      );
    },
  ],
]);

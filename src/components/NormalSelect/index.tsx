import { defineComponent, onMounted, ref, reactive } from 'vue'
const selectProps = {
  options: []
}
export default defineComponent({
  name: 'NormalSelect',
  props: selectProps,
  setup(props) {
    console.log(props, 'prop1111s')
    return () => <>
      <el-select {...props}>
        {
          props?.options?.map(it => {
            return <el-option {...it} />
          })
        }
      </el-select>
    </>
  }
})
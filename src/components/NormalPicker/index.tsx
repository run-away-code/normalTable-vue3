import { defineComponent, onMounted, ref, reactive } from 'vue'
const selectProps = {
  options: Array,
  bind: Object
}
export default defineComponent({
  name: 'NormalSelect',
  props: selectProps,
  setup(props) {
      console.log(props, 'props')
    return () => <>
      <el-select placeholder="">
        {
          props.options.map(it => {
            return <el-option {...it} />
          })
        }
      </el-select>
    </>
  }
})
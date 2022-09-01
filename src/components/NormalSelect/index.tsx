import { defineComponent, onMounted, ref, effect } from 'vue'
const selectProps = {
  options: []
}
export default defineComponent({
  name: 'NormalSelect',
  props: selectProps,
  setup(props) {
    const value = ref('')
    return () => <>
      <el-select {...props} vModel={value}>
        {
          props?.options?.map(it => {
            return <el-option {...it} />
          })
        }
      </el-select>
    </>
  }
})
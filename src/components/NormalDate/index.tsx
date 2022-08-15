import { defineComponent, onMounted, ref, reactive } from 'vue'
const selectProps = {
  type: String,
  bind: Object
}
export default defineComponent({
  name: 'NormalDate',
  props: selectProps,
  setup(props) {
      console.log(props, 'props')
    return () => <>
      <el-date-picker
        type="datetime"
        placeholder="Select date and time"
      />
    </>
  }
})
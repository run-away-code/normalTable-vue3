import { defineComponent, onMounted, ref, reactive } from 'vue'
const selectProps = {
  options: Array,
  bind: Object
}
export default defineComponent({
  name: 'NormalPicker',
  props: selectProps,
  setup(props) {
      console.log(props, 'props')
    return () => <>
      <el-date-picker
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        size="size"
      />
    </>
  }
})
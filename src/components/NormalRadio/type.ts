export interface inputProps {
  modelValue: String | Number,
  onChange?: (value: string) => {},
  options: Array<Object>,
  [key: string]: any,
}

export interface inputEmits {
  'update:modelValue': (value: string) => void
}
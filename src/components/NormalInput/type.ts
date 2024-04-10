export interface inputProps {
  modelValue: string,
  onChange?: (value: string) => {},
  [key: string]: any
}

export interface inputEmits {
  'update:modelValue': (value: string) => void
}
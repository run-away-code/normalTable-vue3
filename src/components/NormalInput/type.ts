export interface inputProps {
  modelValue: string | number,
  onChange?: (value: string) => {},
  // type?: string,
  [key: string]: any,
}

export interface inputEmits {
  'update:modelValue': (value: string) => void
}
import { Component } from "vue";

export interface FormItemProps {
  label?: string;
  prop: string;
  tag?: string;
  placeholder?: string;
  render?: () => Component;
  bind?: {
    options?: any[];
    [key: string]: any;
  };
  rules?: any[];
}

export interface FormProps {
  items: FormItemProps[];
  inline?: boolean;
  style?: string;
}

export interface FormInstance {
  validate: (callback?: (valid: boolean) => void) => Promise<boolean>;
  resetFields: () => void;
  clearValidate: (props?: string | string[]) => void;
}

export interface FormExpose {
  formRef: FormInstance | null;
}

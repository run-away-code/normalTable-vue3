
// 声明 ref
declare type RefType<T = any> = T | null;

// 声明 HTMLElement
declare type HtmlType = HTMLElement | string | undefined | null;

// 申明 children 可选
declare type ChilType<T = any> = {
  children?: T[];
};

// 申明 数组
declare type EmptyArrayType<T = any> = T[];

// 申明 对象
declare type EmptyObjectType<T = any> = {
  [key: string]: T;
};


interface TypeColumnChildren {
  prop: string
  label: string
  children?: ChilType
}
declare interface ColumnProps {
  type: string;
  label: string;
  prop: string,
  children?: TypeColumnChildren[];
  btns?: any;
  render?: () => void;
  [key: string]: any;
}
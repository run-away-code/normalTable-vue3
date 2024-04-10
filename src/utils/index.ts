import { isRef } from 'vue'
export const isFunction = val => typeof val === 'function'
export const isArray = Array.isArray;
export const isString = val => typeof val === 'string';
export const isSymbol = val => typeof val === 'symbol';
export const isObject = val => val !== null && typeof val === 'object';

export const deepClone = obj => {
  return JSON.parse(JSON.stringify(obj))
}
export const disposeRef = (data) => {
  if (!data) return data
  return isRef(data) ? data.value : data
}
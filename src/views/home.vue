<template>
  <div>
    <NormalTable :data="tableData"></NormalTable>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import NormalTable from '@/components/NormalTable'
const tableData = reactive({
  filter: [
    {
      tag: 'Select',  // 驼峰方式
      label: '状态',
      prop: 'status',
    },
  ],
  colums: [
    {
      prop: 'ddd',
      label: '测12222试',
      width: '140px',
    },
    {
      prop: 'img',
      label: '测12222试',
      type: 'Img'
    }
  ],
  onSearch: async({ filterValue, pagination }) => {
    return {
      ...pagination,
      page: 1,
      total: 1000,
      pageSize: 100,
      list: []
    }
  }
})
</script>

<style>

</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()
//定义一个响应式数据, 在js中值需要.value方式获取,但页面上不需要
const count = ref(0)
const showcount = computed(()=>{
  return store.getters['getCount']
})
const addBtn = ()=>{
  store.commit('setCount',  ++count.value)
}
</script>

<template>
  <h1>{{ showcount }}</h1>

  <button type="button" @click="addBtn">新增</button>
    <el-button disabled>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
</template>

<style scoped>

</style>

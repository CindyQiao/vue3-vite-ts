<template>
   <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in tabs">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();
//定义面包屑导航数据
const tabs = ref([])
const getBreadcrumb = ()=>{
    //获取所有 有meta和title
    let breadCrumbList = route.matched.filter(item =>{
       return item.meta && item.meta.title
    })
    const first = breadCrumbList [0];
    
    if(first.path !== '/dashboard'){
        breadCrumbList = [{
            path: '/dashboard',
            meta:{
                title: "首页"
            }
        } as any].concat(breadCrumbList)
    }
    tabs.value = breadCrumbList
}
getBreadcrumb()
watch(
    ()=>route.path,
    ()=>getBreadcrumb()
)
</script>

<style scoped lang='scss'>

</style>
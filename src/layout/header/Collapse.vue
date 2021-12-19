<template>
   <el-icon class="icons" @click="changeIcon">
        <component :is="status ? Expand : Fold"></component>
    </el-icon>
</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useStore } from '@/store/index'
const store = useStore()
// const status = ref(false)
const status = computed(()=>{
    return store.getters['getCollapse']
})

//图标切换
const changeIcon = () =>{
    // status.value = !status.value;
    store.commit('setCollapse', !status.value)
}
</script>

<style scoped lang='scss'>
.icons{
    font-size: 20px;
    color: #303133;
    cursor: pointer;
    margin-right: 15px;
}
</style>
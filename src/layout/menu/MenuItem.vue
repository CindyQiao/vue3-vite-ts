<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <!-- 动态组件 -->
                
                <el-icon><component :is="menu.meta.icon"/></el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            <!-- 递归调用自己 --> 
            <menu-item :menuList="menu.children"></menu-item>
        </el-sub-menu>
        <el-menu-item :index="menu.path" v-else style="color: #f4f4f4">
            <el-icon><component :is="menu.meta.icon"/></el-icon>
            <template #title>{{menu.meta.title}}</template>
        </el-menu-item>
    </template>
    
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
defineProps(["menuList"])

</script>
<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
    <MenuLogo v-if="!isCollapse"></MenuLogo>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    router
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import MenuItem from './MenuItem.vue'
import MenuLogo from './MenuLogo.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store/index'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

// 获取当前路由
const route = useRoute();
const activeIndex = computed(()=>{
    const {path} = route;
    return path
})
const store = useStore()
const isCollapse = computed(()=>{
    return store.getters['getCollapse']
})


// const isCollapse = ref(false);
const handleOpen = (key: string | number, keyPath: string)=>{
    console.log(key, keyPath);
};
const handleClose = (key: string | number, keyPath: string) => {
  console.log(key, keyPath);
};
let menuList = reactive([
    {
        path: '/dashboard',
        component: "Layout",
        meta: {
            title: "首页",
            icon: "HomeFilled",
            roles: ["sys:manage"]
        },
        children:[]
    },
    {
        path: '/system',
        component: "Layout",
        alwaysShow: true,
        name: "system",
        meta: {
            title: "系统管理",
            icon: "Menu",
            roles: ["sys:manage"],
            parentId: 0
        },
        children:[
            {
                path: '/department',
                component: "system/department",
                alwaysShow: false,
                name: "department",
                meta: {
                    title: "机构管理",
                    icon: "el-icon-document",
                    roles: ["sys:dept"],
                    parentId: 17
                },
            },
            {
                path: '/userList',
                component: "system/User/UserList",
                alwaysShow: false,
                name: "userList",
                meta: {
                    title: "用户管理",
                    icon: "el-icon-s-custom",
                    roles: ["sys:user"],
                    parentId: 17
                },
            },
            {
                path: '/roleList',
                component: "system/Role/RoleList",
                alwaysShow: false,
                name: "roleList",
                meta: {
                    title: "角色管理",
                    icon: "el-icon-s-tools",
                    roles: ["sys:role"],
                    parentId: 17
                },
            },
            {
                path: '/menuList',
                component: "system/Menu/MenuList",
                alwaysShow: false,
                name: "menuList",
                meta: {
                    title: "权限管理",
                    icon: "el-icon-document",
                    roles: ["sys:menu"],
                    parentId: 17
                },
            }
        ]
    },
    {
        path: '/goods',
        component: "Layout",
        alwaysShow: true,
        name: "goods",
        meta: {
            title: "商品管理",
            icon: "el-icon-document",
            roles: ["sys:goods"],
            parentId: 0
        },
        children:[
            {
                path: '/goodCategory',
                component: "/goods/goodCategory",
                alwaysShow: false,
                name: "goodCategory",
                meta: {
                    title: "商品分类",
                    icon: "el-icon-document",
                    roles: ["sys:goodCategory"],
                    parentId: 34
                },
            },
        ]
    },
    {
        path: '/systemConfig',
        component: "Layout",
        alwaysShow: true,
        name: "systemConfig",
        meta: {
            title: "系统工具",
            icon: "el-icon-document",
            roles: ["sys:systemConfig"],
            parentId: 0
        },
        children:[
            {
                path: '/document',
                component: "/system/config/systemDocument",
                alwaysShow: false,
                name: "http://42.193.158.170:8089/swagger-ui/index.html",
                meta: {
                    title: "接口文档",
                    icon: "el-icon-document",
                    roles: ["sys:document"],
                    parentId: 42
                },
            },
        ]
    }
    
])
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
    color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item){
    color: #bfcbd9;
}
/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active){
    color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item){
    background: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover){
    background: #001528 !important;
}
</style>
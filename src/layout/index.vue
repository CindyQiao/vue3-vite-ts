<template>
  <el-container class="layout">
    <el-aside width="auto" class="aside">
      <menuBars></menuBars>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <tabs></tabs>
        <router-view v-slot="{ Component }">
          <keep-alive :include="['roleList', 'userList']" :exclude="[]">
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Header from "@/layout/header/Header.vue";
import menuBars from "@/layout/menu/MenuBars.vue";
import tabs from "@/layout/tabs/tabs.vue";

</script>
<style lang="scss">
.layout {
  height: 100%;
  .aside {
    background: rgb(48, 65, 86);
  }
  .header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
  .main {
    // background: purple;
  }
}
</style>

<template>
   <el-tabs
    v-model="activeTab"
    type="card"
    closable
    @tab-remove="removeTab"
    @tab-click ="tabClick"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useStore } from '@/store/index'
import { useRoute, useRouter } from 'vue-router'
import { Itable } from '@/store/type/index'
const route = useRoute();
const router = useRouter();
const store = useStore();


//当前激活的选项卡, 与当前激活的路由一致
const activeTab = ref('');
const tabsList = computed(()=>{
    return store.getters['getTabs']
})

const setActiveTab = ()=>{
    activeTab.value = route.path
}

// 删除选项卡
const removeTab = (targetName: string)=>{
    if(targetName === '/dashboard') return
    const tabs = tabsList.value;
      let activeName = activeTab.value;
      if (activeName === targetName) {
        tabs.forEach((tab: Itable, index: number) => {
          if (tab.path === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.path
            }
          }
        })
      }

      activeTab.value = activeName
      store.state.tabsList = tabs.filter((tab: Itable) => tab.path !== targetName)

      router.push({path: activeName})
}
// 填加选项卡
const addTab = ()=>{
    //从当前路由获取path和title
    const { path,meta,name } = route;
    const tab: Itable = {
        path: path,
        title: meta.title as string,
        name:name
    }
    store.commit('addTable', tab)


}
setActiveTab();
addTab();
watch(()=>route.path,()=>{
    // 设置激活的选项卡
    setActiveTab();
    //把当前路由添加到选项卡数据
    addTab();
})
const beforeRefresh = () =>{
    window.addEventListener('beforeunload',()=>{
        sessionStorage.setItem('tabsView', JSON.stringify(tabsList.value))
    })
    let tabSession = sessionStroage.getItem("tabsView");
    if(tabSession){
        let oldTabs = JSON.parse(tabSession);
        if(oldTabs.length>0){
            store.state.tabList = oldTabs;
        }
    }
}
// 解决刷新数据丢失问题
onMounted(()=>route.path,()=>{
    beforeRefresh()
    // 设置激活的选项卡
    setActiveTab();
    //把当前路由添加到选项卡数据
    addTab();
})
//选项卡点击
const tabClick = (tab: any)=>{
    const {props} = tab;
    // console.log(tab.props);
    //跳转路由
    
    router.push({path: props.name})
    
}
</script>

<style scoped lang='scss'>

</style>
// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Itable } from './type/index'

export interface State {
  count: number,
  collapse: boolean,
  tabsList: Array<Itable>,
  componentName: String
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    collapse: false,
    tabsList: [],
    componentName: ""
  },
  mutations:{
      setCount(state: State, count: number){
          state.count = count;
      },
      //设置collapse
      setCollapse(state: State, collapse: boolean){
        state.collapse = collapse;
      },
      addTable:(state: State, tab: Itable) => {
        //判断是否已经存在,如果不存在,才放入
        if(state.tabsList.some(item => {
          return item.path === tab.path
        })){
          return;
        }
        state.componentName=tab.name;
        state.tabsList.push(tab)
      },
      setComponentName:(state: State, componentname: string) =>{
        state.componentName = componentname
      }
  },
  getters:{
      getCount(state: State){
          return state.count
      },
      // 获取collapse
      getCollapse(state: State, collapse: boolean){
        return state.collapse
      },
      getTabs: (state: State) =>{
        return state.tabsList
      },
      getComponentName: (state: State) =>{
        return state.componentName
      }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
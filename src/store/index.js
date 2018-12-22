import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

// 一个vuex的插件
const syncStorage = (store) => {
  // 当store初始化后就会调用
  store.subscribe((mutation, state) => {
    // 每次mutation之后会调用
    window.localStorage.setItem('PlantHouse-cart', JSON.stringify(state.cart))
  })
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions,
  plugins: [syncStorage]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

// 引入vuex store
import store from './store'
// 将requests里的所有方法引入,加入到$http里
import * as $http from './requests'

Vue.prototype.$http = $http

Vue.config.productionTip = false

Vue.use(MintUI)

// 添加全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequire === true && store.state.isLogin === false) {
    next('/Login')
  } else {
    if (to.meta.title) {
      store.commit('setPageTitle', to.meta.title)
    }
    // 必须next
    next()
  }
})

// 全局混入，每个组件都会有这些
Vue.mixin({
  filters: {
    // 处理cartCountBadge格式
    formatCount (v) {
      return v > 99 ? '99+' : v
    },
    // 处理购物车总计格式
    toFix (v) {
      return v.toFixed(2)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import * as mutationTypes from './mutationTypes'

export default {
  // 增加该商品数量
  [mutationTypes.addCartItemCount] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
  },
  // 减少该商品数量
  [mutationTypes.reduceCartItemCount] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id && item.count > 1) {
        item.count -= 1
      }
      return item
    })
  },
  // 该商品的chockbox状态改变时，取反对应item的isChecked
  [mutationTypes.handelItemCheckedChange] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
  // 全选checkbox改变时，同时改变全部的全部商品的isChecked状态
  [mutationTypes.handleCartAllChecked] (state, e) {
    state.cart = state.cart.map((item) => {
      if (e.target.checked === true) {
        item.isChecked = true
      } else {
        item.isChecked = false
      }
      return item
    })
  },
  // 加入购物车
  [mutationTypes.addToCart] (state, cartItem) {
    const isInCart = state.cart.some(item => {
      return item.id === cartItem.id
    })
    if (isInCart) {
      state.cart = state.cart.map((item) => {
        if (item.id === cartItem.id) {
          item.count += 1
        }
        return item
      })
    } else {
      state.cart.push({
        ...cartItem,
        count: 1,
        isChecked: false
      })
    }
  },
  // 设置返回显示状态
  [mutationTypes.handleIsShowBack] (state, isShowBack = false) {
    state.isShowBack = isShowBack
  },
  // 将header的title与tabbar的title同步
  [mutationTypes.setPageTitle] (state, pageTitle) {
    state.pageTitle = pageTitle
  },
  // 登录成功
  [mutationTypes.loginSuccess] (state) {
    state.isLogin = true
  }
}

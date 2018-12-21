export default {
  // 判断购物车是否是不为空的
  cartIsNotEmpty (state) {
    return Array.isArray(state.cart) && state.cart.length !== 0
  },
  // 计算购物车选中的商品总数
  cartCheckedCount (state) {
    // eslint-disable-next-line no-return-assign
    return state.cart.reduce((total, item) => {
      if (item.isChecked === true) {
        total += item.count
      }
      return total
    }, 0)
  },
  // 计算购物车选中的总价格
  cartCheckedPrice (state) {
    // eslint-disable-next-line no-return-assign
    return state.cart.reduce((total, item) => {
      if (item.isChecked === true) {
        total += item.count * item.price
      }
      return total
    }, 0)
  },
  // 购物车全选
  isAllCartItemChecked (state) {
    return state.cart.every(item => {
      return item.isChecked === true
    })
  },
  // 购物车计数标记
  cartCountBadge (state) {
    return state.cart.reduce((total, item) => {
      total += item.count
      return total
    }, 0)
  }
}

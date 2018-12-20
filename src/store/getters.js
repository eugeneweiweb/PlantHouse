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
  }
}

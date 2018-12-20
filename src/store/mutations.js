import * as mutationTypes from './mutationTypes'

export default {
  [mutationTypes.addCartItemCount] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id) {
        item.count += 1
      }
      return item
    })
  },
  [mutationTypes.reduceCartItemCount] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id && item.count > 1) {
        item.count -= 1
      }
      return item
    })
  }
}

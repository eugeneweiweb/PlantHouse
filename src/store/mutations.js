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
  },
  [mutationTypes.handelItemCheckedChange] (state, id) {
    state.cart = state.cart.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
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
  }
}

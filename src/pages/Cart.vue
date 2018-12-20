<template>
  <div class="cart">
    <div v-if="cartIsNotEmpty">
      <table>
        <thead>
          <th><input
            type="checkbox"
            :checked="isAllCartItemChecked"
            @change="handleCartAllChecked"
          >全选</th>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
        </thead>
        <tbody
          v-for="item in cart"
          :key="item.id"
        >
          <th><input type="checkbox"
            :checked=item.isChecked
            @change="handelItemCheckedChange(item.id)"
          ></th>
          <th>{{item.id}}</th>
          <th>{{item.title}}</th>
          <th>{{item.price}}</th>
          <th><span @click="reduceCartItemCount(item.id)">-</span>{{item.count}}<span @click="addCartItemCount(item.id)">+</span></th>
        </tbody>
      </table>
      <div>选中{{cartCheckedCount}}件商品,总计￥{{cartCheckedPrice}}</div>
      <button>去结算</button>
    </div>
    <div v-else>
      购物车没有商品
    </div>
  </div>
</template>

<script>
import * as mutationTypes from '../store/mutationTypes'
import {
  mapState,
  mapMutations,
  mapGetters
} from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'cartIsNotEmpty',
      'cartCheckedCount',
      'cartCheckedPrice',
      'isAllCartItemChecked'
    ])
  },
  methods: {
    ...mapMutations([
      mutationTypes.addCartItemCount,
      mutationTypes.reduceCartItemCount,
      mutationTypes.handelItemCheckedChange,
      mutationTypes.handleCartAllChecked
    ])
  }
}
</script>

<style>

</style>

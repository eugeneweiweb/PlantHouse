<template>
  <div class="cart">
    <div v-if="cartIsNotEmpty" class="if">
      <header>
        <p>共件{{cartCheckedCount}}商品</p>
      </header>
      <div class="cart-list">
        <dl
          v-for="item in cart"
          :key="item.id"
        >
          <input type="checkbox" class="checkbox" :checked="item.isChecked" @change="handelItemCheckedChange(item.id)">
          <dt><img :src="item.img" :alt="item.name"></dt>
          <dd>
            <i>{{item.name}}  {{item.title}}</i>
            <p>
              <em>￥{{item.price | toFix}}</em>
              <input type="button" value="-" @click="reduceCartItemCount">
              <span>{{item.count}}</span>
              <input type="button" value="+" @click="addCartItemCount">
            </p></dd>
        </dl>
      </div>
      <footer>
        <label><input type="checkbox" class="select-all" :checked="isAllCartItemChecked" @change="handleCartAllChecked">全选</label>
        <span>合计：<em>￥{{cartCheckedPrice | toFix}}</em></span>
        <button>结算</button>
      </footer>
    </div>
    <div v-else class="else">
      --- 购物车没有物品 ---
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
      'isAllCartItemChecked',
      'toFix'
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

<style lang="scss" scoped>
  .cart{
    overflow-x: hidden;
    .if{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      header{
        padding-left: 2vw;
        height: 10vw;
        color: white;
        line-height: 10vw;
        border-radius: 2vw;
        background-color: #09f;
      }
      .cart-list{
        flex: 1;
        width: 95vw;
        padding: 2vw;
        border: 2px solid #ccc;
        border-radius: 2vw;
        dl{
          display: flex;
          height: 20vw;
          .checkbox{
            margin: 8vw auto;
            width: 4vw;
            height: 4vw;
          }
          dt{
            padding: 1vw;
            width: 25vw;
            height: 100%;
            text-align: center;
            line-height: 20vw;
            img{
              height: 18vw;
              width: 18vw;
            }
          }
          dd{
            width: 56vw;
            height: 100%;
            i{
              box-sizing:border-box;
              padding: 5px;
              display: block;
              height: 10vw;
              font-size: 12px;
              color: #999;
            }
            p{
              box-sizing:border-box;
              padding: 5px;
              height: 10vw;
              vertical-align: middle;
              em{
                display: inline-block;
                width: 40%;
                color: red;
              }
              input{
                display: inline-block;
                width: 10%;
                text-align: center;
                border: 1px solid #ccc;
              }
              span{
                display: inline-block;
                width: 20%;
                text-align: center;
              }
            }
          }
        }
      }
      footer{
        height: 10vw;
        line-height: 10vw;
        color: #999;
        padding-left: 2vw;
        padding-right: 2vw;
        background-color: white;
        .select-all{
          width: 6vw;
        }
        button{
          margin: 1vw;
          float: right;
          width: 16vw;
          height: 8vw;
          border: none;
          border-radius: 3vw;
          background-color: pink;
        }
      }
    }
    .else{
      margin-top: 3vw;
      text-align: center;
    }
  }
</style>

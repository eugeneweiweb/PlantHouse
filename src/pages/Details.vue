<template>
  <div class="detail">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
          <div v-for="item in details.swiper" :key="item.id" class="swiper-slide">
            <img :src="item.img" :title="item.title">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
    </div>
    <div class="productInfo">
      <ul>
        <li><span>商品名：</span><i>{{details.name}}</i></li>
        <li><span>价格：￥</span><i>{{details.price}}</i></li>
        <li><span>商品描述：</span><i>{{details.title}}</i></li>
        <li class="addToCartBtn"><mt-button type="primary" size="large" @click="addToCart(details)">加入购物车</mt-button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import {
  mapMutations
} from 'vuex'
import * as mutationTypes from '../store/mutationTypes'

export default {
  name: 'detail',
  data () {
    return {
      // swiper: [],
      details: {}
    }
  },
  created (state) {
    this.$http.getProductDetail(this.$route.params.id)
      .then(resp => {
        // this.swiper = resp
        resp.id = this.$route.params.id
        this.details = resp
        this.setPageTitle(resp.name)
        this.$nextTick()
          .then(() => {
            this.initSwiper()
          })
      })
    this.handleIsShowBack(true)
  },
  beforeDestroy (state) {
    this.handleIsShowBack(false)
  },
  methods: {
    ...mapMutations([
      mutationTypes.handleIsShowBack,
      mutationTypes.addToCart,
      mutationTypes.setPageTitle
    ]),
    initSwiper () {
      this.$detailSwiper = new Swiper(this.$refs.swiperContainer, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.css';
.detail{
  .swiper-container {
    width: 100%;
    height: 30%;
    padding-top: percentage(720/1080);
    >.swiper-wrapper {
      position: absolute;
      top: 0;
      left: 0;

      img{
        max-width: 100%;
      }
    }
    >.swiper-pagination-bullet-active {
      background-color: #dedede;
    }
  }
  .productInfo{
    height: 70%;
    border: 2px solid #ccc;
    >ul{
      height: 100%;
      border-radius: 1vw;
      li{
        padding: 1vw;
        line-height: 10vw;
        height: 10vw;
        border-bottom: 1px solid #ccc;
        &.addToCartBtn{
          padding: 0;
        }
      }
    }
  }
}
</style>

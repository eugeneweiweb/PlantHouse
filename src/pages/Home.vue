<template>
  <div class="home">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in swiper" :key="item.id" class="swiper-slide">
              <img :src="item.img" :title="item.title">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
    </div>
  </div>
</template>

<script>

import Swiper from 'swiper'

export default {
  name: 'home',
  data () {
    return {
      swiper: []
    }
  },

  created () {
    this.$http.getSwiper()
      .then(resp => {
        this.swiper = resp
        this.$nextTick()
          .then(() => {
            this.initSwiper()
          })
      })
  },
  methods: {
    initSwiper () {
      this.$http.getSwiper()
        .then(resp => {
          this.mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import 'swiper/dist/css/swiper.css';
  .swiper-container {
    width: 100%;
    height: 0;
    padding-top: percentage(540/1080);
    .swiper-wrapper {
      position: absolute;
      top: 0;
      left: 0;

      img{
        max-width: 100%;
      }
    }
    .swiper-pagination-bullet-active {
      background-color: #dedede;
    }
  }

</style>

<template>
  <div class="details">
    <!-- 轮播图 -->
    <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
            <div v-for="item in details.swiper" :key="item.id" class="swiper-slide">
              <img :src="item.img" :alt="item.name">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
    </div>
    {{details.title}}
  </div>
</template>

<script>

import Swiper from 'swiper'

export default {
  name: 'detail',
  data () {
    return {
      details: {}
    }
  },
  created () {
    this.$http.getProductDetail(this.$route.params.id)
      .then(resp => {
        resp.id = this.$route.params.id
        this.details = resp
        this.$nextTick()
          .then(() => {
            this.initSwiper()
          })
      })
  },
  methods: {
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
.swiper-container {
  width: 100%;
  height: 0;
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
</style>

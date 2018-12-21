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

import {
  mapMutations
} from 'vuex'
import * as mutationTypes from '../store/mutationTypes'
export default {
  name: 'detail',
  data () {
    return {
      details: {}
    }
  },
  created (state) {
    this.handleIsShowBack(true)
  },
  beforeDestroy (state) {
    this.handleIsShowBack(false)
  },
  methods: {
    ...mapMutations([
      mutationTypes.handleIsShowBack
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>

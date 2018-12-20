<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
            <div v-for="item in swiper" :key="item.id" class="swiper-slide">
              <img :src="item.img" :title="item.title">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
    </div>
    <!-- 功能标签 -->
    <div class="tag">
      <dl>
        <dt>
          <span>img</span>
          <!-- <img src="" alt=""> -->
        </dt>
        <dd>签到</dd>
      </dl>
      <dl>
        <dt>
          <span>img</span>
          <!-- <img src="" alt=""> -->
        </dt>
        <dd>签到</dd>
      </dl>
      <dl>
        <dt>
          <span>img</span>
          <!-- <img src="" alt=""> -->
        </dt>
        <dd>签到</dd>
      </dl>
      <dl>
        <dt>
          <span>img</span>
          <!-- <img src="" alt=""> -->
        </dt>
        <dd>签到</dd>
      </dl>
      <dl>
        <dt>
          <span>img</span>
          <!-- <img src="" alt=""> -->
        </dt>
        <dd>签到</dd>
      </dl>
    </div>
    <!-- 热门活动 -->
    <div class="activity">
      <dl>
        <dd>全球购</dd>
        <dt><img src="" alt=""></dt>
      </dl>
      <dl>
        <dd>全球购</dd>
        <dt><img src="" alt=""></dt>
      </dl>
      <dl>
        <dd>全球购</dd>
        <dt><img src="" alt=""></dt>
      </dl>
      <dl>
        <dd>全球购</dd>
        <dt><img src="" alt=""></dt>
      </dl>
    </div>
    <!-- 精品秒杀 -->
    <section class="boutique">
      <header>
        <h3>精品秒杀</h3>
        <span>更多>></span>
      </header>
      <article>
        <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
              <div v-for="item in swiper" :key="item.id" class="swiper-slide">
                <img :src="item.img" :title="item.title">
              </div>
          </div>
          <div class="swiper-pagination"></div>
        </div> -->
      </article>
    </section>
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
      this.$homeSwiper = new Swiper(this.$refs.swiperContainer, {
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

<style lang="scss">
@import 'swiper/dist/css/swiper.css';
.swiper-container {
  width: 100%;
  height: 0;
  padding-top: percentage(540/1080);
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
.activity{
  >dl{
    box-sizing: border-box;
    margin: 1vw;
    width: 48vw;
    height: 20vw;
    float: left;
    border-radius: 3vw;
    background: -webkit-linear-gradient(left, white , #ffebee); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, white, #ffebee); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, white, #ffebee); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, white , #ffebee); /* 标准的语法 */
    >dt{
      box-sizing: border-box;
      width: 24vw;
      height: 100%;
      padding-top: 10%;
      padding-left: 5%;
    }
    >dd{
      box-sizing: border-box;
      width: 24vw;
      height: 100%;
      padding-top: 10%;
      padding-left: 5%;
    }
  }
}
.tag{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20vw;
  >dl{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    dd{
      margin-top: 1vw;
    }
  }
}
.boutique{
  height: 60vw;
  width: 100%;
  overflow: hidden;
  header{
    box-sizing: border-box;
    padding: 2vw;
    width: 100%;
    height: 10vw;
    line-height: 6vw;
    h3{
      display: inline;
    }
    span{
      float: right;
      font-size: 12px;
    }
  }
}
</style>

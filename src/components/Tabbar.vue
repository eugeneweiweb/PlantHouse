<template>
  <div class="tabbar">
    <router-link
      :key="route.name"
      tag="div"
      :to="route.path"
      v-for="route in navData"
      class="tabbar-item">
      <div class="icon">
        <i class="iconfont" v-html="route.icon"></i>
        <div class="title">{{route.title}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>

import routes from '@/router/routes'

export default {
  name: 'tabbar',
  data () {
    return {
      navData: routes.filter(route => route.isTabbar === true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 972272 */
    src: url('http://at.alicdn.com/t/font_972272_jfpufe7myfk.eot');
    src: url('http://at.alicdn.com/t/font_972272_jfpufe7myfk.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_972272_jfpufe7myfk.woff') format('woff'),
    url('http://at.alicdn.com/t/font_972272_jfpufe7myfk.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_972272_jfpufe7myfk.svg#iconfont') format('svg');
  }
  .tabbar{
    display: flex;
    height: 100%;
    justify-content: space-around;
    &-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      &.router-link-active
      {
        color:#1afa29;
      }
      >.icon{
        >.iconfont{
          height: 6vw;
          line-height: 6vw;
          font-family: 'iconfont';
          font-size: 6vw;
        }
        >.title{
        margin-top: 0.5vw;
        font-size: 2vw;
        // color: #7f7f7f;
      }
      }
      
      
    }
  }
</style>

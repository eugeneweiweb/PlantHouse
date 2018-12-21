<template>
  <div class="fheader">
    <mt-header class="fheader-search" :title="pageTitle">
      <mt-button v-if="isShowBack" @click="$router.back()" slot="left" icon="back">返回</mt-button>
      <input type="search" placeholder="搜索呢喜欢的商品"/>
    </mt-header>
    <div class="set">
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'fheader',
  computed: {
    ...mapState([
      'isShowBack',
      'pageTitle'
    ])
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
  .fheader{
    height: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
  }
  .fheader-search{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex:1;
    >input{
      padding: 3vw;
      width: 60%;
      height: 60%;
      border-radius: 5vw;
      color: #ddd;
      border: 1px solid #ddd;
      background-color: #F5F5F5;
    }
  }
</style>

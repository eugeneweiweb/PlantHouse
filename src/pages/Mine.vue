<template>
  <div class="mine">
    <div class="head-portrait">
      <dl>
        <dt>
          <img :src="loginUserPortraitUrl" alt="头像">
        </dt>
        <dd>
          <p>{{loginUserName}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
import * as mutationTypes from '../store/mutationTypes'

export default {
  name: 'mine',
  computed: {
    ...mapState([
      'isLogin',
      'loginUserName',
      'loginUserPortraitUrl'
    ])
  },
  methods: {
    ...mapMutations([
      mutationTypes.displayUserInfo
    ])
  }
}
</script>

<style lang="scss" scoped>
  .mine{
    .head-portrait{
      >dl{
        >dt{
          margin-top: 10vw;
          text-align: center;
          border-radius: 50%;
          >img{
            display: inline-block;
            width: 25vw;
            height: 25vw;
          }
        }
        >dd{
          margin-top: 5vw;
          height: 10vw;
          text-align: center;
          vertical-align: middle;
        }
      }
    }
  }
</style>

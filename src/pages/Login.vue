<template>
  <div class="login">
    <mt-field
      class="username"
      label="用户名"
      placeholder="请输入用户名"
      :state="usernameState"
      v-model="username"
    ></mt-field>
    <mt-field
      class="password"
      label="密码"
      placeholder="请输入密码"
      type="password"
      :state="passwordState"
      v-model="password"
    ></mt-field>
    <mt-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handelLogin"
    >登录</mt-button>
    <mt-field
      placeholder="用户名需为4到16位（字母，数字，下划线，减号）,  密码最少6位,包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
      type="textarea"
      rows="4"
    ></mt-field>
    <!-- {{isLogin}} -->
  </div>
</template>

<script>
import {
  // mapMutations,
  mapActions
  // mapState
} from 'vuex'
// import * as mutationTypes from '../store/mutationTypes'
import * as actionTypes from '../store/actionTypes'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      usernameState: '',
      password: '',
      passwordState: ''
    }
  },
  // computed: {
  //   ...mapState([
  //     'isLogin'
  //   ])
  // },
  methods: {
    // ...mapMutations([
    //   mutationTypes.loginSuccess
    // ]),
    ...mapActions([
      actionTypes.login
    ]),
    detectionUsername () {
      // 用户名正则，4到16位（字母，数字，下划线，减号）
      const usernameReg = /^[a-zA-Z0-9_-]{4,16}$/
      if (!usernameReg.test(this.username)) {
        this.usernameState = 'error'
      } else {
        this.usernameState = 'success'
      }
    },
    detectionPassword () {
      // 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      const passwordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
      if (!passwordReg.test(this.password)) {
        this.passwordState = 'error'
      } else {
        this.passwordState = 'success'
      }
    },
    handelLogin () {
      this.detectionUsername()
      this.detectionPassword()
      // 判断用户名与密码格式是否正确
      if (this.usernameState === 'success' && this.passwordState === 'success') {
        // this.loginSuccess()
        const {
          username,
          password
        } = this
        this.login({
          username,
          password
        })
      } else {
        // 全局使用了MintUi,MintUi全局添加了$toast
        this.$toast({
          message: '登录信息格式错误',
          duration: 2000,
          position: 'bottom'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    padding-top: 36vw;
    >.username, .password, {
      margin-top: 8vw;
      margin-bottom: 8vw;
      height: 15vw;
      border-radius: 3vw;
      border: 1px solid #ccc;
    }
    .mint-cell{
      .mint-cell-left{
        display: none;
        color: white;
      }
    }
  }
</style>

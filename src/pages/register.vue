<template>
  <div class="register">
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
    <mt-field
      class="repassword"
      label="再次密码"
      placeholder="请再次输入密码"
      type="password"
      :state="repasswordState"
      v-model="repassword"
    ></mt-field>
    <mt-field
      class="email"
      label="email"
      placeholder="Input email"
      type="email"
      :state="emailState"
      v-model="email"
    ></mt-field>
    <mt-field
      class="phone"
      label="phone"
      placeholder="Input tel"
      type="tel"
      :state="phoneState"
      v-model="phone"
    ></mt-field>
    <mt-button
      class="register-btn"
      type="primary"
      size="large"
      @click="handelRegister"
    >注册</mt-button>
    <mt-field
      placeholder="用户名需为4到16位（字母，数字，下划线，减号）,  密码最少6位,包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
      type="textarea"
      rows="4"
    ></mt-field>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
import * as actionTypes from '../store/actionTypes'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      usernameState: '',
      password: '',
      passwordState: '',
      repassword: '',
      repasswordState: '',
      email: '',
      emailState: '',
      phone: '',
      phoneState: ''
    }
  },
  methods: {
    ...mapActions([
      actionTypes.register
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
      const passwordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/
      if (!passwordReg.test(this.password)) {
        this.passwordState = 'error'
      } else {
        this.passwordState = 'success'
      }
    },
    detectionrepassword () {
      if (this.repassword !== this.password) {
        this.repasswordState = 'error'
      } else {
        this.repasswordState = 'success'
      }
    },
    detectionEmail () {
      const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (!emailReg.test(this.email)) {
        this.emailState = 'error'
      } else {
        this.emailState = 'success'
      }
    },
    detectionPhone () {
      const phoneReg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
      if (!phoneReg.test(this.phone)) {
        this.phoneState = 'error'
      } else {
        this.phoneState = 'success'
      }
    },
    handelRegister () {
      this.detectionUsername()
      this.detectionPassword()
      this.detectionrepassword()
      this.detectionEmail()
      this.detectionPhone()
      if (this.usernameState === 'success' && this.passwordState === 'success' && this.repasswordState === 'success' && this.emailState === 'success' && this.phoneState === 'success') {
        const {
          username,
          password,
          email,
          phone
        } = this
        this.register({
          username,
          password,
          email,
          phone
        })
      } else {
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
  .register{
    >.username, .password, .repassword, .email, .phone{
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

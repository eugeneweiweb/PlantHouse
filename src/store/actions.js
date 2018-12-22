import * as actionTypes from './actionTypes'
import { postLogin, postRegister } from '../requests'
export default {
  [actionTypes.login] (store, userInfo) {
    postLogin(userInfo)
      .then(resp => {
        window.localStorage.setItem('loginUserInfo', JSON.stringify(resp))
        window.localStorage.setItem('loginUserInfoToken', JSON.stringify(resp.token))
        store.commit('loginSuccess')
      })
  },
  [actionTypes.register] (store, userInfo) {
    postRegister(userInfo)
      .then(resp => {
        console.log(resp)
      })
  }
}

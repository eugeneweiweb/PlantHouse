import * as actionTypes from './actionTypes'
import { postLogin } from '../requests'
export default {
  [actionTypes.login] (store, userInfo) {
    postLogin(userInfo)
      .then(resp => {
        window.localStorage.setItem('loginUserInfo', JSON.stringify(resp))
        store.commit('loginSuccess')
      })
  }
}

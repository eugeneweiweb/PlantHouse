import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/121685'
})

// 全局拦截
ajax.interceptors.request.use(config => {
  Indicator.open('加载中……')
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.data.code === 200) {
    return resp.data.data
  } else {
    Toast({
      message: '网络开了个小差',
      position: 'bottom',
      duration: 3000
    })
  }
})

// 获取首页轮播图方法
export const getSwiper = () => {
  return ajax.get('/api/v1.0.0.0/swiper')
}

// 获取侧边栏类型方法
export const getCategories = () => {
  return ajax.get('/api/v1.0.0.0/categories')
}

// 获取分类商品列表方法
export const getProductList = (categoriesId) => {
  return ajax.get(`/api/v1.0.0.0/categories/${categoriesId}`)
}

// 获取商品详情方法
export const getProductDetail = (productId) => {
  return ajax.get(`/api/v1.0.0.0/detail/${productId}`)
}
// 用户登录
export const postLogin = (userInfo) => {
  return ajax.post(`/api/v1.0.0.0/login`, {
    ...userInfo
  })
}
// 验证Token
export const postVerifyToken = (loginUserInfoToken) => {
  return ajax.post(`/api/v1.0.0.0/verifyToken`, {
    // loginUserInfoToken只有一个值，不能展开
    loginUserInfoToken
  })
}

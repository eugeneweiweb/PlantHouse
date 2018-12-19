import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/121685'
})

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

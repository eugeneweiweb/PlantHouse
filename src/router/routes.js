import fheader from '@/components/FHeader'
import Tabbar from '@/components/Tabbar'

const Home = () => import('@/pages/Home')
const Mall = () => import('@/pages/Mall')
const Category = () => import('@/pages/Category')
const Details = () => import('@/pages/Details')
const Cart = () => import('@/pages/Cart')
const Mine = () => import('@/pages/Mine')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    icon: '&#xe768;',
    isTabbar: true,
    components: {
      default: Home,
      fheader: fheader,
      tabbar: Tabbar
    }
  },
  {
    path: '/mall',
    name: 'mall',
    meta: {
      title: '店铺'
    },
    icon: '&#xe731;',
    isTabbar: true,
    components: {
      default: Mall,
      fheader: fheader,
      tabbar: Tabbar
    },
    children: [
      {
        path: ':categoriesId',
        name: 'categories',
        meta: {
          title: '店铺'
        },
        components: {
          default: Category,
          fheader: fheader
        }
      }
    ]
  },

  {
    path: '/details/:id',
    name: 'details',
    meta: {
      title: '详情'
    },
    components: {
      default: Details,
      fheader: fheader
    },
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车',
      isAuthRequire: true
    },
    icon: '&#xe74b;',
    isTabbar: true,
    components: {
      default: Cart,
      fheader: fheader,
      tabbar: Tabbar
    }
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      title: '我的'
    },
    icon: '&#xe73d;',
    isTabbar: true,
    components: {
      default: Mine,
      fheader: fheader,
      tabbar: Tabbar
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    components: {
      default: Login,
      fheader: fheader
    }
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    components: {
      default: Register,
      fheader: fheader
    }
  }
]

export default routes

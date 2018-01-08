import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 首页
import Home from '@/pages/Home/Home'
//分类
import Category from '@/pages/Category/Category'
//购物车
import Cart from '@/pages/Cart/Cart'
//我的
import Mine from '@/pages/Mine/Mine'
//登录注册
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
VueRouter.prototype.replace = function replace(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile' ,
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

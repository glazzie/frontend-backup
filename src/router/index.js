import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/products.vue'
import ProductWatch from '../views/productWatch.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductWatch',
    component: ProductWatch,
    params: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { logged: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { logged: true }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { authorize: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const { logged } = to.meta
  var user = JSON.parse(localStorage.getItem('currentUser'));
  var admin = user.admin
  var loggedin = user.firstName

  if(logged){
    if(loggedin){
      next({path: '/', query: { redirect: to.fullPath }})
    } else{
      next()
    }
  }

  if(authorize){
    if(!admin){
      next({path: '/', query: { redirect: to.fullPath }})
    } else{
      next()
    }
  }
  next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProducts from '../views/AllProducts';

import About from '../views/About.vue'
import ContactUS from '../views/ContactUS.vue'

import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreateProduct from '../views/products/CreateProduct.vue'
import EditProduct from '../views/products/EditProduct.vue'

import ProductDetails from '@/views/products/ProductDetails.vue'

import { projectAuth } from '@/firebase/config'


const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({name: 'login'})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: requireAuth

  },
  {
    path: '/AllProducts',
    name: 'allproducts',
    component: AllProducts,
    beforeEnter: requireAuth

  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUS,
    beforeEnter: requireAuth

  },
  {
    path: '/about',
    name: 'about',
  component: About,
  beforeEnter: requireAuth

  },
  
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/product/create',
    name: 'CreateProduct',
    component: CreateProduct,
    beforeEnter: requireAuth
  },
  {
    path:'/products/:id',
    name:'ProductDetails',
    component: ProductDetails,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path:'/products/:id',
    name:'EditProduct',
    component: EditProduct,
    beforeEnter: requireAuth,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

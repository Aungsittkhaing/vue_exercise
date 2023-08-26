import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AllListPage from "../views/myShopList/AllList.vue"
import TodoListpage from "../views/myList/AllList.vue"
import ContactPage from "../views/Contact.vue"
import errorPage from "../views/404_Page.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/alllist',
    name: 'allList',
    component: AllListPage
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: TodoListpage
  },
  {
    path: '/contact',
    name: 'contact',
    alias: '/contactus',
    component: ContactPage
  },
  {
    path: '/404_page',
    name: '404_page',
    component: errorPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: errorPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

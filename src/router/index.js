import { createRouter, createWebHistory } from 'vue-router'

// 只保留纯前端可实现的展示页面
const Home = () => import('../views/home/Home.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: "个人博客"
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页 - 个人博客"
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      title: "文章详情 - 个人博客"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

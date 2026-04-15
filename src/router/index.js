import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from '../views/login/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home/Home.vue'),
            meta: {requiresAuth: true}
        }
    ]
})

// 路由守卫：检查是否需要登录
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (to.meta.requiresAuth && !token) {
        // 需要登录但未登录，跳转到登录页
        next('/login')
    } else if (to.path === '/login' && token) {
        // 已登录但访问登录页，跳转到首页
        next('/')
    } else {
        // 正常访问
        next()
    }
})

export default router

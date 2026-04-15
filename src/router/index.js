import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from '../views/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        }
    ]
})

export default router

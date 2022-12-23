import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage'
import AccountPage from '@/views/AccountPage'
import DashBoard from '@/views/DashBoard'
import PageNotFound from '@/views/PageNotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage,
        meta: {
            auth: false,
        },
    },
    {
        path: '/auth',
        name: 'auth',
        component: AccountPage,
        meta: {
            auth: false,
        },
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
        meta: {
            auth: true,
        },
    },
    {
        path: '*',
        name: 'pageNotFound',
        component: PageNotFound,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !localStorage.getItem('token')) {
        next('*')
    } else if (!to.meta.auth && localStorage.getItem('token')) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router

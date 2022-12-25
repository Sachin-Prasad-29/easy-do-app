import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage'
import AccountPage from '@/views/AccountPage'
import YourWork from '@/views/YourWork'
import ProjectPage from '@/views/ProjectPage'
import DashBoard from '@/views/DashBoard'
import PeoplePage from '@/views/PeoplePage'
import ProfilePage from '@/views/ProfilePage'
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
        path: '/your-work',
        name: 'yourwork',
        component: YourWork,
        meta: {
            auth: true,
        },
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectPage,
        meta: {
            auth: true,
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
        path: '/people',
        name: 'people',
        component: PeoplePage,
        meta: {
            auth: true,
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
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
        next('/your-work')
    } else {
        next()
    }
})

export default router

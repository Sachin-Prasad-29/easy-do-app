import Vue from 'vue'
import Vuex from 'vuex'
import { getUserSvc } from '@/services/user.services'
import { getProjectsSvc } from '@/services/project.services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userDetails: null,
        currPage: '',
        projects: [],
    },
    getters: {
        userDetails: (state) => state.userDetails,
        currPage: (state) => state.currPage,
        projects: (state) => state.projects,
    },
    mutations: {
        setUserDetails: (state, userDetails) => {
            state.userDetails = userDetails
        },
        setCurrPage: (state, currPage) => {
            state.currPage = currPage
        },
        setProjects: (state, projects) => {
            state.projects = projects
        },
    },
    actions: {
        async getUserDetails({ commit }) {
            try {
                const userDetails = await getUserSvc()
                commit('setUserDetails', userDetails)
            } catch (error) {
                console.error('Some Error Occured ->', error.message)
            }
        },
        async getProjects({ commit }) {
            try {
                const response = await getProjectsSvc()
                commit('setProjects', response.projects)
            } catch (error) {
                console.error('Some Error Occured ->', error.message)
            }
        },
    },
    modules: {},
})

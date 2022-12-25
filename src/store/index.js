import Vue from 'vue'
import Vuex from 'vuex'
import { getUserDetails } from '@/services/user.services'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userDetails: null,
        currPage: '',
    },
    getters: {
        userDetails: (state) => state.userDetails,
        currPage: (state) => state.currPage,
    },
    mutations: {
        setUserDetails: (state, userDetails) => {
            state.userDetails = userDetails
        },
        setCurrPage: (state, currPage) => {
            state.currPage = currPage
        },
    },
    actions: {
        async getUserDetails({ commit }) {
            const userDetails = await getUserDetails()
            commit('setUserDetails', userDetails)
        },
    },
    modules: {},
})

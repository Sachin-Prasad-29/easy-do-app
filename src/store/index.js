import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userDetails: null,
    },
    getters: {
        userDetails: (state) => state.userDetails,
    },
    mutations: {},
    actions: {},
    modules: {},
})

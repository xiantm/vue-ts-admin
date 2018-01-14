import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createLogger from 'vuex/dist/logger'
import { MutationTree } from 'vuex'
import { State } from './state'

Vue.use(Vuex)

const mutations: MutationTree<State> = {
    updateWindowInnerHeight: (state: State, payload) => {
        state.windowInnerHeight = payload.windowInnerHeight
    }
}
const store = new Vuex.Store({
    state: {
        windowInnerHeight: window.innerHeight + 'px'
    },
    modules: {
        user
    },
    mutations,
    plugins: [createLogger({})] // 打印日志
})

window.onresize = () => {
    store.commit('updateWindowInnerHeight', { windowInnerHeight: window.innerHeight + 'px' })
}
export default store

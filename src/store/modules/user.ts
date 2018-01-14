import { Module, MutationTree, ActionTree } from 'vuex'
import { getToken, setToken, removeToken } from '../../utils/auth'
import { UserState, State } from '../state'
import { SET_TOKEN, LOGIN_OUT } from '../mutation-types'
import { login } from '../../api/user'

let state = {
    token: getToken()
}

const mutations: MutationTree<UserState> = {
    [SET_TOKEN]: (state: UserState, payload) => {
        state.token = payload.token
    },
    [LOGIN_OUT]: (state: UserState) => {
        state.token = undefined
        removeToken()
    }
}

const actions: ActionTree<UserState, State> = {
    login: ({ commit, state }, { username, password }) => {
        return new Promise((resolve, reject) => {
            login(username, password).then(response => {
                const data = response.data
                setToken(data.access_token)
                commit(SET_TOKEN, { token: data.access_token })
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}




export default {
    state,
    mutations,
    actions
}

const common = {
    state: {
        boo: false,  // 全局loading
    },
    mutations: {
        // 全局 loading
        SET_LOADING(state, boo) {
            state.boo = boo
        }
    },
    actions: {
        // 全局 loading
        loading({ commit }, boo) {
            commit('SET_LOADING', boo)
        }
    }
}

export default common
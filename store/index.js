import moment from 'moment'
export const strict = false

export const state = () => ({
    loading: false,
    loadingPage: false,
    error: null
})

export const mutations = {
    setLoading (state, payload) {
        state.loading = payload
    },
    setLoadingPage (state, payload) {
        state.loadingPage = payload
    },
    setError (state, payload) {
        console.log('setError mutation called')
        console.log(payload)
        state.error = payload
    },
    clearError (state) {
        state.error = null
    }
}

export const actions = {
    // ORIGINAL nuxtServerInit function
    // nuxtServerInit ({commit}, {req}) {
    //     if (req.user) {
    //         console.log('Entering nuxtServerInit')
    //         console.log(req.user)
    //         commit('users/setUser', req.user, { root: true })
    //     }
    // },

    async nuxtServerInit ({commit, dispatch}, {req}) {
        console.log('Entering nuxtServerInit', moment().format("DD-MM-YYYY HH:mm:ss"))
        if (req.user) {
            console.log('User is logged in from nuxtServerInit')
            const userId = req.user.uid
            console.log('userId: ', userId)
            // dispatch('users/loadedUser', userId, { root: true})
            commit('users/setLoadedUser', req.user, { root: true })
            this.$router.push({'path': 'home'})
        } else {
            console.log('User is not logged in from nuxtServerInit')
        }
    },
    clearError ({commit}) {
        commit('clearError')
    }
}

export const getters = {
    loading (state) {
        return state.loading
    },
    loadingPage (state) {
        return state.loadingPage
    },
    error (state) {
        return state.error
    }
}
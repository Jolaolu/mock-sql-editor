import { queries } from '@/utils/queries'

export const state = () => ({
  savedQueries: [],
  result: {},
  loading: false
})

export const mutations = {
  SAVE_QUERY (state, query) {
    state.savedQueries.push(...query)
  },
  SET_RESULT (state, query) {
    state.result = query
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}
export const getters = {
  currentResult: state => state.result,
  savedQueries: state => state.savedQueries,
  loading: state => state.loading
}

export const actions = {
  getResults ({ commit, dispatch }, data) {
    dispatch('setLoading')
    return new Promise((resolve, reject) => {
      const queryData = queries[data.toLowerCase().trim()]
      const results = {
        headers: [],
        data: queryData
      }
      if (queryData.length >= 1) {
        results.headers = Object.keys(queryData[0])
      }
      commit('SET_RESULT', results)
      resolve(results)
    })
  },
  setLoading ({ commit }, payload) {
    commit('SET_LOADING', true)
    setTimeout(() => { commit('SET_LOADING', false) }, 2000)
  }
}

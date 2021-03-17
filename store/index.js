import { queries } from '~/utils/utils'

export const state = () => ({
  savedQueries: [],
  result: {},
  loading: false,
  error: false
})

export const mutations = {
  SAVE_QUERY (state, query) {
    state.savedQueries.push(query)
  },
  SET_RESULT (state, query) {
    state.result = query
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  DELETE_QUERY (state, payload) {
    state.savedQueries.splice(payload, 1)
  },
  SET_ERROR (state, payload) {
    state.error = payload
    state.result = {}
  }
}
export const getters = {
  currentResult: state => state.result,
  savedQueries: state => state.savedQueries,
  loading: state => state.loading,
  error: state => state.error
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
      if (queryData === undefined) {
        dispatch('setError')
        return null
      }
      if (queryData.length >= 1) {
        results.headers = Object.keys(queryData[0])
      }
      commit('SET_RESULT', results)
      resolve(results)
    })
  },
  saveQuery ({ commit, dispatch }, data) {
    commit('SAVE_QUERY', data)
  },
  deleteQuery ({ commit, dispatch }, data) {
    commit('DELETE_QUERY', data)
  },
  setError ({ commit }) {
    commit('SET_ERROR', true)
    setTimeout(() => { commit('SET_ERROR', false) }, 10000)
  },
  setLoading ({ commit }) {
    commit('SET_LOADING', true)
    setTimeout(() => { commit('SET_LOADING', false) }, 2000)
  }
}

/* 영화 검색과 관련된 데이터를 취급하는 용도의 모듈 */

import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({ 
    movies: [],
    message: '',
    loading: false 
  }),
  getters: {},
  mutations: {
    // 변이 메소드 생성
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  actions: {
    async searchMovies({ commit }, payload) {

      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      
      // 데이터 이름들은 OMDb API에서 제공하는 작명방식.
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search
      })

    }
  }
}
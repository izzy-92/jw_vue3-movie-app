import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  state: () => ({ 
    movies: [],
    message: 'Search from the movie title!', // 기본 메시지 출력
    loading: false
  }),
  getters: {},
  mutations: {
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
    // 영화 정보 검색
    async searchMovies({ state, commit }, payload) {
      // 사용자가 해당 action을 동시에 여러번 실행시켰을때 로딩재동작을 방지하는 조건문 추가!
      if (state.loading) return
      
      commit('updateState', {
        message: '',
        loading: true
      })
      try {
      // 영화 정보 요청
      const res = await _fetchMovie({
        ...payload,
        page: 1
      })
      
      // 데이터 이름들은 OMDb API에서 제공하는 작명방식.
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // 추가 요청 전송!
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if (page > payload.number / 10) break;
          const res = await _fetchMovie({
            ...payload,
            page : page
          })
          const { Search } = res.data
          commit('updateState', {
            movies: [
              ...state.movies,
              ..._uniqBy(Search, 'imdbID')]
          })
        }
        }
        
      } catch (message) {
        commit('updateState', {
          movies: [], 
          message
        })
      } finally {
        commit('updateState', {
          loading: false 
        })
      }
    }
  }
}

// 현재 파일 내부에서만 사용
function _fetchMovie(payload) {
  const { title, type, year, page } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        // 예외처리 
        if (res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}
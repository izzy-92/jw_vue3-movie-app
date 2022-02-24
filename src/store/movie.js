import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMsg = 'Search for the movie title!'

export default {
  namespaced: true,
  state: () => ({ 
    movies: [],
    message: _defaultMsg,
    loading: false,
    theMovie: {}
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    // 초기화
    resetMovies(state) {
      state.movies = []
      state.message = _defaultMsg
      state.loading = false
    }
  },
  actions: {
    // 영화 정보 검색
    async searchMovies({ state, commit }, payload) {
      // 사용자가 해당 action을 동시에 여러번 실행시켰을때 로딩재동작을 방지
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
      } catch ({ message }) {
        commit('updateState', {
          movies: [], 
          message
        })
      } finally {
        commit('updateState', {
          loading: false 
        })
      }
    },
    // 단일 영화 상세정보 요청
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        theMovie: {},
        loading: true
      })
      try {
        const res = await _fetchMovie(payload)
        commit('updateState', {
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie : {} 
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

// netlify/functions/movie의 Serverless Function 실행 (비동기 처리)
async function _fetchMovie(payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}
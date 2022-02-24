import movieStore from '~/store/movie'
import _cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'

describe('store/movie.js', () => {
  let store
  
  beforeEach(() => {
    store = _cloneDeep(movieStore)
    store.state = store.state()
    store.commit = (name, payload) => {
      store.mutations[name](store.state, payload)
    }
    store.dispatch = (name, payload) => {
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch
      }
      return store.actions[name](context, payload)
    }
  })
  // 테스트1) 데이터 초기화를 해주는 변이 메소드의 정상적인 동작여부를 알아보기 위한 테스트
  test('영화 데이터를 초기화합니다', () => {
    store.commit('updateState', {
      movies: [{ imdbID: '1'}],
      message: 'Hello',
      loading: true
    })
    store.commit('resetMovies')
    expect(store.state.movies).toEqual([])
    expect(store.state.message).toBe('Search for the movie title!')
    expect(store.state.loading).toBe(false)
  })

  // 테스트2) movies의 내용이 정상적으로 갱신되었는지 알아보기 위한 테스트
  test('영화 목록을 잘 가져온 경우 데이터를 확인합니다.', async () => {
    const res = {
      data: {
        totalResults: '1',
        Search: [
          {
            imdbID: '영화id',
            Title: '영화제목',
            Poster: '영화이미지',
            Year: '영화연도'
          }
        ]
      }
    }
    // post 모의함수 처리 (네트워크에 영향받지않고도 동작되도록 처리)
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovies')
    expect(store.state.movies).toEqual(res.data.Search)
  })

  // 테스트3) 영화목록을 가져오지 못했을때 에러메시지가 잘 출력되는지 확인하는 테스트
  test('영화 목록을 가져오지 못한 경우 에러 메시지를 확인합니다', async () => {
    const errorMsg = 'Network Error.'
    // 모의 함수(post), 비동기 거부처리
    axios.post = jest.fn().mockRejectedValue(new Error(errorMsg))
    await store.dispatch('searchMovies')
    expect(store.state.message).toBe(errorMsg)
  })

  // 테스트4) 중복된 데이터 -> 정상적 고유화 처리여부 확인 테스트
  test('영화 아이템이 중복된 경우 고유하게 처리합니다.', async () => {
    const res = {
      data: {
        totalResults: '1',
        Search: [
          {
            imdbID: '1',
            Title: '영화제목',
            Poster: '영화이미지',
            Year: '영화연도'
          },
          {
            imdbID: '1',
            Title: '영화제목',
            Poster: '영화이미지',
            Year: '영화연도'
          },
          {
            imdbID: '1',
            Title: '영화제목',
            Poster: '영화이미지',
            Year: '영화연도'
          }
        ]
      }
    }
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovies')
    expect(store.state.movies.length).toBe(1)
  })

  // 테스트5) 단일 영화의 상세정보 가져오기 테스트
  test('단일 영화의 상세정보를 잘 가져온 경우 데이터를 확인합니다' , async () => {
    const res = {
      data: {
        imdbID: '1',
        Title: 'Frozen',
        Poster: 'frozen.jpg',
        Year: '2022'
      }
    }
    axios.post = jest.fn().mockResolvedValue(res)
    await store.dispatch('searchMovieWithId')
    expect(store.state.theMovie).toEqual(res.data)
  })
})
// store 생성 (createStore)
import { createStore } from "vuex";
import movie from './movie.js'
import about from './about'

export default createStore({
  // modules 속성 추가
  modules: {
    movie,
    about
  }
})
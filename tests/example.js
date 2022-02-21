import axios from 'axios'
import _upperFirst from 'lodash/upperFirst'
import _toLower from 'lodash/toLower'

 // 영화 정보를 가져오는 코드를 만들어보자!
export async function fetchMovieTitle() {
  const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988')
  return _upperFirst(_toLower(res.data.Title))
}
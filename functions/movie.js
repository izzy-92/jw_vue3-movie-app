const axios = require('axios')
// 환경변수로 지정해놓은 데이터 할당
const { OMDB_API_KEY } = process.env

// 영화 검색 요청을 처리해줄 수 있는 Serverless Function 생성
exports.handler = async function (event) {
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}` // 여러개의 영화 정보 요청

  
  try {
    const { data } = await axios.get(url)
    // 데이터를 잘 가지고 왔을때..
    if (data.Error) {
      return {
        statusCode: 400, // 잘못된 요청 처리 코드
        body: data.Error
      }
    }
    // 정상적인 응답에 대한 처리
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
    // 데이터에 문제가 생겼을때..
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}
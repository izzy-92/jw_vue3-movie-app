exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      name: 'JIWONY',
      age: 30,
      email: 'test@naver.com'
    })
  }
}
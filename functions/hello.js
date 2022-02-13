exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      name: 'JIWONY',
      age: 30,
      email: 'test@naver.com'
    })
  }
}
export default {
  install(appload) {
    // $loadImage 플러그인 생성
    appload.config.globalProperties.$loadImage = src => {
      return new Promise(resolve => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          // load 완료!
          resolve()
        })
      })
    }
  }
}
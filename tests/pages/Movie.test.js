import { shallowMount } from '@vue/test-utils'
import store from '~/store'
import router from '~/routes'
import loadImage from '~/plugins/loadImage'
import Movie from '~/pages/Movie.vue'

describe('routes/Movie.vue', () => {
  let wrapper

  beforeEach(async () => {
    // Mocking - window.scrollTo 에러방지
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = shallowMount(Movie, {
      global: {
        plugins: [
          store,
          router,
          loadImage
        ]
      }
    })
  })

  test('최초 접속한 URL의 파라미터를 확인합니다', () => {
    expect(wrapper.vm.$route.params.dynamicID).toBe('tt1234567') // 가짜 id값 명시 
  })

  test('지정한 이미지 크기로 URL을 변경합니다.', () => {
    const url = 'https://google.com/sample_image_SX300.jpg' // 샘플이미지 url주소
    expect(wrapper.vm.requestDiffSizeImage(url)).toContain('SX700')
    // 임의로 명시하고 싶은 사이즈 (900) 테스트
    expect(wrapper.vm.requestDiffSizeImage(url, 900)).toContain('SX900')
  })
  
  test('정상적인 이미지 주소가 아닌 경우 빈 문자를 반환합니다.', () => {
    expect(wrapper.vm.requestDiffSizeImage()).toBe('')
    expect(wrapper.vm.requestDiffSizeImage('N/A')).toBe('')
  })
})
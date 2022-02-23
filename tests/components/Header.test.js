import { shallowMount } from '@vue/test-utils'
import router from '~/routes/index.js'
import store from '~/store'
import Header from '~/components/Header.vue'

// 테스트 그룹생성
describe('components/Header.vue 테스트', () => {
  let wrapper

  beforeEach(async () => {
    // 모의(mock)함수로 만들어 페이지 이동 전 스크롤 최상단이동 에러발생방지
    window.scrollTo = jest.fn()
    // 페이지 이동
    router.push('/movie/tt1234567') // 임시 ID값 지정
    await router.isReady()
    wrapper = shallowMount(Header, {
      global: {
        plugins: [
          router,
          store
        ]
      }
    })
  })
  // 1번째 테스트
  test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
  // 2번째 테스트
  test('경로 정규표현식과 일치해야합니다', () => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })
  // 3번째 테스트
  test('경로 정규표현식과 일치하지 않아야 합니다.', () => {
    const regExp = /^\/jiwony/
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
})
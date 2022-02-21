import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메시지를 변경합니다', async () => {
  const wrapper = mount(Example)
  // wrapper.vm속성 === this
  expect(wrapper.vm.msg).toBe('Hello Vue test Utils!')
  // wrapper.vm.msg = 'Hello Jiwony!'
  await wrapper.setData({
    msg: 'Hello Jiwony!'
  })
  expect(wrapper.vm.msg).toBe('Hello Jiwony!')
  expect(wrapper.find('div').text()).toBe('Hello Jiwony!')
})
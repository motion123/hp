import Foo from '../Foo.vue'
import { shallowMount } from '~/node_modules/@vue/test-utils'
import flushPromises from 'flush-promises'

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: 'value' })),
  }
})

it('fetches async when a button is clicked', async () => {
  const wrapper: any = shallowMount(Foo)
  wrapper.find('button').trigger('click')
  await flushPromises()
  expect(wrapper.vm.value).toBe('value')
})

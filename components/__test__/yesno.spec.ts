// @ts-ignore
import YesNoComponent from '~/components/YesNo.vue'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

describe('Click Event', () => {
  it('Click on yes button calls our method with argument "yes"', () => {
    const spy = sinon.spy()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy,
      },
    })
    wrapper.find('button.yes').trigger('click')

    spy.calledWith('yes')
  })
})

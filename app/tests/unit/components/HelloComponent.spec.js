import { shallowMount } from '@vue/test-utils'
import HelloComponent from '../../../src/components/HelloComponent.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Guybrush'
    const wrapper = shallowMount(HelloComponent, {
      propsData: {
        name: msg
      }
    })
    expect(wrapper.text()).toContain('Hello Guybrush !')
  })
})

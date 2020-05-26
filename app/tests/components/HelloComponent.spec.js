import { shallowMount } from '@vue/test-utils'
import HomeComponent from '../../src/components/HomeComponent.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HomeComponent)
    expect(wrapper.text()).toContain('Node.js')
  })
})

import Vue from 'vue'
import Home from '@/components/Home'

describe('components/Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent.trim()).toEqual('Home')
  })
})

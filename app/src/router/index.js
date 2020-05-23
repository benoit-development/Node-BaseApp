import Vue from 'vue'
import Router from 'vue-router'
import HelloComponent from '../components/HelloComponent.vue'
import DataComponent from '../components/DataComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'hello' }
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloComponent
    },
    {
      path: '/data',
      name: 'data',
      component: DataComponent
    }
  ]
})

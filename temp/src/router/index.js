import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import DataComponent from '../components/DataComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
      props: { }
    },
    {
      path: '/data',
      name: 'data',
      component: DataComponent
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../views/Home.vue'
import DataComponent from '../views/Data.vue'

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

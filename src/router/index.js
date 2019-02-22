import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import keigokawaguchi from '@/components/keigokawaguchi'
import keigo from '@/components/keigo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/keigokawaguchi',
      name: 'keigokawaguchi',
      component: keigokawaguchi,
      children: [
        {
          path: '/keigo',
          name: 'keigo',
          component: keigo
        }
      ]
    }
  ]
})

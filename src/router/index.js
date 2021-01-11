import Vue from 'vue'
import Router from 'vue-router'
import {userRouter} from './user/index'

Vue.use(Router)

export default new Router({
  routes: [
    ...userRouter
  ]
})

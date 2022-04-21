import Vue from 'vue'
import Vuex from 'vuex'

import tasksModule from '@/modules/tasks'
import counterModule from '@/modules/count'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Desde store',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasksModule,
    counterModule
  }
})

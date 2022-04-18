import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits:[
      {id:0, name: 'Apple', cuantity:0, emoji: '🍎' },
      {id:1, name: 'Pineapple', cuantity:0, emoji: '🍍' },
      {id:2, name: 'Banana', cuantity:0, emoji: '🍌' },
      {id:3, name: 'Pear', cuantity:0, emoji: '🍐' },
      {id:4, name: 'Cherry', cuantity:0, emoji: '🍒' },
      {id:5, name: 'Orange', cuantity:0, emoji: '🍊' },
    ]
  },
  getters: {
  },
  mutations: {
    increaseCF(state, index){
      state.fruits[index].cuantity++;
    },
    resetCF(state){
      // reset fruit cuantity
      state.fruits.map( function (fruit){
        fruit.cuantity = 0;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Counter from './Counter.vue'
// import store from './store'
import store from './myStore'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})

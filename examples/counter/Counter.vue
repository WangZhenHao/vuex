<template>
  <div id="app">
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from 'vuex'
console.log(mapState(['count']))
export default {
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement' 
    ])
  }
}
</script>

<template>
  <div id="app" class="container">
    <Headerb></Headerb>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Listb></Listb>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Headerb from './components/Headerb.vue'
import Listb from './components/Listb.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Headerb,
    Listb,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

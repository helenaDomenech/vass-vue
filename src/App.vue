<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <chart></chart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import chart from './components/chart.vue'

export default {
  name: 'app',
  components: {
    chart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height: 100vh;
}
</style>

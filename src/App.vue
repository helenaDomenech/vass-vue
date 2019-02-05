<template lang="pug">
  #app
    ec-header
    ec-nav
    main
      router-view
</template>

<script>
import EcNav from '@/components/ec-nav';
import EcHeader from '@/components/ec-header';


export default {
  name: 'app',
  data() {
    return {
      autenticado: false,
      mockAccount: {
        user: "vueuser",
        password: "12345"
      }
    }
  },
  components: {
    EcNav,
    EcHeader
  }
}
</script>

<style lang="sass">
#app
  background-image: url("assets/background_app.jpg")
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  box-sizing: border-box
  color: #2c3e50
  margin-top: 0
  height: 100vh

  main
    display: flex
    justify-content: center
    align-items: center
    height: 100%

</style>

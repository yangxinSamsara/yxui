<template>
  <div id="app">
  <yx-test></yx-test>
  </div>
</template>

<script>
import YxTest from './YxTest.vue'

export default {
  name: 'App',
  components: {
    YxTest
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

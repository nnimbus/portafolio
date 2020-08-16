<template>
  <div id="app">
    <Init/>
    <Second/>
  </div>
</template>

<script>
import Init from './components/Init'
import Second from './components/Second'

export default {
  name: 'App',
  components: {
    Init,
    Second
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

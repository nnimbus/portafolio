<template>
  <div id="app">
    <HeaderC/>
    <div id="main">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>

import FooterComponent from './components/FooterComponent'
import HeaderC from './components/HeaderC' 



export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderC,
  },
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main{
  min-height: 800px;
}
</style>

<template>
  <div id="app">
    <HeaderC/>
    <div id="main">
      <div class="btn-group">
        <router-link to="/left"><button type="button" class="btn btn-light">Left</button></router-link>
        <router-link to="/middle"><button type="button" class="btn btn-light">Middle</button></router-link>
        <router-link to="/right"><button type="button" class="btn btn-light">Right</button></router-link>
      </div>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>

    </div>
    <FooterComponent/>
  </div>
</template>

<script>

import FooterComponent from './components/FooterComponent'
import HeaderC from './components/HeaderC' 
// import Left from './components/Left'


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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

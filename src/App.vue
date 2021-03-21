<template>
  <div id="app">
    <main-section></main-section>
    <nav-bar></nav-bar>

  </div>
</template>

<script>
import mainSection from './components/main-section/main-section';
import navBar from './components/nav-bar/nav-bar';

export default {
  name: 'App',
  components: {
    mainSection,
    navBar
  }
}
</script>

<style lang="scss">
#app {
  background: rgb(215,222,231);
  background: linear-gradient(135deg, #d7dee7 0%, #c9d0da 100%);
}
</style>

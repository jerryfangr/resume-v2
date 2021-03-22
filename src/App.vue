<template>
  <div id="app">
    <main-section></main-section>
    <section class="download">
      <a href="/方涵聪-应聘前端-2021.pdf" download>下载 PDF 简历</a>
    </section>
    <nav-bar></nav-bar>

  </div>
</template>

<script>
import 'animate.css';
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
  margin: 0;
  padding: 1px;
  width: 100%;
  min-height: 100vh;
  background: #e6eaf0;
  background: linear-gradient(315deg, #c4cbd4 0%, #e6eaf0 30%, #e6eaf0 100%);
  section {
    width: 100vmin;
  }

  section.download {
    margin: 0 auto;
    margin-top: 5vmin;
    text-align: center;
    a {
      text-decoration: none;
      display: inline-block;
      font-size: 2vmin;
      line-height: 16px;
      padding: 2vmin 2vmin;
      border: 1px solid #cbcdcf;
      border-radius: 2px;
      color: #3d4451;
      font-weight: bold;
      transition: box-shadow 0.3s;    
      &:hover {
        opacity: 0.95;
        box-shadow: 0 0.5vmin 1vmin 0 rgba(0,0,0, 0.18), 0 0.5vmin 2vmin 0 rgba(0,0,0, 0.15);
      }
    }
  }
}
</style>
